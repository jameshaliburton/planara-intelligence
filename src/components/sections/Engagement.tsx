import { ArrowRight } from "lucide-react";
import { WhitePaperCTA } from "@/components/WhitePaperModal";

const phases = [
  {
    phase: "Prototype",
    timeline: "1-2 weeks",
    price: "Free",
    detail:
      "Working prototype from your documentation. Prove the value before committing budget.",
    items: [
      "Ingest 2-3 manuals",
      "Configure one use case",
      "Live demo with your data",
      "No cost, no commitment",
    ],
    highlight: true,
  },
  {
    phase: "Pilot",
    timeline: "4-8 weeks",
    price: "$25-50K",
    detail:
      "Production-grade deployment with real users. Telemetry integration, DMS connection, measured outcomes.",
    items: [
      "Full documentation library",
      "Telemetry integration",
      "DMS & parts catalog connection",
      "User feedback & iteration",
    ],
    highlight: false,
  },
  {
    phase: "Platform",
    timeline: "Ongoing",
    price: "Per-unit SaaS",
    detail:
      "Scale across models, dealers, and customers. Revenue-generating for the dealer network.",
    items: [
      "Multi-model support",
      "Dealer white-labeling",
      "Owner self-service portal",
      "Continuous model improvement",
    ],
    highlight: false,
  },
];

export function Engagement() {
  return (
    <section id="engagement" className="py-24 md:py-32 bg-planara-navy">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          Engagement Model
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          Start with proof. Scale with confidence.
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mb-16 leading-relaxed">
          No multi-year contracts. No six-figure pilots to prove the concept.
          We build a working prototype from your documentation in 1-2 weeks, free.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase, i) => (
            <div
              key={phase.phase}
              className={
                phase.highlight
                  ? "border border-planara-teal/30 rounded-sm p-6 bg-planara-teal/[0.05]"
                  : "border border-white/10 rounded-sm p-6 bg-white/[0.02]"
              }
            >
              <div className="flex items-center gap-2 mb-1">
                <p className="text-xs font-mono uppercase tracking-wider text-white/40">
                  Phase {i + 1}
                </p>
                {phase.highlight && (
                  <span className="text-[10px] font-mono uppercase tracking-wider text-planara-teal bg-planara-teal/10 px-1.5 py-0.5 rounded-sm">
                    Start here
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {phase.phase}
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-sm font-mono text-planara-teal">
                  {phase.price}
                </span>
                <span className="text-xs text-white/30">{phase.timeline}</span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                {phase.detail}
              </p>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-white/60"
                  >
                    <ArrowRight
                      className="w-3.5 h-3.5 text-planara-teal shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* White paper CTA */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <WhitePaperCTA variant="dark" />
        </div>
      </div>
    </section>
  );
}
