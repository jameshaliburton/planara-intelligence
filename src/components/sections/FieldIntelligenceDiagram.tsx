"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const steps = [
  { label: "Tech queries", sublabel: "Symptom, fault code, question", color: "text-planara-teal", borderColor: "border-planara-teal/30" },
  { label: "Gets procedure", sublabel: "Cited, safety-checked", color: "text-planara-teal", borderColor: "border-planara-teal/30" },
  { label: "Executes steps", sublabel: "With outcome tracking", color: "text-planara-teal", borderColor: "border-planara-teal/30" },
  { label: "Outcome captured", sublabel: "Resolved / didn't resolve / actual fix", color: "text-white", borderColor: "border-planara-teal/50" },
];

const learningSteps = [
  { label: "Correction submitted", sublabel: '"Manual says X, actual fix is Y"', color: "text-amber-400", borderColor: "border-amber-400/30" },
  { label: "Admin validates", sublabel: "Reviews against source docs", color: "text-amber-400", borderColor: "border-amber-400/30" },
  { label: "Active correction", sublabel: "Injected into future responses", color: "text-emerald-400", borderColor: "border-emerald-400/30" },
];

const networkCards = [
  { dealer: "Dealer A", correction: "Same fix submitted" },
  { dealer: "Dealer B", correction: "Same fix submitted" },
  { dealer: "Dealer C", correction: "Same fix submitted" },
];

export function FieldIntelligenceDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-22 bg-planara-dark border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          The Field Intelligence Loop
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 max-w-3xl">
          Every repair makes the knowledge base smarter.
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mb-12 leading-relaxed">
          Step-level outcome tracking captures what worked, what didn&apos;t, and what the tech actually did.
          Corrections flow through validation into future responses. Network patterns surface across the dealer base.
        </p>

        {/* The Repair */}
        <div className="mb-8">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 mb-3">The Repair</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {steps.map((step, i) => (
              <div
                key={step.label}
                className={cn(
                  "border rounded-sm p-4 bg-white/[0.02] transition-all duration-500",
                  step.borderColor,
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                )}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <p className={cn("text-sm font-semibold mb-1", step.color)}>{step.label}</p>
                <p className="text-[11px] text-white/30">{step.sublabel}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow down */}
        <div className={cn(
          "flex justify-center mb-4 transition-all duration-500 delay-700",
          visible ? "opacity-100" : "opacity-0"
        )}>
          <div className="flex flex-col items-center">
            <div className="w-px h-6 bg-gradient-to-b from-planara-teal/40 to-amber-400/40" />
            <p className="text-[10px] text-amber-400/50 font-mono mt-1">Didn&apos;t resolve?</p>
          </div>
        </div>

        {/* The Learning */}
        <div className="mb-8">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 mb-3">The Learning</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {learningSteps.map((step, i) => (
              <div
                key={step.label}
                className={cn(
                  "border rounded-sm p-4 bg-white/[0.02] transition-all duration-500",
                  step.borderColor,
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                )}
                style={{ transitionDelay: `${800 + i * 150}ms` }}
              >
                <p className={cn("text-sm font-semibold mb-1", step.color)}>{step.label}</p>
                <p className="text-[11px] text-white/30">{step.sublabel}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Return arrow */}
        <div className={cn(
          "flex justify-center mb-8 transition-all duration-500 delay-[1300ms]",
          visible ? "opacity-100" : "opacity-0"
        )}>
          <div className="flex items-center gap-2 px-4 py-1.5 border border-emerald-400/20 rounded-full bg-emerald-400/5">
            <div className="w-2 h-2 rounded-full bg-emerald-400/40" />
            <p className="text-[11px] text-emerald-400/60 font-mono">Next tech gets the improved procedure</p>
          </div>
        </div>

        {/* Network Pattern */}
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 mb-3">The Network Intelligence</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className={cn(
                "border border-purple-400/20 rounded-sm p-5 bg-purple-400/[0.02] transition-all duration-500 delay-[1500ms]",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              )}
            >
              <p className="text-sm font-semibold text-purple-300 mb-3">Pattern detection</p>
              <div className="flex gap-2 mb-3">
                {networkCards.map((card) => (
                  <div key={card.dealer} className="flex-1 border border-purple-400/10 rounded-sm p-2 bg-white/[0.01]">
                    <p className="text-[11px] font-semibold text-purple-300/70">{card.dealer}</p>
                    <p className="text-[10px] text-white/20">{card.correction}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-white/30">3+ dealers submit the same correction → auto-proposes network-wide update</p>
            </div>

            <div
              className={cn(
                "border border-emerald-400/20 rounded-sm p-5 bg-emerald-400/[0.02] transition-all duration-500 delay-[1700ms]",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              )}
            >
              <p className="text-sm font-semibold text-emerald-300 mb-3">OEM resolution analytics</p>
              <p className="text-[12px] text-white/40 leading-relaxed">
                F300 thermostat replacement resolves overheating <span className="text-emerald-400 font-mono">64%</span> of the time.{" "}
                <span className="text-emerald-400 font-mono">31%</span> of cases, the actual root cause is the tell-tale water passage.
              </p>
              <p className="text-[10px] text-white/20 mt-2">
                Intelligence the OEM&apos;s engineering team can&apos;t get any other way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
