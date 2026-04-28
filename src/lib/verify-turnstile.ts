/**
 * Server-side verification of a Cloudflare Turnstile token.
 *
 * Returns:
 *   - { ok: true }  → token verified
 *   - { ok: true, skipped: true } → secret not configured (dev / preview without keys)
 *   - { ok: false, reason }  → verification failed; reject the request
 */

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export type TurnstileResult =
  | { ok: true; skipped?: boolean }
  | { ok: false; reason: string };

export async function verifyTurnstile(
  token: string | undefined,
  remoteIp?: string
): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // Not configured — allow through. Production must set the env var.
    return { ok: true, skipped: true };
  }

  if (!token) {
    return { ok: false, reason: "missing-token" };
  }

  const form = new URLSearchParams();
  form.set("secret", secret);
  form.set("response", token);
  if (remoteIp) form.set("remoteip", remoteIp);

  try {
    const res = await fetch(VERIFY_URL, {
      method: "POST",
      body: form,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const data = (await res.json()) as {
      success: boolean;
      "error-codes"?: string[];
    };

    if (data.success) return { ok: true };
    return {
      ok: false,
      reason: data["error-codes"]?.join(",") ?? "verify-failed",
    };
  } catch (err) {
    console.error("Turnstile verify error:", err);
    return { ok: false, reason: "verify-error" };
  }
}
