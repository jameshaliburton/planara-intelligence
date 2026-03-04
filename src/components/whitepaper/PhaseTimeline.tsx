"use client";

import { useEffect, useRef, useState } from "react";

const phases = [
  {
    phase: "Phase 1",
    name: "Prove the Value",
    duration: "1-2 weeks",
    highlight: true,
    items: [
      "2-3 equipment manuals",
      "One use case",
      "Working prototype",
      "No integrations needed",
    ],
  },
  {
    phase: "Phase 2",
    name: "Pilot with Real Users",
    duration: "4-8 weeks",
    highlight: false,
    items: [
      "Full documentation library",
      "Telemetry connection",
      "1-2 integrations",
      "Measured outcomes",
    ],
  },
  {
    phase: "Phase 3",
    name: "Scale Across Platform",
    duration: "Ongoing",
    highlight: false,
    items: [
      "Multi-model, multi-dealer",
      "White-labeling",
      "Fleet analytics",
      "Project becomes platform",
    ],
  },
];

export function PhaseTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="my-12 border border-white/[0.06] rounded-lg bg-white/[0.015] p-6 md:p-8"
    >
      {/* Desktop: horizontal */}
      <div className="hidden md:block">
        <div className="flex gap-0 items-stretch">
          {phases.map((p, i) => (
            <div key={p.phase} className="flex items-stretch flex-1">
              <div
                className={`flex-1 transition-all duration-700 ease-out ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Node */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-3 h-3 rounded-full shrink-0 ${
                      p.highlight
                        ? "bg-planara-teal shadow-[0_0_8px_rgba(67,206,214,0.3)]"
                        : "bg-white/15"
                    }`}
                  />
                  <div
                    className={`flex-1 h-px ${
                      i < phases.length - 1
                        ? "border-t border-dashed border-white/10"
                        : ""
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="pr-6">
                  <div className="flex items-center gap-2 mb-1">
                    <p
                      className={`text-[10px] font-mono uppercase tracking-wider ${
                        p.highlight ? "text-planara-teal/60" : "text-white/20"
                      }`}
                    >
                      {p.phase}
                    </p>
                    {p.highlight && (
                      <span className="text-[9px] font-mono text-planara-teal/40 px-1.5 py-0.5 border border-planara-teal/15 rounded bg-planara-teal/[0.04]">
                        start here
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-white mb-0.5">
                    {p.name}
                  </p>
                  <p className="text-[10px] text-white/25 mb-3">
                    {p.duration}
                  </p>
                  <div className="space-y-1.5">
                    {p.items.map((item) => (
                      <div key={item} className="flex items-start gap-1.5">
                        <span
                          className={`text-[8px] mt-1 ${
                            p.highlight
                              ? "text-planara-teal/40"
                              : "text-white/15"
                          }`}
                        >
                          &bull;
                        </span>
                        <p className="text-[11px] text-white/35 leading-snug">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical */}
      <div className="md:hidden space-y-6">
        {phases.map((p, i) => (
          <div
            key={p.phase}
            className={`transition-all duration-700 ease-out ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="flex gap-4">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                    p.highlight
                      ? "bg-planara-teal shadow-[0_0_6px_rgba(67,206,214,0.3)]"
                      : "bg-white/15"
                  }`}
                />
                {i < phases.length - 1 && (
                  <div className="w-px flex-1 border-l border-dashed border-white/10 mt-1" />
                )}
              </div>

              {/* Content */}
              <div className="pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <p
                    className={`text-[10px] font-mono uppercase tracking-wider ${
                      p.highlight ? "text-planara-teal/60" : "text-white/20"
                    }`}
                  >
                    {p.phase}
                  </p>
                  {p.highlight && (
                    <span className="text-[9px] font-mono text-planara-teal/40 px-1.5 py-0.5 border border-planara-teal/15 rounded bg-planara-teal/[0.04]">
                      start here
                    </span>
                  )}
                </div>
                <p className="text-sm font-semibold text-white mb-0.5">
                  {p.name}
                </p>
                <p className="text-[10px] text-white/25 mb-2">
                  {p.duration}
                </p>
                <div className="space-y-1">
                  {p.items.map((item) => (
                    <p key={item} className="text-[11px] text-white/35">
                      &bull; {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
