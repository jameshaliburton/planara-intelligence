import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit, clientIp } from "@/lib/ratelimit";
import { verifyTurnstile } from "@/lib/verify-turnstile";

type Body = {
  name?: string;
  company?: string;
  role?: string;
  equipment?: string;
  description?: string;
  email?: string;
  vertical?: string;
  /** Honeypot — should be empty for real submissions. */
  website?: string;
  /** Cloudflare Turnstile token. */
  cfToken?: string;
};

const TRIM_MAX = 2000;

function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, TRIM_MAX);
}

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 }
    );
  }

  // Rate limit: 5 submissions per IP per 10 minutes.
  const ip = clientIp(req.headers);
  if (!rateLimit(`pilots:${ip}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json(
      { error: "Too many submissions. Try again in a few minutes." },
      { status: 429 }
    );
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot — silently accept and discard
  if (clean(body.website)) {
    return NextResponse.json({ success: true });
  }

  // Cloudflare Turnstile verification (skipped if env not configured)
  const turnstile = await verifyTurnstile(body.cfToken, ip);
  if (!turnstile.ok) {
    return NextResponse.json(
      { error: "Could not verify the request. Please refresh and try again." },
      { status: 400 }
    );
  }

  const name = clean(body.name);
  const company = clean(body.company);
  const role = clean(body.role);
  const equipment = clean(body.equipment);
  const description = clean(body.description);
  const email = clean(body.email);
  const vertical = clean(body.vertical) || "unspecified";

  if (!name || !company || !role || !equipment || !description || !email) {
    return NextResponse.json(
      { error: "Please fill out every field." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const fromAddress = process.env.EMAIL_FROM ?? "hello@planara.com";
    const fromName = process.env.EMAIL_FROM_NAME ?? "Planara";
    const fromHeader = `${fromName} <${fromAddress}>`;
    const inbox = process.env.PILOTS_INBOX ?? "pilots@planara.com";

    await resend.emails.send({
      from: fromHeader,
      to: inbox,
      replyTo: email,
      subject: `[Pilot] ${vertical} — ${company}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 640px; color: #131820;">
          <h2 style="font-size: 16px; margin: 0 0 16px;">New pilot application</h2>
          <table style="font-size: 14px; border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 6px 12px 6px 0; color: #627084; vertical-align: top;">Vertical</td><td style="padding: 6px 0;">${escape(vertical)}</td></tr>
            <tr><td style="padding: 6px 12px 6px 0; color: #627084; vertical-align: top;">Name</td><td style="padding: 6px 0;">${escape(name)}</td></tr>
            <tr><td style="padding: 6px 12px 6px 0; color: #627084; vertical-align: top;">Company</td><td style="padding: 6px 0;">${escape(company)}</td></tr>
            <tr><td style="padding: 6px 12px 6px 0; color: #627084; vertical-align: top;">Role</td><td style="padding: 6px 0;">${escape(role)}</td></tr>
            <tr><td style="padding: 6px 12px 6px 0; color: #627084; vertical-align: top;">Equipment</td><td style="padding: 6px 0;">${escape(equipment)}</td></tr>
            <tr><td style="padding: 6px 12px 6px 0; color: #627084; vertical-align: top;">Email</td><td style="padding: 6px 0;"><a href="mailto:${escape(email)}" style="color: #131820;">${escape(email)}</a></td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #E2E5EA; margin: 20px 0;" />
          <p style="font-size: 14px; color: #627084; margin: 0 0 6px;">Description</p>
          <p style="font-size: 14px; line-height: 1.55; white-space: pre-wrap; margin: 0;">${escape(description)}</p>
        </div>
      `,
    });

    // Confirmation to applicant
    await resend.emails.send({
      from: fromHeader,
      to: email,
      subject: "We got your application",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; color: #131820;">
          <div style="padding: 32px 0; border-bottom: 1px solid #E2E5EA;">
            <p style="font-size: 14px; font-weight: 600; margin: 0;">Planara</p>
          </div>
          <div style="padding: 32px 0;">
            <p style="font-size: 15px; line-height: 1.6; margin: 0 0 16px;">
              Thanks, ${escape(name.split(" ")[0])}.
            </p>
            <p style="font-size: 14px; line-height: 1.6; color: #627084; margin: 0 0 16px;">
              We received your application for a ${escape(vertical)} pilot deployment. We read every one. If we think there&rsquo;s a fit, we&rsquo;ll come back to you within a week with next steps.
            </p>
            <p style="font-size: 14px; line-height: 1.6; color: #627084; margin: 0 0 24px;">
              In the meantime, the marine reference deployment gives you a feel for what Conduit looks like once it&rsquo;s running on real documentation.
            </p>
            <a href="https://intelligence.planara.com/marine" style="display: inline-block; padding: 10px 20px; background-color: #131820; color: #ffffff; font-size: 13px; font-weight: 500; text-decoration: none; border-radius: 3px;">
              See the marine reference
            </a>
          </div>
          <div style="padding: 20px 0; border-top: 1px solid #E2E5EA;">
            <p style="font-size: 12px; color: #627084; margin: 0;">
              Planara &middot; Technical Service Intelligence
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Pilot application email failed:", err);
    return NextResponse.json(
      { error: "Failed to send. Please try again or email pilots@planara.com directly." },
      { status: 500 }
    );
  }
}
