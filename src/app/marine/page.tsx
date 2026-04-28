import {
  ArrowRight,
  Anchor,
  Wrench,
  Books,
  GearSix,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Integration } from "@/components/sections/Integration";
import { Footer } from "@/components/sections/Footer";
import { TechnicianChatMock } from "@/components/mocks";

export const metadata = {
  title: "Conduit for marine — Planara",
  description:
    "Planara Conduit deployed for marine OEMs and their dealer networks. Reference deployment built on the Yamaha F300 corpus — owner's manual, service manual, and technical service bulletins.",
};

export default function MarinePage() {
  return (
    <main className="min-h-screen bg-white">
      <MarineHero />
      <WhyMarineFits />
      <ReferenceDeployment />
      <ThermostatExample />
      <Integration />
      <ActiveConversations />
      <MarineCTA />
      <Footer />
    </main>
  );
}

/* ─────────────────────────── Hero ─────────────────────────── */

function MarineHero() {
  return (
    <section
      id="marine-hero"
      className="relative min-h-screen flex items-center bg-planara-dark overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-6 py-24 md:py-32 max-w-6xl">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-8">
              Planara Conduit · Marine
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-8">
              Conduit for marine OEMs and their dealer networks.
            </h1>

            <p className="text-xl text-white/70 max-w-2xl leading-relaxed mb-6">
              The reference deployment is built on the Yamaha F300 corpus —
              owner&apos;s manual, service manual, ABYC and ANSI Z535 standards,
              and the technical service bulletins that update them.
            </p>

            <p className="text-lg text-white/55 max-w-2xl leading-relaxed mb-10">
              The same Conduit serves the technician at the bench, the owner at
              the dock, and the dealer service writer between them — each with
              the surface that fits how they actually work.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/demo/service"
                className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
              >
                See the demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#why-marine-fits"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
              >
                Why marine fits
              </Link>
            </div>
          </div>

          <MarineHeroScreenshot />
        </div>
      </div>
    </section>
  );
}

function MarineHeroScreenshot() {
  return (
    <div className="relative mx-auto w-full max-w-[360px] lg:max-w-none lg:w-full">
      <TechnicianChatMock aspect="portrait" />
    </div>
  );
}

/* ─────────────────────── Why marine fits ─────────────────────── */

