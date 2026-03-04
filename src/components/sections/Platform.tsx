import Link from "next/link";
import { FileText, Brain, Wifi, Wrench, Anchor, BarChart3 } from "lucide-react";

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

        {/* Architecture flow */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 lg:gap-0 items-start">
          {/* Input column */}
          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3">
              Inputs
            </p>
            <div className="border border-white/10 rounded-sm p-5 bg-white/[0.03]">
              <FileText className="w-5 h-5 text-planara-teal mb-3" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-white">Documentation</p>
              <p className="text-sm text-white/50 mt-1">
                Service manuals, technical bulletins, parts catalogs, wiring diagrams
              </p>
            </div>
            <div className="border border-white/10 rounded-sm p-5 bg-white/[0.03]">
              <Wifi className="w-5 h-5 text-planara-teal mb-3" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-white">Telemetry</p>
              <p className="text-sm text-white/50 mt-1">
                Engine hours, oil pressure, coolant temp, battery, fuel level
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center px-4 pt-12">
            <div className="w-12 h-px bg-white/20 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-white/20" />
            </div>
          </div>

          {/* Intelligence layer */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3">
              Intelligence Layer
            </p>
            <div className="border border-planara-teal/30 rounded-sm p-5 bg-planara-teal/[0.05]">
              <Brain className="w-5 h-5 text-planara-teal mb-3" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-white">Planara RAG Pipeline</p>
              <p className="text-sm text-white/50 mt-1 leading-relaxed">
                Generic AI tools return paragraphs. Manufacturing needs
                structured output — safety warnings, spec tables, parts lists
                with SKUs, step-by-step procedures — all with citations back to
                the source document and page. Every response is shaped by who&apos;s
                asking and what the equipment is actually doing right now.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Document parsing", "Semantic search", "Telemetry fusion", "Citation tracking"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 bg-planara-teal/10 text-planara-teal/80 rounded-sm"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center px-4 pt-12">
            <div className="w-12 h-px bg-white/20 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-white/20" />
            </div>
          </div>

          {/* Output column */}
          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3">
              Outcomes
            </p>
            <Link
              href="/demo/service"
              className="block border border-white/10 rounded-sm p-4 bg-white/[0.03] hover:border-planara-teal/30 transition-colors group"
            >
              <Wrench className="w-5 h-5 text-planara-teal mb-2" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-white group-hover:text-planara-teal transition-colors">
                Service Intelligence
              </p>
              <p className="text-xs text-white/50 mt-1">
                For technicians. Dense, procedural, safety-first.
              </p>
            </Link>
            <Link
              href="/demo/owner"
              className="block border border-white/10 rounded-sm p-4 bg-white/[0.03] hover:border-planara-teal/30 transition-colors group"
            >
              <Anchor className="w-5 h-5 text-planara-teal mb-2" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-white group-hover:text-planara-teal transition-colors">
                Owner Intelligence
              </p>
              <p className="text-xs text-white/50 mt-1">
                For owners and dealers. Conversational, white-labeled.
              </p>
            </Link>
            <div className="border border-white/10 rounded-sm p-4 bg-white/[0.03]">
              <BarChart3 className="w-5 h-5 text-planara-teal mb-2" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-white">
                OEM Intelligence
              </p>
              <p className="text-xs text-white/50 mt-1">
                Fleet-wide failure patterns, doc gaps, warranty validation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
