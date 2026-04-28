/**
 * Lightweight in-memory rate limiter — sliding-window token bucket per key.
 *
 * Single-instance only (resets on cold start; not shared across Vercel
 * function instances). Adequate for v1 anti-abuse on form endpoints.
 * Swap to Upstash / Vercel KV when traffic justifies the operational cost.
 *
 * Usage:
 *   import { rateLimit } from "@/lib/ratelimit";
 *   const ok = rateLimit(`pilots:${ip}`, 5, 60_000); // 5 reqs / minute
 *   if (!ok) return NextResponse.json({ error: "..." }, { status: 429 });
 */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (existing.count >= limit) {
    return false;
  }

  existing.count += 1;
  return true;
}

/** Best-effort client-IP extraction from Vercel request headers. */
export function clientIp(headers: Headers): string {
  return (
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headers.get("x-real-ip") ??
    "unknown"
  );
}
