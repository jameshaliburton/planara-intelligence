"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export function TwoPathDiagram() {
  return (
    <ScrollReveal>
      <div className="my-12 border border-white/[0.06] rounded-lg bg-white/[0.015] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Path A: Purpose-Built */}
          <div className="p-6 md:p-8 md:border-r border-b md:border-b-0 border-white/[0.06]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-planara-teal/60 px-2 py-0.5 border border-planara-teal/20 rounded bg-planara-teal/[0.04]">
                Start here
              </span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Path A: Purpose-Built Applications
            </h4>
            <p className="text-sm text-white/40 leading-relaxed mb-5">
              Standalone tools designed for specific use cases. No vendor
              integration required. Proves value before any significant
              commitment.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-planara-teal/40 text-xs mt-0.5">
                  &bull;
                </span>
                <p className="text-xs text-white/35">
                  Working prototype in 1-2 weeks
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-planara-teal/40 text-xs mt-0.5">
                  &bull;
                </span>
                <p className="text-xs text-white/35">
                  No IT project, no vendor approvals
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-planara-teal/40 text-xs mt-0.5">
                  &bull;
                </span>
                <p className="text-xs text-white/35">
                  Purpose-built interfaces for each user type
                </p>
              </div>
            </div>
          </div>

          {/* Path B: Embedded */}
          <div className="p-6 md:p-8 opacity-70">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/20 px-2 py-0.5 border border-white/[0.06] rounded">
                Add later
              </span>
            </div>
            <h4 className="text-lg font-bold text-white/70 mb-2">
              Path B: Embedded Intelligence
            </h4>
            <p className="text-sm text-white/30 leading-relaxed mb-5">
              Intelligence layer embedded via API into existing DMS, service
              tools, and customer portals. Requires vendor cooperation.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-white/15 text-xs mt-0.5">&bull;</span>
                <p className="text-xs text-white/25">
                  Surfaces inside tools teams already use
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white/15 text-xs mt-0.5">&bull;</span>
                <p className="text-xs text-white/25">
                  Requires API access and vendor cooperation
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white/15 text-xs mt-0.5">&bull;</span>
                <p className="text-xs text-white/25">
                  Longer timeline, higher integration investment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Convergence */}
        <div className="border-t border-white/[0.06] px-6 md:px-8 py-5 text-center bg-planara-teal/[0.02]">
          <p className="text-xs text-white/30">
            Both paths run on the same platform &mdash;
          </p>
          <p className="text-sm font-semibold text-planara-teal/60 mt-1">
            Planara Intelligence Platform
          </p>
          <p className="text-[10px] text-white/20 mt-1">
            Same documentation pipeline. Same telemetry connections. Same RAG
            architecture.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
