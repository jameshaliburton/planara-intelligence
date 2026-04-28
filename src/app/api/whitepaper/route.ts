import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { readFile } from "fs/promises";
import { join } from "path";
import { rateLimit, clientIp } from "@/lib/ratelimit";
import { verifyTurnstile } from "@/lib/verify-turnstile";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 }
    );
  }

  // Rate limit: 10 downloads per IP per 10 minutes.
  const ip = clientIp(req.headers);
  if (!rateLimit(`whitepaper:${ip}`, 10, 10 * 60 * 1000)) {
    return NextResponse.json(
      { error: "Too many requests. Try again in a few minutes." },
      { status: 429 }
    );
  }

  let body: { email?: string; cfToken?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const email = body.email?.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const turnstile = await verifyTurnstile(body.cfToken, ip);
  if (!turnstile.ok) {
    return NextResponse.json(
      { error: "Could not verify the request. Please refresh and try again." },
      { status: 400 }
    );
  }

  try {
    const pdfPath = join(
      process.cwd(),
      "public",
      "planara-conduit-whitepaper.pdf"
    );
    const pdfBuffer = await readFile(pdfPath);

    const resend = new Resend(apiKey);
    const fromAddress = process.env.EMAIL_FROM ?? "hello@planara.com";
    const fromName = process.env.EMAIL_FROM_NAME ?? "Planara";
    const fromHeader = `${fromName} <${fromAddress}>`;

    await resend.emails.send({
      from: fromHeader,
      to: email,
      subject: "The Intelligence Gap — Your Copy",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 520px; margin: 0 auto; color: #131820;">
          <div style="padding: 32px 0; border-bottom: 1px solid #E2E5EA;">
            <p style="font-size: 14px; font-weight: 600; color: #131820; margin: 0;">Planara</p>
          </div>
          <div style="padding: 32px 0;">
            <p style="font-size: 15px; line-height: 1.6; color: #131820; margin: 0 0 16px;">
              Thanks for your interest. Your copy of <strong>The Intelligence Gap</strong> is attached.
            </p>
            <p style="font-size: 14px; line-height: 1.6; color: #627084; margin: 0 0 24px;">
              This paper covers the documentation gap in equipment manufacturing
              and how purpose-built technical service intelligence changes the economics of
              service operations, dealer networks, and OEM product development.
            </p>
            <a href="https://intelligence.planara.com" style="display: inline-block; padding: 10px 20px; background-color: #131820; color: #ffffff; font-size: 13px; font-weight: 500; text-decoration: none; border-radius: 3px;">
              See the live demo
            </a>
          </div>
          <div style="padding: 20px 0; border-top: 1px solid #E2E5EA;">
            <p style="font-size: 12px; color: #627084; margin: 0;">
              Planara &middot; Technical Service Intelligence
            </p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: "Planara_Intelligence_Gap_Whitepaper.pdf",
          content: pdfBuffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Whitepaper email failed:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
