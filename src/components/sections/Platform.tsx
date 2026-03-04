import { FileText, Brain, Wifi, Wrench, Anchor, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Platform() {
  return (
    <section id="platform" className="py-24 md:py-32 bg-planara-navy">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          Documentation and telemetry in.
          <br />
          Intelligence out.
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mb-16 leading-relaxed">
          The same platform powers all three outcomes. Here&apos;s what&apos;s underneath.
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
                Structured query interface with telemetry-aware responses, citation tracking, and DMS integration.
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
                Dealer-branded conversational portal with equipment-specific context and service CTAs.
              </p>
            </Link>
            <div className="border border-white/10 rounded-sm p-5 bg-white/[0.03]">
              <BarChart3 className="w-5 h-5 text-planara-teal mb-3" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-white">
                OEM Intelligence
              </p>
              <p className="text-sm text-white/50 mt-1">
                Fleet analytics dashboard surfacing failure patterns, documentation gaps, and product feedback.
              </p>
            </div>
          </div>
        </div>

        {/* Intelligence Loop */}
        <div className="mt-16 border border-white/10 rounded-sm p-6 bg-white/[0.02]">
          <p className="text-xs font-mono uppercase tracking-wider text-planara-teal/60 mb-6">
            The Intelligence Loop
          </p>
          <div className="grid grid-cols-2 gap-px max-w-2xl mx-auto">
            {/* Top-left: Service interactions */}
            <div className="relative p-4 border border-white/[0.06] rounded-tl-sm">
              <p className="text-sm font-medium text-white/80 mb-1">
                Service interactions generate field data
              </p>
              <p className="text-xs text-white/35 leading-relaxed">
                Every query, diagnosis, and repair becomes structured intelligence
              </p>
              {/* Arrow right */}
              <ArrowRight className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-planara-teal/40 z-10" strokeWidth={2} />
            </div>
            {/* Top-right: OEM identifies */}
            <div className="relative p-4 border border-white/[0.06] rounded-tr-sm">
              <p className="text-sm font-medium text-white/80 mb-1">
                OEM identifies patterns
              </p>
              <p className="text-xs text-white/35 leading-relaxed">
                Fleet-wide failure patterns, documentation gaps, warranty anomalies
              </p>
              {/* Arrow down */}
              <svg className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 text-planara-teal/40 z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
            {/* Bottom-left: Better outcomes */}
            <div className="relative p-4 border border-white/[0.06] rounded-bl-sm">
              <p className="text-sm font-medium text-white/80 mb-1">
                Better outcomes
              </p>
              <p className="text-xs text-white/35 leading-relaxed">
                More accurate answers, fewer misdiagnoses, faster resolution
              </p>
              {/* Arrow up */}
              <svg className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 text-planara-teal/40 z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </div>
            {/* Bottom-right: Documentation improves */}
            <div className="relative p-4 border border-white/[0.06] rounded-br-sm">
              <p className="text-sm font-medium text-white/80 mb-1">
                Documentation improves
              </p>
              <p className="text-xs text-white/35 leading-relaxed">
                Technical writing teams get data-driven feedback
              </p>
              {/* Arrow left */}
              <svg className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-planara-teal/40 z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
