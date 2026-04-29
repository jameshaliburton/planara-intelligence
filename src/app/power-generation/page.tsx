import Link from "next/link";
import {
  Lightning,
  Bell,
  ShieldWarning,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import {
  DesignPartnerLayout,
  type DesignPartnerVertical,
  HeroAccent,
} from "@/components/DesignPartnerLayout";
import { TechnicianChatMock } from "@/components/mocks";

export const metadata = {
  title: "Conduit for power generation — Planara",
  description:
    "Planara Conduit for power generation OEMs and their service networks. A genset is one part of a larger reliability promise. Conduit makes sure the technician shows up with the right manual before the customer's UPS runs out.",
};

const vertical: DesignPartnerVertical = {
  slug: "power-generation",
  label: "Power generation",
  icon: Lightning,
  heroAccent: "dots",
  heroBadges: ["NFPA 70 (NEC)", "NFPA 110", "NFPA 37"],
  heroSubBody:
    "Hospitals, data centers, telecom huts. Runtime-based maintenance for the planned visits, and a 2am call when the ATS doesn't transfer. Conduit is the layer behind both.",
  headline: "Conduit for the gensets that can't fail.",
  hookSentence:
    "A genset is one part of a larger reliability promise. Conduit makes sure the technician shows up with the right manual before the customer's UPS runs out.",
  paragraphs: {
    standards:
      "Power generation lives inside a hard standards stack: NFPA 70 (NEC) for the wiring, NFPA 110 for emergency and standby power systems, NFPA 37 for engine installations, EPA Tier 4 for emissions, the corresponding state and regional codes, and the customer-specific reliability tier requirements (Tier III/IV data center, Joint Commission for hospitals, telecom uptime SLAs). Conduit cites the right standard for the right install — not a generic answer that the AHJ will reject at inspection.",
    density:
      "Genset service technicians work across OEMs (Generac, Cummins, Kohler, Caterpillar, MTU, GE Vernova) and across components: the prime mover, the alternator, the control panel, the ATS, the switchgear, and the paralleling logic if the install is multi-unit. Each layer has its own manual, its own bulletin stream, and its own commissioning procedure. Conduit ingests the whole stack so the tech doesn't carry a binder bag onto the customer's site.",
    workflow:
      "Power-gen service is distributed: regional teams covering customers from data centers to hospitals to telecom huts. Maintenance is runtime-based and load-bank scheduled, but the unplanned calls — the 2am hospital generator that didn't transfer — define the relationship. Conduit is the layer that gets the right manual into the technician's hands before the truck rolls, and captures what they learned on the call so the next 2am call is faster.",
  },
  deploymentNotes:
    "A power-generation Conduit deployment ingests the genset OEM manuals, the control panel and ATS documentation, the switchgear and paralleling configurations, and the relevant NFPA / NEC references. Field technicians ask before and during the call. Service ops sees uptime patterns, technician knowledge gaps, and where the documentation is failing the most critical customers.",
  applicationFormHints:
    "Tell us what platforms you service, what your customer mix looks like (data center, healthcare, telecom, commercial), and where reliability is being lost. Five fields. We read every one. If we think there's a fit, we'll come back to you within a week.",
  dashboardMock: {
    hero: { eyebrow: "Last 30 days", primary: "47 sites · 0 missed transfers" },
    chartLabel: "Site queries · 30 days",
    metrics: [
      { label: "Sites covered", value: "47", delta: "+6", icon: "queries" as const },
      { label: "Maintenance windows", value: "138", delta: "completed", icon: "techs" as const },
      { label: "After-hours calls", value: "9", delta: "−3 wk/wk", icon: "techs" as const },
      { label: "NFPA cites served", value: "284", delta: "70 / 110 / 37", icon: "citations" as const },
    ],
  },
  heroMock: {
    question: "ATS won't transfer — diagnostic ladder?",
    specs: [
      ["Genset", "Cummins QSK60"],
      ["ATS", "ASCO 7000"],
      ["Setting", "Re-transfer delay 5 s"],
      ["Last test", "12 days ago"],
    ],
    safetyText:
      "Verify utility is dead before manual transfer. Genset will start in 10 s — clear the cabinet.",
    citation: "ASCO 7000 IOM · § 7.2 · p. 88",
    equipmentLabel: "Hospital · Bldg 4 · 1.25 MW",
  },
};

export default function PowerGenerationPage() {
  return (
    <DesignPartnerLayout
      vertical={vertical}
      heroOverride={<PowerGenHero />}
      spotlight={<AfterHoursWalkthrough />}
    />
  );
}

/* Power Gen hero — copy left + alarm-feed strip pinned above the H1.
 * Reads like a NOC dashboard: the alarm timeline IS the hero element. */
function PowerGenHero() {
  const feed = [
    { time: "02:14", label: "Alarm", body: "Bldg 4 ATS won't transfer", tone: "alert" as const },
    { time: "02:18", label: "Conduit", body: "ASCO 7000 ladder · cited", tone: "info" as const },
    { time: "02:34", label: "Action", body: "NFPA 110 manual transfer", tone: "neutral" as const },
    { time: "02:51", label: "Captured", body: "Saved for next 2 a.m. call", tone: "ok" as const },
  ];
  return (
    <section
      id="vertical-hero"
      className="relative min-h-screen flex items-center bg-planara-dark overflow-hidden"
    >
      <HeroAccent variant="dots" />
      <div className="relative container mx-auto px-6 py-24 md:py-32 max-w-6xl">
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-12 items-start">
          {/* LEFT: alarm feed + headline */}
          <div>
            {/* Alarm feed — sits ABOVE the H1, sets the page tone */}
            <div className="border border-white/[0.08] rounded-lg bg-white/[0.02] p-4 mb-10">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/[0.06]">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-amber-400 opacity-70 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-amber-400" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/55">
                  Live alarm feed · hospital site
                </span>
                <span className="text-[10px] font-mono text-white/30 ml-auto">
                  illustrative
                </span>
              </div>
              <ol className="space-y-1.5">
                {feed.map((f) => {
                  const dot =
                    f.tone === "alert"
                      ? "bg-amber-400"
                      : f.tone === "ok"
                      ? "bg-emerald-400"
                      : f.tone === "info"
                      ? "bg-planara-teal"
                      : "bg-white/40";
                  return (
                    <li
                      key={f.time}
                      className="grid grid-cols-[auto_auto_auto_1fr] gap-3 items-baseline"
                    >
                      <span className="text-[11px] font-mono text-planara-teal">
                        {f.time}
                      </span>
                      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                        {f.label}
                      </span>
                      <span className="text-xs text-white/65 truncate">
                        {f.body}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>

            <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-6 inline-flex items-center gap-2">
              <Lightning className="w-4 h-4" weight="duotone" />
              Planara Conduit · Power generation
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {(vertical.heroBadges ?? []).map((b) => (
                <span
                  key={b}
                  className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 border border-white/15 text-white/60 rounded-sm"
                >
                  {b}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-8">
              Conduit for the gensets that can&apos;t fail.
            </h1>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
              A genset is one part of a larger reliability promise. Conduit
              makes sure the technician shows up with the right manual before
              the customer&apos;s UPS runs out.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#apply"
                className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
              >
                Apply to deploy with us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#why-fits"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
              >
                Why this vertical fits
              </Link>
            </div>
          </div>

          {/* RIGHT: smaller iPad mock */}
          <div className="relative mx-auto w-full max-w-[320px] lg:max-w-none">
            <TechnicianChatMock
              aspect="portrait"
              question={vertical.heroMock?.question}
              specs={vertical.heroMock?.specs}
              safetyText={vertical.heroMock?.safetyText}
              citation={vertical.heroMock?.citation}
              equipmentLabel={vertical.heroMock?.equipmentLabel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AfterHoursWalkthrough() {
  const steps = [
    {
      time: "02:14",
      title: "Customer page: hospital ATS won&rsquo;t transfer.",
      body:
        "Building 4, 1.25 MW Cummins QSK60. Re-transfer delay setting is the suspect — but the tech hasn&rsquo;t worked an ASCO 7000 in months.",
      tone: "alert" as const,
    },
    {
      time: "02:18",
      title: "Tech opens Conduit on phone in the truck.",
      body: "Asks: &ldquo;ATS won&rsquo;t transfer — diagnostic ladder?&rdquo;",
      tone: "neutral" as const,
    },
    {
      time: "02:18",
      title: "Conduit returns the ASCO 7000 ladder.",
      body:
        "Cited to the IOM § 7.2, p. 88. Re-transfer delay setting, manual transfer procedure, NFPA 110 verification step — all preserved verbatim.",
      tone: "info" as const,
    },
    {
      time: "02:34",
      title: "Tech executes manual transfer per NFPA 110.",
      body:
        "Verifies utility is dead. Genset starts in 10 s. ATS returns to auto. Customer comes back online before the UPS dropout.",
      tone: "neutral" as const,
    },
    {
      time: "02:51",
      title: "Tech captures the resolution.",
      body:
        "Submits the diagnostic path as a correction. The next 2am call on an ASCO 7000 starts with the answer this tech just learned.",
      tone: "ok" as const,
    },
  ];

  return (
    <section className="py-16 md:py-22 bg-planara-dark border-b border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          A 2 a.m. call, walked through
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          The tech showing up to the hospital is the difference. Conduit is what they show up with.
        </h2>
        <p className="text-lg text-white/55 max-w-2xl mb-12 leading-relaxed">
          One real after-hours call, narrated against a clock. Illustrative
          — your customer mix and your platforms vary.
        </p>

        <ol className="relative border-l-2 border-white/[0.08] ml-3 space-y-8">
          {steps.map((s, i) => {
            const Icon =
              s.tone === "alert"
                ? Bell
                : s.tone === "ok"
                ? CheckCircle
                : s.tone === "info"
                ? ShieldWarning
                : undefined;
            const dot =
              s.tone === "alert"
                ? "bg-amber-400"
                : s.tone === "ok"
                ? "bg-planara-teal"
                : "bg-white/40";
            return (
              <li key={i} className="pl-8 relative">
                <span
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ${dot} border-2 border-planara-dark`}
                />
                <div className="flex flex-wrap items-baseline gap-3 mb-1">
                  <span className="text-xs font-mono text-planara-teal">
                    {s.time}
                  </span>
                  {Icon ? (
                    <Icon className="w-3.5 h-3.5 text-white/40" weight="duotone" />
                  ) : null}
                </div>
                <h3
                  className="text-base font-semibold text-white mb-1"
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  className="text-sm text-white/60 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
