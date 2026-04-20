import type { Metadata } from "next";
import { SecurityControls } from "@/components/sections/SecurityControls";
import { SlimFAQ } from "@/components/sections/SlimFAQ";
import { Footer } from "@/components/sections/Footer";
import { faqPageJsonLd, jsonLdScriptProps } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Enterprise Security & Compliance",
  description:
    "Built for the compliance requirements your procurement team will ask about. Data isolation, authentication, PII protection, 195-check adversarial audit, SOC 2 Type II in preparation, on-premises deployment available.",
  alternates: { canonical: "/enterprise" },
  openGraph: {
    title: "Planara Enterprise — Security & compliance for procurement",
    description:
      "Data isolation. 195-check adversarial audit across 14 dimensions. SOC 2 Type II in preparation. On-premises deployment for data residency.",
    url: "/enterprise",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planara Enterprise — Security & compliance",
    description:
      "Built for the compliance your procurement team will ask about. 195-check adversarial audit. SOC 2 Type II prep.",
  },
};

const companies = [
  "Ford",
  "Airbus",
  "Google",
  "Apple",
  "Uber",
  "Disney",
  "Goldman Sachs",
  "Samsung",
];

const enterpriseFAQ = [
  {
    q: "Where is our documentation stored?",
    a: "Documents are parsed, structured, and stored in isolated namespaces within an enterprise search index. Raw PDFs are processed in-memory and not persisted after ingestion. Metadata is stored in a dedicated database with row-level security. Each tenant has a completely separate namespace.",
  },
  {
    q: "Does Planara train on our data?",
    a: "No. Your documentation is never used to train any model. We use commercial LLM APIs with data-processing agreements that prohibit training on input data. Your IP stays yours.",
  },
  {
    q: "What compliance certifications do you have?",
    a: "We are actively preparing for SOC 2 Type II certification. Our 195-check adversarial audit covers data isolation, authentication, PII handling, injection prevention, and observability. We can provide a detailed security review on request.",
  },
  {
    q: "Can we deploy on-premises?",
    a: "Yes. Deploy on our managed cloud or your own infrastructure. Full on-premises deployment is supported for organizations with data residency requirements.",
  },
];

export default function EnterprisePage() {
  return (
    <main className="min-h-screen pt-14">
      <script {...jsonLdScriptProps(faqPageJsonLd(enterpriseFAQ))} />
      {/* Hero */}
      <section className="py-16 md:py-22 bg-planara-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-8">
            Enterprise
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[0.95] mb-6">
            Built for the compliance
            <br />
            requirements your procurement
            <br />
            team will ask about.
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-4">
            Planara processes your proprietary service documentation and
            telemetry data — enterprise-grade security is foundational,
            not an add-on.
          </p>
          <p className="text-lg text-white/40 max-w-2xl leading-relaxed">
            This page exists so your champion can send it to IT, legal, and
            procurement. No marketing fluff — just specifics.
          </p>
        </div>
      </section>

      {/* Audit summary */}
      <section className="py-12 bg-planara-dark border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="border border-planara-teal/20 rounded-sm p-8 bg-planara-teal/[0.03]">
            <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-3">
              Adversarial Security Audit
            </p>
            <p className="text-base text-white/70 leading-relaxed max-w-3xl">
              195 checks across 14 dimensions — including prompt injection,
              data exfiltration, cross-tenant access, PII leakage, and
              authentication bypass. We don&apos;t just claim security. We test it
              adversarially, document the results, and fix what we find before
              shipping.
            </p>
          </div>
        </div>
      </section>

      <SecurityControls />

      {/* Credentials bar — team experience, not full SocialProof */}
      <section className="py-10 bg-planara-dark border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-sm text-white/40">
            Team experience: {companies.join(" · ")}
          </p>
        </div>
      </section>

      <SlimFAQ questions={enterpriseFAQ} />

      {/* CTA */}
      <section className="py-16 md:py-22 bg-planara-dark">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Need more detail?
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-8 leading-relaxed">
            We&apos;ll walk your security team through the architecture,
            audit results, and compliance roadmap.
          </p>
          <a
            href="mailto:hello@planara.com?subject=Security%20Review%20Request"
            className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
          >
            Request a security review
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
