import {
  Tractor,
  ArrowRight,
  BookOpen,
} from "@phosphor-icons/react/dist/ssr";
import {
  DesignPartnerLayout,
  type DesignPartnerVertical,
} from "@/components/DesignPartnerLayout";

export const metadata = {
  title: "Conduit for heavy & agricultural equipment — Planara",
  description:
    "Planara Conduit for heavy and agricultural equipment OEMs and their dealer networks. Equipment in the field, hours on the meter, service window in the off-season — Conduit makes every dealer answer the same question the same way.",
};

const vertical: DesignPartnerVertical = {
  slug: "heavy-equipment",
  label: "Heavy & agricultural equipment",
  icon: Tractor,
  heroAccent: "topo",
  heroBadges: ["Hours-based", "Tier 4 / Stage V", "ROPS / FOPS"],
  heroSubBody:
    "Multi-platform fleets, dealer-network distribution, warranty consistency that lives or dies on whether every dealer answers the same way. Conduit is the layer that makes that consistent.",
  headline: "Conduit for dealer-network OEMs and the bays they answer to.",
  hookSentence:
    "Equipment in the field. Hours on the meter. Service window in the off-season. Conduit makes every dealer answer the same question the same way.",
  paragraphs: {
    standards:
      "Heavy and ag equipment runs on a stack of standards that vary by platform: hours-based service intervals defined by the OEM (Caterpillar, Komatsu, John Deere, Kubota, AGCO, CNH each have their own), Tier 4 / Stage V emissions, ANSI/ASABE for ag implements, and ROPS/FOPS for operator structural protection. Conduit cites the right standard for the right machine — not a generic interval that the warranty department will dispute.",
    density:
      "A heavy-equipment service manual is a small library: thousands of pages per platform, technical service bulletins issued continuously, warranty bulletins that change reimbursement rules, parts books with thousands of SKUs, and hydraulic and electrical schematics that span fold-out pages. Conduit ingests the whole platform corpus, keyed to model, serial, and configuration — so the dealer technician finds the right page on the right machine on the first try.",
    workflow:
      "Dealer-network OEMs live or die by how consistently their dealers answer the same question. Multi-engine vehicles (main + auxiliary + transmission), seasonal demand peaks at planting and harvest, the operator-versus-tech information split, and the customer-pay versus warranty-work mix all conspire to fragment the answer. Conduit is the layer that gives every dealer the same cited answer — and gives the OEM service ops director a read on where the network is drifting.",
  },
  deploymentNotes:
    "A heavy-equipment Conduit deployment ingests the platform service manuals, the live TSB and warranty bulletin feed, and the parts catalog. Dealer technicians ask in plain language. The OEM service ops director sees what dealers are asking, where the answers are weak, and which bulletins are landing — across the dealer network. Buyer is typically a dealer principal at a multi-store group or an OEM service ops director.",
  applicationFormHints:
    "Tell us what platforms, how many dealers, and what's breaking down — warranty consistency, dealer answer quality, or technician onboarding. Five fields. We read every one. If we think there's a fit, we'll come back to you within a week.",
  dashboardMock: {
    hero: { eyebrow: "Last 30 days", primary: "23 dealers active · 1,412 platform queries" },
    chartLabel: "Queries by platform · 30 days",
    metrics: [
      { label: "Dealers active", value: "23 / 27", delta: "+3", icon: "techs" as const },
      { label: "TSBs surfaced", value: "147", delta: "+12 this wk", icon: "citations" as const },
      { label: "Multi-platform", value: "62%", delta: "of queries", icon: "queries" as const },
      { label: "Warranty cite rate", value: "0.91", delta: "verified", icon: "confidence" as const },
    ],
  },
  heroMock: {
    question: "Service interval at 2,000 hours on the D6T?",
    specs: [
      ["Engine oil", "Cat DEO 15W-40"],
      ["Capacity", "30 L"],
      ["Filter", "1R-1808"],
      ["Hydraulic fluid", "Cat HYDO Advanced 10"],
    ],
    safetyText:
      "Park on level ground. Lower implements. Engage parking brake. Wait for oil to cool.",
    citation: "D6T SEBU · 2000-hr · p. 312",
    equipmentLabel: "D6T · 14,847 hrs",
  },
};

export default function HeavyEquipmentPage() {
  return (
    <DesignPartnerLayout vertical={vertical} spotlight={<MultiPlatform />} />
  );
}

function MultiPlatform() {
  const platforms = [
    { oem: "Caterpillar", model: "D6T dozer", manual: "SEBU 14897", note: "2,000-hr service" },
    { oem: "John Deere", model: "988K loader", manual: "OMT-227134", note: "Final drive seal" },
    { oem: "Komatsu", model: "PC360 excavator", manual: "WEAM004500", note: "Hydraulic pressure check" },
  ];
  return (
    <section className="py-16 md:py-22 bg-white border-b border-planara-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          Three platforms, one query
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
          The dealer technician doesn&rsquo;t pick a manual. They pick a machine.
        </h2>
        <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
          A multi-OEM fleet means a multi-OEM service bench. Conduit indexes
          every platform corpus, keyed to model and serial — so the right
          page lands no matter whose manual it lives in.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_auto_1fr] gap-6 lg:gap-4 items-stretch">
          {/* Three platform cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {platforms.map((p) => (
              <div
                key={p.oem}
                className="border border-planara-border rounded-lg p-4 bg-planara-light flex flex-col"
              >
                <p className="text-[10px] font-mono uppercase tracking-wider text-planara-muted/70 mb-1">
                  {p.oem}
                </p>
                <p className="text-sm font-semibold text-planara-dark mb-1">
                  {p.model}
                </p>
                <p className="text-[11px] font-mono text-planara-muted/80 mb-2">
                  {p.manual}
                </p>
                <p className="text-xs text-planara-muted leading-relaxed mt-auto">
                  {p.note}
                </p>
              </div>
            ))}
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="w-7 h-7 text-planara-teal/70" weight="bold" />
          </div>
          <div className="flex lg:hidden items-center justify-center text-planara-teal/70">
            <ArrowRight className="w-6 h-6 rotate-90" weight="bold" />
          </div>

          {/* Unified Conduit answer */}
          <div className="border border-planara-teal/40 rounded-lg p-5 bg-planara-teal/[0.04]">
            <p className="text-[10px] font-mono uppercase tracking-wider text-planara-teal mb-2">
              Conduit
            </p>
            <p className="text-base font-semibold text-planara-dark mb-3 leading-snug">
              One cited answer for the machine in front of the tech.
            </p>
            <p className="text-sm text-planara-muted leading-relaxed mb-4">
              Tech selects the unit. Conduit routes to the right OEM corpus,
              the right service interval, the right TSB stack — and serves
              the answer with a citation back to the page that authorized
              it.
            </p>
            <div className="flex items-center gap-1.5 pt-3 border-t border-planara-border">
              <BookOpen className="w-3.5 h-3.5 text-planara-teal" weight="duotone" />
              <span className="text-[11px] font-mono text-planara-muted">
                Cited to the platform manual the tech chose, every time
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
