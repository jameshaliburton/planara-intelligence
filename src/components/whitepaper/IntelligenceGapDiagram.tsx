"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export function IntelligenceGapDiagram() {
  return (
    <ScrollReveal>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/[0.06] rounded-lg overflow-hidden">
        {/* LEFT: Current state */}
        <div className="p-6 md:p-8 bg-white/[0.01] md:border-r border-b md:border-b-0 border-white/[0.06]">
          <p className="text-[10px] font-mono uppercase tracking-wider text-white/20 mb-5">
            Current State
          </p>

          {/* Inputs */}
          <div className="space-y-2 mb-6">
            <div className="border border-white/10 rounded px-3 py-2 bg-white/[0.02]">
              <p className="text-xs text-white/40">Telemetry Data</p>
              <p className="text-[10px] text-white/20 mt-0.5">
                Engine hours, temps, pressures, fuel
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center my-3">
            <svg width="20" height="24" viewBox="0 0 20 24">
              <line
                x1="10"
                y1="0"
                x2="10"
                y2="18"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
              <polygon
                points="6,18 14,18 10,24"
                fill="rgba(255,255,255,0.1)"
              />
            </svg>
          </div>

          {/* Dashboard */}
          <div className="border border-white/[0.06] rounded px-3 py-3 bg-white/[0.01] opacity-40">
            <p className="text-xs text-white/40">Dashboard</p>
            <div className="mt-2 flex gap-2">
              <div className="h-4 flex-1 rounded-sm bg-white/[0.04]" />
              <div className="h-4 flex-1 rounded-sm bg-white/[0.04]" />
              <div className="h-4 flex-1 rounded-sm bg-white/[0.04]" />
            </div>
            <p className="text-[10px] text-white/15 mt-2 italic">
              Numbers without meaning
            </p>
          </div>

          <p className="text-sm font-semibold text-white/30 mt-6 text-center">
            Data without context
          </p>
        </div>

        {/* RIGHT: With intelligence layer */}
        <div className="p-6 md:p-8 bg-planara-teal/[0.02]">
          <p className="text-[10px] font-mono uppercase tracking-wider text-planara-teal/50 mb-5">
            With Intelligence Layer
          </p>

          {/* Inputs */}
          <div className="space-y-2 mb-6">
            <div className="border border-planara-teal/15 rounded px-3 py-2 bg-planara-teal/[0.03]">
              <p className="text-xs text-white/60">Telemetry Data</p>
              <p className="text-[10px] text-white/30 mt-0.5">
                Engine hours, temps, pressures, fuel
              </p>
            </div>
            <div className="border border-planara-teal/15 rounded px-3 py-2 bg-planara-teal/[0.03]">
              <p className="text-xs text-white/60">Documentation</p>
              <p className="text-[10px] text-white/30 mt-0.5">
                Service manuals, specs, procedures
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center my-3">
            <svg width="20" height="24" viewBox="0 0 20 24">
              <line
                x1="10"
                y1="0"
                x2="10"
                y2="18"
                stroke="rgba(67,206,214,0.3)"
                strokeWidth="1"
                strokeDasharray="4 3"
                style={{ animation: "dash-flow 1.5s linear infinite" }}
              />
              <polygon
                points="6,18 14,18 10,24"
                fill="rgba(67,206,214,0.3)"
              />
            </svg>
          </div>

          {/* Intelligence Layer */}
          <div className="border border-planara-teal/20 rounded px-3 py-3 bg-planara-teal/[0.04]">
            <p className="text-xs text-planara-teal/70 font-semibold">
              Intelligence Layer
            </p>
            <div className="mt-2 space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-planara-teal/40" />
                <p className="text-[11px] text-white/50">
                  Proactive service alert
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-planara-teal/40" />
                <p className="text-[11px] text-white/50">
                  Pre-populated work order
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-planara-teal/40" />
                <p className="text-[11px] text-white/50">
                  Owner notification
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm font-semibold text-planara-teal/60 mt-6 text-center">
            Data with documentation context
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
