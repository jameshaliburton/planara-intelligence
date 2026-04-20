import {
  ShieldCheck,
  ArrowsClockwise,
  Crosshair,
  ChartLineUp,
  Lightning,
  Storefront,
} from "@phosphor-icons/react/dist/ssr";

const cards = [
  {
    icon: Storefront,
    title: "OEM-to-dealer distribution",
    description:
      "The OEM publishes content. Every dealer in the network has it in minutes — chunked, indexed, and ready for retrieval. No email PDFs. No filing cabinets. No hoping someone reads the TSB.",
    featured: true,
  },
  {
    icon: ArrowsClockwise,
    title: "Closed-loop field intelligence",
    description:
      "Step-level outcome tracking captures what worked, what didn't, and what the tech actually did. After 10,000 repairs, the knowledge base contains field-validated intelligence that isn't in any manual.",
    featured: true,
  },
  {
    icon: Crosshair,
    title: "Equipment-centric context",
    description:
      "The query is implicit in the equipment. Scan a serial number — get applicable TSBs, maintenance due, known issues, and network resolution data before typing a word.",
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: "Zero-hallucination architecture",
    description:
      "Every spec, part number, and procedure comes from your documentation with page-level citations. 4-stage safety validation: warning enforcement, grounding check, range validation, confidence scoring.",
  },
  {
    icon: ChartLineUp,
    title: "Network resolution analytics",
    description:
      "Cross-dealer patterns the OEM can't see any other way. Which procedures actually work. Which documentation gaps cost the most. Which field issues are emerging before they become recalls.",
  },
  {
    icon: Lightning,
    title: "27-second onboarding",
    description:
      "Drop in your documentation. In 27 seconds the system extracts procedures, parts, specs, diagnostic trees, and generates eval queries automatically. Self-serve from day one.",
  },
];

export function Differentiators() {
  return (
    <section className="py-16 md:py-22 bg-planara-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          What Makes This Different
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          Not a search engine. A field intelligence layer.
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mb-16 leading-relaxed">
          Three architectural bets that compound over time — plus the engineering to back them up.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`border rounded-sm p-6 transition-colors ${
                card.featured
                  ? "border-planara-teal/20 bg-planara-teal/[0.03] hover:border-planara-teal/40"
                  : "border-white/[0.08] bg-white/[0.02] hover:border-planara-teal/20"
              }`}
            >
              <card.icon
                className="w-6 h-6 text-planara-teal mb-4"
                weight="duotone"
              />
              <h3 className="text-base font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
