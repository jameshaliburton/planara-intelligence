import Link from "next/link";
import {
  Wind,
  Truck,
  Wrench,
  Receipt,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import {
  DesignPartnerLayout,
  type DesignPartnerVertical,
  HeroAccent,
} from "@/components/DesignPartnerLayout";
import { TechnicianChatMock } from "@/components/mocks";

export const metadata = {
  title: "Conduit for HVAC — Planara",
  description:
    "Planara Conduit for HVAC service companies and mechanical contractors. The right answer needs to be in the cab before the technician climbs onto the roof.",
};

const vertical: DesignPartnerVertical = {
  slug: "hvac",
  label: "HVAC",
  icon: Wind,
  heroAccent: "curves",
  heroBadges: ["EPA 608", "ASHRAE", "ASE"],
  headline: "Conduit for HVAC service operations.",
  hookSentence:
    "Service trucks roll. The right answer needs to be in the cab before the tech climbs onto the roof.",
  paragraphs: {
    standards:
      "HVAC has a layered standards stack: EPA 608 for refrigerant handling, ASHRAE for system design and commissioning, ASE certifications for the technicians themselves, and a long tail of state and local codes that change at the city line. Conduit cites the right code for the equipment, the location, and the work being done — not a generic answer that the inspector will reject.",
    density:
      "An HVAC service company is multi-OEM by definition: Carrier, Trane, Daikin, Lennox, Mitsubishi, Goodman, plus the controls vendors layered on top. Equipment manuals, refrigerant charts, control wiring diagrams, commissioning procedures, and the bulletins that update them. Conduit ingests the whole library, keyed to model and serial, so the tech doesn't have to know which manual the answer lives in.",
    workflow:
      "Dispatch sends the truck. The clock is running from the moment the technician arrives. Callbacks are expensive, parts trips kill margin, and the difference between a one-visit fix and a three-visit fix is whether the tech had the right diagnostic ladder in front of them. Conduit is the layer that puts the answer in the cab before the climb — and captures what the tech learned on the roof for the next call.",
  },
  deploymentNotes:
    "An HVAC Conduit deployment ingests the equipment libraries you actually service, your internal SOPs, and the regional code references your inspectors use. Technicians ask from the truck. Service managers see callback patterns, parts-trip patterns, and where the documentation is failing the field. Buyer is typically a regional service company or commercial mechanical contractor — not just an OEM.",
  applicationFormHints:
    "Tell us what brands you service, how many technicians you dispatch, and what's costing you the most callbacks. Five fields. We read every one. If we think there's a fit, we'll come back to you within a week.",
  dashboardMock: {
    hero: { eyebrow: "Today", primary: "187 trucks dispatched · 14% callback rate" },
    chartLabel: "First-visit fix rate · 14 days",
    metrics: [
      { label: "Trucks dispatched", value: "187", delta: "+9%", icon: "techs" as const },
      { label: "First-visit fix", value: "86%", delta: "+4 pp", icon: "confidence" as const },
      { label: "Parts trips avoided", value: "23", delta: "this wk", icon: "queries" as const },
      { label: "Code cites served", value: "412", delta: "EPA · ASHRAE", icon: "citations" as const },
    ],
  },
  heroMock: {
    question: "Refrigerant charge for the 5-ton on the rooftop?",
    specs: [
      ["Refrigerant", "R-410A"],
      ["Charge", "8 lb 4 oz"],
      ["Subcooling target", "10°F"],
      ["EPA cert", "608 Type II"],
    ],
    safetyText:
      "Recover existing refrigerant. Vent to atmosphere is a violation. Tag the cylinder before transport.",
    citation: "Carrier 50TC OM · § 6.3 · p. 41",
    equipmentLabel: "Rooftop · 50TC-A12",
  },
};

export default function HvacPage() {
  return (
    <DesignPartnerLayout
      vertical={vertical}
      heroOverride={<HvacHero />}
      spotlight={<CallbackEconomics />}
    />
  );
}

/* HVAC hero — copy left, iPad mock right (60/40), with a "live dispatch
 * ticker" strip pinned above the H1. Reads as a service-ops console. */
function HvacHero() {
  return (
    <section
      id="vertical-hero"
      className="relative min-h-screen flex items-center bg-planara-dark overflow-hidden"
    >
      <HeroAccent variant="curves" />
      <div className="relative container mx-auto px-6 py-24 md:py-32 max-w-6xl">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            {/* Live dispatch ticker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-white/10 bg-white/[0.03] rounded-full text-[11px] font-mono text-white/60">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
              </span>
              Live · 187 trucks dispatched · 14% callback rate
            </div>

            <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-6 inline-flex items-center gap-2">
              <Wind className="w-4 h-4" weight="duotone" />
              Planara Conduit · HVAC
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
              Conduit for HVAC service operations.
            </h1>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
              Service trucks roll. The right answer needs to be in the cab
              before the tech climbs onto the roof.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
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

            {/* Inline 3-stat strip below CTAs */}
            <div className="grid grid-cols-3 gap-4 max-w-lg pt-6 border-t border-white/[0.08]">
              <HvacHeroStat label="First-visit fix" value="86%" />
              <HvacHeroStat label="Avg callback cost" value="~$340" />
              <HvacHeroStat label="Parts trips avoided" value="6 / truck / mo" />
            </div>
          </div>

          {/* iPad mock right */}
          <div className="relative mx-auto w-full max-w-[360px] lg:max-w-none lg:w-full">
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

function HvacHeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1">
        {label}
      </p>
      <p className="text-base font-bold text-white tracking-tight">{value}</p>
    </div>
  );
}

/* Spotlight section (between WhyFits and DeploymentLook) */
function CallbackEconomics() {
  const stats = [
    {
      icon: Truck,
      eyebrow: "First-visit fix rate",
      headline: "86%",
      detail: "vs. industry baseline near 64%. The roof tech leaves with the job closed.",
    },
    {
      icon: Receipt,
      eyebrow: "Avg cost of a callback",
      headline: "~$340",
      detail: "Truck roll, tech time, parts shipping. Multiply by your callback rate.",
    },
    {
      icon: Wrench,
      eyebrow: "Parts trips avoided",
      headline: "~6 / truck / mo",
      detail: "Tech has the right diagnostic ladder before the climb. The right part rides with them.",
    },
  ];

  return (
    <section className="py-16 md:py-22 bg-planara-light border-b border-planara-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          The economics of a callback
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
          The difference between a one-visit fix and a three-visit fix.
        </h2>
        <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
          Illustrative numbers from internal benchmarking — your shop will
          vary. The mechanism is the part that holds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-planara-border rounded-lg overflow-hidden border border-planara-border">
          {stats.map((s) => (
            <div key={s.eyebrow} className="bg-white p-6">
              <s.icon className="w-6 h-6 text-planara-teal mb-4" weight="duotone" />
              <p className="text-xs font-mono uppercase tracking-wider text-planara-muted/70 mb-2">
                {s.eyebrow}
              </p>
              <p className="text-3xl md:text-4xl font-bold text-planara-dark mb-3 tracking-tight">
                {s.headline}
              </p>
              <p className="text-sm text-planara-muted leading-relaxed">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
