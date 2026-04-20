"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const stats = [
  {
    value: "25%",
    headline: "of service costs are failed visits",
    detail: "A failed first visit adds 2 more truck rolls and 14 days to resolution. Bottom performers waste 44% of service spend on repeat visits.",
    source: "Aquant Field Service Benchmark, 2026",
  },
  {
    value: "28pt",
    headline: "first-time fix gap between top and bottom",
    detail: "Top companies fix it right 88% of the time. Bottom performers: 60%. The difference is knowledge — who has it, how fast they can find it.",
    source: "Aquant Field Service Benchmark, 2026",
  },
  {
    value: "70%",
    headline: "of service orgs face disruption from retirements",
    detail: "When a senior tech retires, years of undocumented fixes walk out the door. No manual captures what actually works in the field.",
    source: "The Service Council",
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-16 md:py-22 bg-white border-b border-planara-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-16 max-w-3xl">
            25% of service costs are failed first visits. The knowledge to fix it is trapped in manuals nobody reads and techs who are retiring.
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" stagger={0.15}>
          {stats.map((stat) => (
            <StaggerItem key={stat.value}>
              <div className="border-l-2 border-planara-teal pl-6">
                <AnimatedCounter
                  value={stat.value}
                  className="text-5xl md:text-6xl font-bold text-planara-dark tracking-tight block"
                />
                <p className="text-lg font-semibold text-planara-dark mt-2">
                  {stat.headline}
                </p>
                <p className="text-base text-planara-muted mt-1 leading-relaxed">
                  {stat.detail}
                </p>
                {stat.source && (
                  <p className="text-xs text-planara-muted/60 mt-3 font-mono">
                    {stat.source}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