function WhyMarineFits() {
  const reasons = [
    {
      icon: Books,
      title: "The standards layer.",
      body:
        "Marine has a real standards stack: ABYC for vessel construction and electrical, EPA and Coast Guard for emissions and safety, ANSI Z535 for the warning labels that have to render verbatim in any answer the platform produces. Conduit is built to respect those — every spec, every warning, traces back to the page that authorized it.",
    },
    {
      icon: Wrench,
      title: "The documentation density.",
      body:
        "Marine engines are mechanically rich, well-documented, and dealer-network distributed. The reference deployment is the Yamaha F300, but the same deployment pattern extends to outboard, sterndrive, diesel propulsion, and marine generators. Where the OEM has a manual, Conduit has a corpus.",
    },
    {
      icon: GearSix,
      title: "The service workflow.",
      body:
        "Seasonal demand, hours-based service intervals, telemetry available through Smart Craft and Siren Marine, and customers who care deeply about their vessels but rarely read the manual. The work is predictable enough to plan against and complex enough that a confident, cited answer changes the day.",
    },
  ];

  return (
    <section
      id="why-marine-fits"
      className="py-16 md:py-22 bg-white border-b border-planara-border"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          Why marine
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
          Why marine fits Conduit&apos;s model.
        </h2>
        <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
          Marine is the right place to prove out the Conduit pattern before
          it generalizes to other equipment categories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div key={r.title}>
              <r.icon
                className="w-7 h-7 text-planara-teal mb-4"
                weight="duotone"
              />
              <h3 className="text-lg font-semibold text-planara-dark mb-3">
                {r.title}
              </h3>
              <p className="text-base text-planara-muted leading-relaxed">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Reference deployment ──────────────────── */

function ReferenceDeployment() {
  const corpus = [
    { label: "Owner's manual", detail: "F300 OM · LIT-18626-12-51 · ~280 pages" },
    { label: "Service manual", detail: "F300 SM · procedures, torque tables, diagnostics" },
    { label: "Technical bulletins", detail: "12 active TSBs covering ECU, trim, fuel, recall scope" },
    { label: "Total ingested", detail: "~1,200 pages, indexed and citation-tracked" },
  ];

  const procedures = [
    "Oil change interval and YAMALUBE specification",
    "Anode inspection and replacement (do-not-paint guidance)",
    "Thermostat operating range and replacement procedure",
    "Idle hunting at warm start — diagnostic ladder",
    "Trim sensor calibration after sensor replacement",
    "Smart Craft pairing failure recovery",
  ];

  return (
    <section
      id="reference-deployment"
      className="py-16 md:py-22 bg-planara-light border-b border-planara-border"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          What it looks like
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
          What a marine Conduit deployment looks like.
        </h2>
        <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
          The reference deployment is built on the actual Yamaha F300 corpus.
          Real procedures, real warnings, real citations. The same shape
          extends to any marine OEM that ships documentation alongside the
          equipment.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 mb-12">
          {/* Corpus card */}
          <div className="bg-white border border-planara-border rounded-lg p-6">
            <p className="text-xs font-mono uppercase tracking-wider text-planara-muted/70 mb-4">
              Ingested corpus
            </p>
            <ul className="space-y-4">
              {corpus.map((c) => (
                <li
                  key={c.label}
                  className="flex items-start justify-between gap-4 pb-4 last:pb-0 last:border-0 border-b border-planara-border/60"
                >
                  <span className="text-sm font-semibold text-planara-dark shrink-0">
                    {c.label}
                  </span>
                  <span className="text-xs font-mono text-planara-muted text-right">
                    {c.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Procedures card */}
          <div className="bg-white border border-planara-border rounded-lg p-6">
            <p className="text-xs font-mono uppercase tracking-wider text-planara-muted/70 mb-4">
              Sample answerable procedures
            </p>
            <ul className="space-y-2.5">
              {procedures.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2.5 text-sm text-planara-dark/85"
                >
                  <Anchor
                    className="w-3.5 h-3.5 text-planara-teal shrink-0 mt-1"
                    weight="duotone"
                  />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deployment surface — styled mock, not a captured screenshot */}
        <div className="rounded-lg border border-planara-border overflow-hidden bg-planara-dark">
          <div className="p-6 max-w-md mx-auto">
            <TechnicianChatMock aspect="landscape" />
          </div>
          <div className="px-5 py-3 border-t border-white/[0.06]">
            <p className="text-[11px] font-mono text-white/55">
              Technician chat · F300 oil change · cited to LIT-18626-12-51
              p.42
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Thermostat example (reframed) ─────────────────── */

function ThermostatExample() {
  return (
    <section
      id="thermostat-example"
      className="py-16 md:py-22 bg-white border-b border-planara-border"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          Example
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-8">
          What network analytics actually surface.
        </h2>

        <figure className="border-l-4 border-planara-teal bg-planara-light px-8 py-8 rounded-r-md">
          <p className="text-[10px] font-mono uppercase tracking-wider text-planara-teal mb-4">
            Illustrative — not a recorded statistic
          </p>
          <blockquote className="text-xl md:text-2xl italic text-planara-dark leading-relaxed">
            Example: a thermostat replacement might resolve overheating in
            most cases, but in some cases the actual root cause is the
            tell-tale water passage. Conduit&apos;s network analytics surface
            that distinction.
          </blockquote>
          <figcaption className="text-sm text-planara-muted mt-6 leading-relaxed not-italic">
            The point is the pattern, not the percentage. The OEM only learns
            this distinction once enough technicians, across enough vessels,
            log the second outcome. Conduit is the place that signal lands.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ─────────────────── Active conversations ─────────────────── */

function ActiveConversations() {
  return (
    <section
      id="active-conversations"
      className="py-16 md:py-22 bg-planara-dark"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          Where we are
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
          Active design conversations.
        </h2>
        <p className="text-lg text-white/65 leading-relaxed mb-4">
          Currently in active conversations with marine OEMs about deeper
          reference deployments.
        </p>
        <p className="text-lg text-white/65 leading-relaxed">
          We&apos;re not going to name names. If you&apos;re a marine OEM and
          want to talk specifics, email{" "}
          <a
            href="mailto:hello@planara.com"
            className="text-planara-teal hover:text-planara-teal/80 transition-colors underline underline-offset-4 decoration-planara-teal/40"
          >
            hello@planara.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────── CTA ─────────────────────────── */

function MarineCTA() {
  return (
    <section
      id="marine-cta"
      className="py-16 md:py-22 bg-white border-b border-planara-border"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          Get involved
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6">
          Apply for the marine reference cohort.
        </h2>
        <p className="text-lg text-planara-muted max-w-2xl leading-relaxed mb-10">
          We&apos;re working with a small number of marine OEMs and dealer
          networks on the next round of reference deployments. If you ship
          documentation alongside engines, dealer-distributed, and want a
          working prototype on your corpus in 1–2 weeks — talk to us.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:hello@planara.com?subject=Marine%20pilot%20—%20Conduit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-planara-dark text-white font-semibold rounded-sm hover:bg-planara-dark/90 transition-colors"
          >
            Talk to us about a marine pilot
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/demo/service"
            className="inline-flex items-center gap-2 px-6 py-3 border border-planara-border text-planara-dark font-semibold rounded-sm hover:border-planara-teal/40 hover:bg-planara-light transition-colors"
          >
            Try the technician demo
          </Link>
        </div>
      </div>
    </section>
  );
}
