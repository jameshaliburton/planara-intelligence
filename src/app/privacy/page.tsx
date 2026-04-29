import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy — Planara Conduit",
  description:
    "What Planara collects when you visit, fill out a form, or apply for a pilot — and what we do with it.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="container mx-auto px-6 max-w-2xl py-20 md:py-28 prose-planara">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          Privacy
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-planara-dark mb-6">
          What we collect, why, and what we do with it.
        </h1>
        <p className="text-base text-planara-muted leading-relaxed mb-12">
          Last updated: April 2026. Plain language. If anything here is unclear,
          email{" "}
          <a
            href="mailto:hello@planara.com"
            className="text-planara-blue hover:underline"
          >
            hello@planara.com
          </a>
          .
        </p>

        <Section title="What we collect">
          <p>
            When you fill out a form on this site (pilot application or
            white-paper download), we collect what you give us — typically your
            name, email, company, role, and a description of what you&apos;re
            trying to solve. We don&apos;t collect anything you don&apos;t enter.
          </p>
          <p>
            We use Vercel for hosting and Cloudflare in front. Both keep
            standard server logs (IP, timestamp, path, user agent) for security
            and abuse prevention. We don&apos;t use those logs for marketing.
          </p>
          <p>
            We don&apos;t use third-party analytics, advertising trackers, or
            session-replay tools.
          </p>
        </Section>

        <Section title="Why we collect it">
          <p>
            Form data goes to a real human on our team so we can decide whether
            there&apos;s a fit and respond. White-paper downloads use your email
            to send you the file and so we can follow up if you want to talk.
          </p>
          <p>
            That&apos;s it. We don&apos;t sell, rent, or share your information
            with anyone outside the team. We don&apos;t add you to a marketing
            drip.
          </p>
        </Section>

        <Section title="Where it lives">
          <p>
            Form submissions are emailed to{" "}
            <span className="font-mono text-sm">pilots@planara.com</span> or{" "}
            <span className="font-mono text-sm">hello@planara.com</span> via{" "}
            <a
              href="https://resend.com"
              className="text-planara-blue hover:underline"
              rel="noreferrer"
            >
              Resend
            </a>
            . Resend retains delivery metadata per their{" "}
            <a
              href="https://resend.com/legal/privacy-policy"
              className="text-planara-blue hover:underline"
              rel="noreferrer"
            >
              privacy policy
            </a>
            . Beyond that, your submission lives in our inbox until we close the
            thread.
          </p>
          <p>
            We don&apos;t maintain a separate CRM or marketing database for the
            site.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            The site sets one cookie if you authenticate to{" "}
            <Link
              href="/competitive-landscape"
              className="text-planara-blue hover:underline"
            >
              /competitive-landscape
            </Link>{" "}
            (a password-gated internal page). No tracking cookies. No
            advertising cookies. No third-party cookies.
          </p>
        </Section>

        <Section title="How to delete what we have">
          <p>
            Email{" "}
            <a
              href="mailto:hello@planara.com"
              className="text-planara-blue hover:underline"
            >
              hello@planara.com
            </a>{" "}
            and tell us to delete your data. We&apos;ll confirm within a few
            days. We&apos;ll delete the inbox thread and any notes derived from
            it.
          </p>
        </Section>

        <Section title="Children">
          <p>
            This site is intended for people in the equipment service industry.
            We don&apos;t knowingly collect data from anyone under 18.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            We&apos;ll update this page if our practices change. The date at the
            top reflects the current version.
          </p>
        </Section>

        <p className="text-sm text-planara-muted/70 mt-12 pt-6 border-t border-planara-border">
          Questions about this policy? Email{" "}
          <a
            href="mailto:hello@planara.com"
            className="text-planara-blue hover:underline"
          >
            hello@planara.com
          </a>
          .
        </p>
      </article>
      <Footer />
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-planara-dark mb-4">{title}</h2>
      <div className="space-y-4 text-base text-planara-dark/80 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
