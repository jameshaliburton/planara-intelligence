import Link from "next/link";
import {
  Factory,
  ArrowRight,
  ChatText,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import {
  DesignPartnerLayout,
  type DesignPartnerVertical,
  HeroAccent,
} from "@/components/DesignPartnerLayout";
import { TechnicianChatMock } from "@/components/mocks";

export const metadata = {
  title: "Conduit for manufacturing — Planara",
  description:
    "Planara Conduit for plant maintenance and reliability teams. Production line uptime is the metric. Conduit gives the maintenance technician the answer before the line goes down.",
};

const vertical: DesignPartnerVertical = {
  slug: "manufacturing",
  label: "Manufacturing",
  icon: Factory,
  heroAccent: "lines",
  heroBadges: ["OSHA 1910", "NFPA 70E", "ANSI B11"],
  heroSubBody:
    "Senior tech retiring at 3pm. Second-shift tech walking onto an unfamiliar fault at 3:05. Conduit captures the diagnosis the senior tech can&rsquo;t hand off in person.",
  headline: "Conduit for the maintenance team that keeps the line running.",
  hookSentence:
    "Production line uptime is the metric. Conduit gives the maintenance technician the answer before the line goes down.",
  paragraphs: {
    standards:
      "Manufacturing has a hard standards stack: OSHA 1910 for lockout-tagout, machine guarding, and electrical safety; ANSI B11 for machine tool safety; NFPA 70E for energized-work boundaries; and the corporate safety SOPs that translate all of that into the language of your plant. Conduit treats those documents as authoritative. Every spec, every warning, every step in a procedure traces back to the page that authorized it.",
    density:
      "Plant maintenance runs on machine manuals from a long tail of OEMs, internal SOPs that diverge from the OEM book, technical service bulletins that update both, and the troubleshooting decision trees that live in the heads of senior techs nearing retirement. Conduit ingests the documentation you have and structures the decision trees you don't yet have written down — before they walk out the door.",
    workflow:
      "Shift handoff is where knowledge falls on the floor. The senior tech who's the only one who knows how to fix the bagger goes home at 3pm and the second-shift tech inherits the symptom without the diagnosis. Conduit is the layer that captures the first-shift tech's reasoning and hands it to the second-shift tech as a cited, ranked answer — not a sticky note on the panel.",
  },
  deploymentNotes:
    "A manufacturing Conduit deployment ingests the OEM equipment manuals, the corporate safety SOPs, and the troubleshooting bulletins. The technician asks in plain language; the answer cites the page. The reliability lead sees what's being asked, what's not being answered well, and where the documentation gap is.",
  applicationFormHints:
    "Tell us what plant, what equipment, and what you're losing to downtime or knowledge transfer. Five fields. We read every one. If we think there's a fit, we'll come back to you within a week.",
  dashboardMock: {
    hero: { eyebrow: "Last 7 days", primary: "Bagger 12 · 38h since last handoff fault" },
    chartLabel: "Queries by line · 14 days",
    metrics: [
      { label: "Lines covered", value: "4 / 6", delta: "+2", icon: "queries" as const },
      { label: "Shifts handed off", value: "21", delta: "+5", icon: "techs" as const },
      { label: "TSBs ingested", value: "28", delta: "live", icon: "citations" as const },
      { label: "First-fix rate", value: "0.78", delta: "vs 0.61", icon: "confidence" as const },
    ],
  },
  heroMock: {
    question: "What's the LOTO procedure on the 4-roller?",
    specs: [
      ["Standard", "OSHA 1910.147"],
      ["Energy isolation", "Electrical + pneumatic"],
      ["Lock count", "2"],
      ["Tag", "Red — line 4"],
    ],
    safetyText:
      "Verify zero-energy state before moving guards. Disconnect main + auxiliary.",
    citation: "Plant SOP · LOTO § 4.2 · p. 18",
    equipmentLabel: "Line 4 · Bagger 12",
  },
};

export default function ManufacturingPage() {
  return (
    <DesignPartnerLayout
      vertical={vertical}
      heroOverride={<ManufacturingHero />}
      spotlight={<ShiftHandoff />}
    />
  );
}

/* Manufacturing hero — STACKED layout. Headline centered, plant-floor
 * status strip below, landscape mock as a wide banner. Reads like
 * standing in front of a control-room display. */
function ManufacturingHero() {
  const lines = [
    { id: "Line 4", asset: "Bagger 12", state: "Fault E-204", tone: "alert" as const },
    { id: "Line 5", asset: "Filler 7", state: "Running", tone: "ok" as const },
    { id: "Line 6", asset: "Conveyor 3", state: "Running", tone: "ok" as const },
    { id: "Line 7", asset: "Capper 9", state: "Maintenance", tone: "warn" as const },
  ];
  return (
    <section
      id="vertical-hero"
      className="relative bg-planara-dark overflow-hidden"
    >
      <HeroAccent variant="lines" />
      <div className="relative container mx-auto px-6 py-24 md:py-32 max-w-5xl">
        {/* Centered headline block */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-6 inline-flex items-center gap-2 justify-center">
            <Factory className="w-4 h-4" weight="duotone" />
            Planara Conduit · Manufacturing
          </p>
          <div className="flex flex-wrap gap-1.5 mb-8 justify-center">
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
            Conduit for the maintenance team that keeps the line running.
          </h1>
          <p className="text-xl text-white/70 leading-relaxed mb-8">
            Production line uptime is the metric. Conduit gives the maintenance
            technician the answer before the line goes down.
          </p>
          <div className="flex flex-wrap items-center gap-4 justify-center mb-12">
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

        {/* Plant floor status strip — full width */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10">
          {lines.map((l) => {
            const dot =
              l.tone === "alert"
                ? "bg-amber-400"
                : l.tone === "warn"
                ? "bg-yellow-400"
                : "bg-emerald-400";
            const ring =
              l.tone === "alert"
                ? "border-amber-400/30"
                : l.tone === "warn"
                ? "border-yellow-400/30"
                : "border-white/10";
            return (
              <div
                key={l.id}
                className={`border ${ring} rounded-sm bg-white/[0.02] p-3`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                  <p className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                    {l.id}
                  </p>
                </div>
                <p className="text-sm font-semibold text-white mb-1">
                  {l.asset}
                </p>
                <p className="text-[11px] font-mono text-white/55">
                  {l.state}
                </p>
              </div>
            );
          })}
        </div>

        {/* Landscape mock as wide banner */}
        <div className="border border-white/10 rounded-lg overflow-hidden bg-[#0B0E14] max-w-3xl mx-auto">
          <TechnicianChatMock
            aspect="landscape"
            question={vertical.heroMock?.question}
            specs={vertical.heroMock?.specs}
            safetyText={vertical.heroMock?.safetyText}
            citation={vertical.heroMock?.citation}
            equipmentLabel={vertical.heroMock?.equipmentLabel}
          />
        </div>
      </div>
    </section>
  );
}

function ShiftHandoff() {
  const steps = [
    {
      time: "2:50 pm",
      label: "First shift",
      title: "Senior tech finishes diagnosis on Bagger 12.",
      body:
        "Fault E-204 was actually a worn auger bearing, not the controls glitch the message implied. Three torque values, two parts, one safety note.",
    },
    {
      time: "2:55 pm",
      label: "Captured",
      title: "Submits the correction in two taps.",
      body:
        "The plant SOP page says one thing. The tech&rsquo;s field-confirmed procedure says another. Both go into the queue.",
    },
    {
      time: "3:00 pm",
      label: "Validated",
      title: "Reliability lead approves.",
      body:
        "Reviewed against the fault history, the part change order, and the OEM bulletin. Promoted to active inside the tenant.",
    },
    {
      time: "3:05 pm",
      label: "Second shift",
      title: "Next tech asks Conduit. Gets the corrected answer.",
      body:
        "Same fault code, same machine. The diagnosis the first-shift tech walked out the door with is now the first answer the second-shift tech sees.",
    },
  ];

  return (
    <section className="py-16 md:py-22 bg-planara-light border-b border-planara-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          Shift handoff, captured
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
          What used to live on a sticky note now lives in the answer.
        </h2>
        <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
          Fifteen minutes between shifts. The diagnosis the senior tech
          can&rsquo;t hand over in person becomes the answer the second-shift
          tech opens to.
        </p>

        <ol className="relative border-l-2 border-planara-border ml-3 space-y-8">
          {steps.map((s, i) => (
            <li key={s.time} className="pl-8 relative">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-planara-teal border-2 border-planara-light" />
              <div className="flex flex-wrap items-baseline gap-3 mb-1">
                <span className="text-xs font-mono text-planara-teal">
                  {s.time}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-planara-muted/70">
                  {s.label}
                </span>
              </div>
              <h3 className="text-base font-semibold text-planara-dark mb-1">
                {s.title}
              </h3>
              <p className="text-sm text-planara-muted leading-relaxed">
                {s.body}
              </p>
              {i === steps.length - 1 ? (
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-planara-teal">
                  <CheckCircle className="w-3.5 h-3.5" weight="duotone" />
                  Saved across every future shift on every Bagger 12.
                </div>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="mt-10 inline-flex items-center gap-2 text-sm text-planara-muted">
          <ChatText className="w-4 h-4 text-planara-teal" weight="duotone" />
          One technician&rsquo;s correction. Every technician&rsquo;s next answer.
          <ArrowRight className="w-3.5 h-3.5 text-planara-teal/60" />
        </div>
      </div>
    </section>
  );
}
