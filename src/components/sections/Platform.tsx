import { PlatformCycle } from "@/components/PlatformCycle";

export function Platform() {
  return (
    <section id="platform" className="py-24 md:py-32 bg-planara-navy">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          One Platform, Three Outcomes
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          Documentation and telemetry in.
          <br />
          Intelligence out.
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mb-16 leading-relaxed">
          Planara ingests equipment documentation and connects to live
          telemetry, then delivers context-aware intelligence through
          purpose-built interfaces. Deploy as standalone tools or embed
          via API into existing systems.
        </p>

        <PlatformCycle />
      </div>
    </section>
  );
}
