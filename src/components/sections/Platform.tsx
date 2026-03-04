import { FileText, Brain, Wifi, Wrench, Anchor, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

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
          purpose-built interfaces.
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
                Manufacturing needs structured output — safety warnings, spec
                tables, parts lists with SKUs, step-by-step procedures — all
                with citations back to the source document and page. Every
                response is shaped by who&apos;s asking and what the equipment
                is actually doing right now.
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
              Products
            </p>
            <Link
              href="/demo/service"
              className="block border border-white/10 rounded-sm p-5 bg-white/[0.03] hover:border-planara-teal/30 transition-colors group"
            >
              <Wrench className="w-5 h-5 text-planara-teal mb-3" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-white group-hover:text-planara-teal transition-colors">
                Service Intelligence
              </p>
              <p className="text-sm text-white/50 mt-1">
                For technicians and service operations. Dense, procedural, safety-first.
              </p>
            </Link>
            <Link
              href="/demo/owner"
              className="block border border-white/10 rounded-sm p-5 bg-white/[0.03] hover:border-planara-teal/30 transition-colors group"
            >
              <Anchor className="w-5 h-5 text-planara-teal mb-3" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-white group-hover:text-planara-teal transition-colors">
                Owner Intelligence
              </p>
              <p className="text-sm text-white/50 mt-1">
                For owners and dealers. Conversational, actionable, white-labeled.
              </p>
            </Link>
            <div className="border border-white/10 rounded-sm p-5 bg-white/[0.03]">
              <BarChart3 className="w-5 h-5 text-planara-teal mb-3" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-white">
                OEM Intelligence
              </p>
              <p className="text-sm text-white/50 mt-1">
                For product and documentation teams. Fleet-wide patterns, documentation gaps, quality feedback loop.
              </p>
            </div>
          </div>
        </div>

        {/* Flywheel */}
        <div className="mt-16 border border-white/10 rounded-sm p-6 bg-white/[0.02]">
          <p className="text-xs font-mono uppercase tracking-wider text-planara-teal/60 mb-4">
            The Intelligence Flywheel
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "Service interactions generate field data", detail: "Every query, diagnosis, and repair becomes structured intelligence" },
              { step: "OEM identifies patterns and gaps", detail: "Fleet-wide failure patterns, documentation gaps, warranty anomalies" },
              { step: "Documentation improves", detail: "Technical writing teams get data-driven feedback on what to fix" },
              { step: "Better outcomes for owners and technicians", detail: "More accurate answers, fewer misdiagnoses, faster resolution" },
            ].map((item, i) => (
              <div key={item.step} className="relative">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-planara-teal shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white/80 mb-1">
                      {item.step}
                    </p>
                    <p className="text-xs text-white/35 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
                {i < 3 && (
                  <ArrowRight
                    className="hidden md:block absolute -right-3 top-3 w-4 h-4 text-white/15 z-10"
                    strokeWidth={1.5}
                  />
                )}
              </div>
            ))}
          </div>
          <p className="text-[10px] font-mono text-white/20 mt-4 text-right">
            Cycle repeats — each iteration improves the next
          </p>
        </div>

        {/* Deploy line */}
        <p className="text-sm text-white/40 mt-8 text-center">
          Deploy as standalone tools or embed via API into existing systems.
        </p>
      </div>
    </section>
  );
}
