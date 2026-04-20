import type { Metadata } from "next";
import {
  Anchor,
  Wrench,
  Storefront,
  ChartLineUp,
  ArrowRight,
  ShieldWarning,
  Crosshair,
  ArrowsClockwise,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Marine Service Intelligence",
  description:
    "Your service network is sitting on a knowledge goldmine. Marine service intelligence built for ABYC/USCG compliance, outboard/sterndrive/inboard equipment, and dealer-network distribution.",
  alternates: { canonical: "/marine" },
  openGraph: {
    title: "Planara Marine — Marine service intelligence",
    description:
      "Thousands of marine dealers have technicians solving the same problems independently. Planara connects their knowledge so every repair makes the next one faster.",
    url: "/marine",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planara Marine — Marine service intelligence",
    description:
      "Your dealer network is sitting on a knowledge goldmine. ABYC/USCG compliance, field intelligence loop across the network.",
  },
};

const marineStats = [
  { value: "10,000+", label: "Marine service dealers across the major OEM networks (industry footprint)" },
  { value: "847", label: "Average engine hours before first major service query" },
  { value: "14 days", label: "Added to resolution from a failed first visit" },
];

const useCases = [
  {
    icon: Wrench,
    title: "Service technician",
    description:
      "\"Engine overheating at low RPM\" → structured diagnostic procedure with safety warnings, cooling system diagram, parts list, and page-level citations from the service manual.",
  },
  {
    icon: Storefront,
    title: "Dealer service writer",
    description:
      "Customer calls about a warning light. The service writer gets a plain-language explanation, confirms the severity, and schedules the appointment — all from the same platform the tech will use to fix it.",
  },
  {
    icon: Anchor,
    title: "Boat operator",
    description:
      "\"When is my next service due?\" → hours remaining, what's included, estimated cost, and a one-tap schedule button. No manuals. No phone calls. The dealer gets the lead automatically.",
  },
  {
    icon: ChartLineUp,
    title: "OEM product team",
    description:
      "Cross-network analytics: thermostat replacement resolves overheating 64% of the time. 31% of cases, the actual root cause is the tell-tale passage. That's intelligence no field engineer can gather manually.",
  },
];

const complianceStandards = [
  "ABYC E-11 (Electrical)",
  "ABYC H-24 (Fuel Systems)",
  "ABYC P-1 (Propulsion)",
  "USCG 33 CFR 183",
  "EPA Marine Engine Standards",
  "OSHA 1910 (Shop Safety)",
];

