import { ArrowRight } from "lucide-react";

const pillars = [
  {
    existing: "Your dealer uses CDK / Lightspeed",
    with: "Every service lookup pre-populates a work order in their DMS",
  },
  {
    existing: "Your techs reference service manuals",
    with: "Manuals become a queryable knowledge base with live telemetry context",
  },
  {
    existing: "Your boats have Siren Marine",
    with: "Telemetry data informs every service recommendation and owner interaction",
  },
];

export function ValueProp() {
  return (
    <section id="value-prop" className="py-24 md:py-32 bg-planara-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          The Value
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          Make your existing software intelligent.
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mb-16 leading-relaxed">
          Every manufacturer already has DMS, parts systems, and CRM. Those
          tools are databases. Planara turns them into knowledge systems by
          connecting documentation, telemetry, and context-aware AI.
        </p>

        <div className="space-y-6 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.existing}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-center"
            >
              <div className="border border-white/10 rounded-sm p-5 bg-white/[0.02]">
                <p className="text-xs font-mono uppercase tracking-wider text-white/30 mb-2">
                  Today
                </p>
                <p className="text-sm text-white/60">{pillar.existing}</p>
              </div>

              <div className="hidden md:flex items-center justify-center px-4">
                <ArrowRight className="w-5 h-5 text-planara-teal" strokeWidth={1.5} />
              </div>

              <div className="border border-planara-teal/20 rounded-sm p-5 bg-planara-teal/[0.04]">
                <p className="text-xs font-mono uppercase tracking-wider text-planara-teal/60 mb-2">
                  With Planara
                </p>
                <p className="text-sm text-white/80">{pillar.with}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-base text-white/60 leading-relaxed max-w-2xl">
            Planara connects all three and makes every interaction smarter.
            Not a new tool to learn — an intelligence layer that amplifies
            the investments you&apos;ve already made.
          </p>
        </div>
      </div>
    </section>
  );
}
