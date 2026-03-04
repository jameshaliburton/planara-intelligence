import { MapPin } from "@phosphor-icons/react/dist/ssr";

export function ValueProp() {
  return (
    <section id="value-prop" className="py-16 md:py-22 bg-planara-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          One Platform, Two Paths
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          Build what you need. Integrate when you can.
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mb-4 leading-relaxed">
          Deploy as standalone tools or embed via API into existing systems.
          Planara supports both purpose-built tools and embedded intelligence,
          running on the same platform.
        </p>
        <p className="text-sm text-white/35 mb-16 leading-relaxed max-w-2xl">
          Planara doesn&apos;t replace your existing software. It makes it intelligent.
        </p>

        {/* Architecture diagram */}
        <div className="max-w-4xl mx-auto">
          {/* Track labels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            {/* Track A */}
            <div className="relative pr-0 md:pr-8">
              <div className="flex items-center gap-2 mb-1.5">
                <p className="text-[10px] font-mono uppercase tracking-wider text-white/30">
                  Track A
                </p>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-planara-teal/70">
                  <MapPin className="w-3 h-3" />
                  You are here
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-3">
                Purpose-Built Tools
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                Planara builds tailored applications for your specific use
                cases — the demos are examples. Standalone,
                branded to your dealer network, running on your documentation
                and telemetry — deployed without IT approval or vendor
                negotiation.
              </p>
              <p className="text-xs font-mono text-white/30">
                Most clients start here
              </p>

              {/* Connector line */}
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-white/[0.06]" />
            </div>

            {/* Track B */}
            <div className="pl-0 md:pl-8 mt-8 md:mt-0">
              <p className="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-1.5">
                Track B
              </p>
              <h3 className="text-base font-semibold text-white mb-3">
                Embedded Intelligence
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">
                For organizations that want AI capabilities inside their
                existing DMS, service tools, or customer portals. Requires
                API access and vendor cooperation. Deeper integration,
                longer timeline — add when the ROI justifies the effort.
              </p>
              <p className="text-xs font-mono text-white/30">
                Add later when proven
              </p>
            </div>
          </div>

          {/* Connector lines into platform */}
          <div className="hidden md:grid grid-cols-2 gap-px mt-6 mb-0">
            <div className="flex justify-center pr-8">
              <div className="w-px h-8 border-l border-dashed border-white/[0.12]" />
            </div>
            <div className="flex justify-center pl-8">
              <div className="w-px h-8 border-l border-dashed border-white/[0.12]" />
            </div>
          </div>

          {/* Mobile connector */}
          <div className="md:hidden flex justify-center mt-6 mb-0">
            <div className="w-px h-6 border-l border-dashed border-white/10" />
          </div>

          {/* Platform foundation */}
          <div className="border-t border-white/[0.08] pt-4 pb-1">
            <div className="flex items-baseline justify-between flex-wrap gap-3">
              <p className="text-xs font-mono uppercase tracking-wider text-white/25">
                Planara Intelligence Platform
              </p>
              <p className="text-[11px] font-mono text-white/15">
                RAG Pipeline &middot; Doc Ingestion &middot; Telemetry &middot; Multi-model
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