export default function MarinePage() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-planara-dark/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 max-w-5xl flex items-center justify-between h-14">
          <Link href="/" className="text-sm font-semibold text-white hover:text-planara-teal transition-colors">
            ← Planara
          </Link>
          <span className="text-xs font-mono text-planara-teal/60 uppercase tracking-wider">Marine</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-planara-dark overflow-hidden pt-14">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-6 py-24 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <Anchor className="w-6 h-6 text-planara-teal" weight="duotone" />
            <p className="text-sm font-mono uppercase tracking-wider text-planara-teal">
              Marine Service Intelligence
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[0.95] mb-8">
            Your dealer network
            <br />
            is sitting on a
            <br />
            knowledge goldmine.
          </h1>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-6">
            Thousands of marine dealers have technicians solving the same
            problems independently. Planara connects their knowledge so every
            repair across the network makes the next one faster.
          </p>

          <p className="text-xl text-white/80 max-w-2xl leading-relaxed mb-12">
            Upload your service manuals. Deploy to your dealers.{" "}
            <span className="text-planara-teal font-semibold">
              Start capturing field intelligence.
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://demo.planara.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
            >
              See the live demo
            </a>
            <Link
              href="/demo/service"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
            >
              Service tour
            </Link>
            <Link
              href="/demo/owner"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
            >
              Owner tour
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-planara-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marineStats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-planara-teal pl-6">
                <p className="text-4xl font-bold text-planara-dark tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-planara-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-22 bg-white border-b border-planara-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            Four audiences, one platform
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-16 max-w-3xl">
            From the tech on the shop floor to the OEM product team.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((item) => (
              <div key={item.title} className="border border-planara-border rounded-sm p-6">
                <item.icon className="w-6 h-6 text-planara-teal mb-4" weight="duotone" />
                <h3 className="text-base font-semibold text-planara-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-planara-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marine-specific: What the platform knows */}
      <section className="py-16 md:py-22 bg-planara-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
            Built for Marine
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
            Not a generic AI tool with a marine skin.
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mb-16 leading-relaxed">
            The platform understands marine service documentation structure,
            ABYC/USCG compliance requirements, and the specific workflows of
            marine dealers and their customers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="border border-planara-teal/20 rounded-sm p-6 bg-planara-teal/[0.03]">
              <Crosshair className="w-6 h-6 text-planara-teal mb-4" weight="duotone" />
              <h3 className="text-base font-semibold text-white mb-2">
                Equipment-scoped retrieval
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                Queries are scoped to the specific engine model and variant. Different model years and configurations return different results because they have different specs, procedures, and known issues.
              </p>
            </div>
            <div className="border border-planara-teal/20 rounded-sm p-6 bg-planara-teal/[0.03]">
              <ShieldWarning className="w-6 h-6 text-planara-teal mb-4" weight="duotone" />
              <h3 className="text-base font-semibold text-white mb-2">
                ANSI Z535 safety classification
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                Every safety warning is classified as DANGER, WARNING, CAUTION, or NOTICE per ANSI Z535. Safety warnings always surface before procedures.
              </p>
            </div>
            <div className="border border-planara-teal/20 rounded-sm p-6 bg-planara-teal/[0.03]">
              <ArrowsClockwise className="w-6 h-6 text-planara-teal mb-4" weight="duotone" />
              <h3 className="text-base font-semibold text-white mb-2">
                TSB distribution
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                When the OEM publishes a TSB, every dealer in the network has it within minutes — indexed, searchable, and integrated into the retrieval pipeline.
              </p>
            </div>
          </div>

          {/* Compliance standards */}
          <div className="border border-white/[0.08] rounded-sm p-6 bg-white/[0.02]">
            <p className="text-xs font-mono uppercase tracking-wider text-white/30 mb-4">
              Compliance standards encoded
            </p>
            <div className="flex flex-wrap gap-2">
              {complianceStandards.map((std) => (
                <span
                  key={std}
                  className="px-3 py-1.5 text-xs font-mono text-white/40 border border-white/[0.08] rounded-sm"
                >
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="py-16 md:py-22 bg-white border-b border-planara-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            Business Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-4 max-w-3xl">
            The intelligence is the moat. The outcomes are what you sell.
          </h2>
          <p className="text-lg text-planara-muted max-w-2xl mb-16 leading-relaxed">
            Every capability maps to a number a VP of Service Operations cares about.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-planara-border rounded-sm p-6">
              <p className="text-3xl font-bold text-planara-dark tracking-tight mb-1">First-time fix rate</p>
              <p className="text-sm text-planara-muted leading-relaxed mb-3">
                Industry benchmark: 77%. Top performers: 88%. A failed first visit adds 2 truck rolls and 14 days. Planara gives every tech the knowledge that used to live in the heads of your best people.
              </p>
              <p className="text-xs font-mono text-planara-teal/70">Aquant 2026 Benchmark: 25% of service costs are repeat visits</p>
            </div>

            <div className="border border-planara-border rounded-sm p-6">
              <p className="text-3xl font-bold text-planara-dark tracking-tight mb-1">Warranty cost reduction</p>
              <p className="text-sm text-planara-muted leading-relaxed mb-3">
                Field-validated corrections distinguish between real warranty claims and operator error. Cross-network resolution data tells the OEM which failures are systemic vs. one-off — before the claims pile up.
              </p>
              <p className="text-xs font-mono text-planara-teal/70">Resolution analytics flag patterns across networks of thousands of dealers</p>
            </div>

            <div className="border border-planara-border rounded-sm p-6">
              <p className="text-3xl font-bold text-planara-dark tracking-tight mb-1">Customer satisfaction</p>
              <p className="text-sm text-planara-muted leading-relaxed mb-3">
                Boat owners get answers instantly — no phone tag with the service desk. Maintenance due dates, plain-language explanations, one-tap scheduling. Every interaction is a touchpoint that builds dealer loyalty.
              </p>
              <p className="text-xs font-mono text-planara-teal/70">Operator self-service reduces inbound calls by deflecting routine questions</p>
            </div>

            <div className="border border-planara-border rounded-sm p-6">
              <p className="text-3xl font-bold text-planara-dark tracking-tight mb-1">Dealer empowerment</p>
              <p className="text-sm text-planara-muted leading-relaxed mb-3">
                Junior techs perform like experienced ones. The knowledge gap between your best dealer and your worst shrinks. Adoption metrics show which dealers are using it and which need support — the OEM sees everything.
              </p>
              <p className="text-xs font-mono text-planara-teal/70">Aquant 2026: skills gap is 2.9pt for top teams vs. 10pt for underperformers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-22 bg-planara-navy">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            See it with your manuals.
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-8 leading-relaxed">
            Send us 2-3 service manuals. Working prototype in 1-2 weeks.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@planara.com?subject=Marine%20Intelligence%20—%20Prototype%20Request"
              className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
            >
              Request a prototype
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
            >
              Back to platform overview
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
