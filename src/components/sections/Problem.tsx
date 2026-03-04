"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const stats = [
  {
    value: "72%",
    headline: "of manufacturers have undocumented fixes",
    detail: "masking true downtime causes across their service operations",
    source: "HVI Manufacturing Survey, 2025",
  },
  {
    value: "61%",
    headline: "of a technician\u2019s day",
    detail: "spent searching systems instead of performing maintenance",
    source: "IFS / Reliabilityweb Study, 2024",
  },
  {
    value: "$0",
    headline: "Zero value extracted from connected equipment telemetry",
    detail:
      "Manufacturers invest in connected equipment but capture none of that data as actionable service intelligence \u2014 today.",
    source: "",
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
            Billions in documentation. Zero intelligence.
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
