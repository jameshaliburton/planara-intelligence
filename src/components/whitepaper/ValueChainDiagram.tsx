"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

const stages = [
  { name: "OEM", sub: "Documentation" },
  { name: "Dealer", sub: "Distribution" },
  { name: "Technician", sub: "Service" },
  { name: "Owner", sub: "Experience" },
];

const handoffs = [
  {
    from: "OEM",
    to: "Dealer",
    friction: "Documentation distributed as static PDFs",
    opportunity: "Queryable TSI platform for the dealer network",
  },
  {
    from: "Dealer",
    to: "Technician",
    friction: "Patchwork software, no cross-referencing",
    opportunity: "Instant answers with parts, procedures, safety warnings",
  },
  {
    from: "Technician",
    to: "Owner",
    friction: "Phone number and PDF manual",
    opportunity: "Conversational self-service with dealer branding",
  },
];

function DashedArrow() {
  return (
    <div className="flex-1 min-w-[40px] flex items-center px-1">
      <svg
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
        className="w-full h-[2px]"
      >
        <line
          x1="0"
          y1="1"
          x2="92"
          y2="1"
          stroke="rgba(67,206,214,0.2)"
          strokeWidth="2"
          strokeDasharray="6 4"
          vectorEffect="non-scaling-stroke"
          style={{ animation: "dash-flow 1.5s linear infinite" }}
        />
        <polygon
          points="92,0 100,1 92,2"
          fill="rgba(67,206,214,0.25)"
        />
      </svg>
    </div>
  );
}

export function ValueChainDiagram() {
  return (
    <ScrollReveal>
      <div className="my-12 py-8 border border-white/[0.06] rounded-lg bg-white/[0.015]">
        {/* Desktop: horizontal flow */}
        <div className="hidden md:block px-8">
          {/* Stage nodes + arrows */}
          <div className="flex items-center">
            {stages.map((stage, i) => (
              <div key={stage.name} className="contents">
                <div className="border border-white/10 rounded-lg px-5 py-4 text-center bg-white/[0.02] min-w-[110px] shrink-0">
                  <p className="text-sm font-semibold text-white">
                    {stage.name}
                  </p>
                  <p className="text-[10px] text-white/30 mt-0.5">
                    {stage.sub}
                  </p>
                </div>
                {i < stages.length - 1 && <DashedArrow />}
              </div>
            ))}
          </div>

          {/* Handoff annotations */}
          <div className="grid grid-cols-3 gap-6 mt-8 ml-[55px] mr-[55px]">
            {handoffs.map((h, i) => (
              <div key={i} className="space-y-2.5">
                <p className="text-[10px] font-mono uppercase tracking-wider text-white/15 mb-1">
                  {h.from} &rarr; {h.to}
                </p>
                <div className="flex gap-2 items-start">
                  <span className="text-red-400/40 text-[10px] mt-px shrink-0">
                    &times;
                  </span>
                  <p className="text-[11px] text-white/30 leading-snug">
                    {h.friction}
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-planara-teal/50 text-[10px] mt-px shrink-0">
                    &rarr;
                  </span>
                  <p className="text-[11px] text-planara-teal/60 leading-snug">
                    {h.opportunity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Feedback loop */}
          <div className="mt-6 pt-5 border-t border-dashed border-planara-teal/10 text-center">
            <p className="text-[11px] text-planara-teal/40 italic">
              <span className="text-planara-teal/25 mr-1">&larr;</span>
              Owner &rarr; OEM: Every interaction becomes fleet intelligence
            </p>
          </div>
        </div>

        {/* Mobile: vertical flow */}
        <div className="md:hidden px-5 space-y-2">
          {stages.map((stage, i) => (
            <div key={stage.name}>
              <div className="border border-white/10 rounded-lg px-4 py-3 bg-white/[0.02]">
                <p className="text-sm font-semibold text-white">
                  {stage.name}
                </p>
                <p className="text-[10px] text-white/30">{stage.sub}</p>
              </div>
              {i < handoffs.length && (
                <div className="ml-5 pl-4 py-3 border-l border-dashed border-planara-teal/15 space-y-1.5">
                  <p className="text-[10px] text-white/25 leading-snug">
                    <span className="text-red-400/30 mr-1">&times;</span>
                    {handoffs[i].friction}
                  </p>
                  <p className="text-[10px] text-planara-teal/50 leading-snug">
                    <span className="text-planara-teal/30 mr-1">&rarr;</span>
                    {handoffs[i].opportunity}
                  </p>
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-dashed border-planara-teal/10">
            <p className="text-[10px] text-planara-teal/40 italic text-center">
              Every interaction becomes fleet intelligence
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
