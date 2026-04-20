"use client";

import {
  MagnifyingGlass,
  Clock,
  Gauge,
  Thermometer,
  BatteryMedium,
  Drop,
  Anchor,
  Phone,
  MapPin,
  ArrowRight,
} from "@phosphor-icons/react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

const SERVICE_QUERIES = [
  "What oil does the F300 require?",
  "Engine overheating at low RPM",
  "Winterization procedure",
  "When is my next service due?",
];

const OWNER_QUERIES = [
  "When is my next service due?",
  "What oil does my engine need?",
  "How do I winterize?",
  "What does the warning light mean?",
];

export function DemoPreview() {
  return (
    <section id="demos" className="py-16 md:py-22 bg-planara-light">
      <div className="container mx-auto px-6 max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-mono uppercase tracking-wider text-planara-blue mb-4">
            Interactive Tours
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
            Two guided walkthroughs, built from Yamaha F300 documentation.
          </h2>
          <p className="text-lg text-planara-muted max-w-2xl mb-4 leading-relaxed">
            Scripted scenarios that show how the same intelligence platform
            serves different users — technicians on the floor and owners in
            the dealership.
          </p>
          <p className="text-sm text-planara-muted/70 max-w-2xl mb-16 leading-relaxed">
            For the real product — multi-tenant backoffice, analytics, OEM
            network view —{" "}
            <a
              href="https://demo.planara.com"
              className="text-planara-blue font-medium hover:underline"
            >
              open the live demo ↗
            </a>
            .
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Intelligence Card */}
          <div className="group/card transition-transform duration-200 hover:-translate-y-1">
            <div className="rounded-lg overflow-hidden border border-planara-border shadow-lg group-hover/card:shadow-xl transition-shadow duration-200">
              {/* App chrome — title bar */}
              <div className="bg-[#1A1E27] border-b border-white/[0.06] px-4 py-2.5 flex items-center gap-3 pointer-events-none">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <span className="text-[10px] font-mono text-white/25 mx-auto">
                  Planara Service Intelligence v1.0
                </span>
              </div>

              {/* Telemetry bar */}
              <div className="bg-[#0D1117] border-b border-white/[0.06] px-4 py-2.5 pointer-events-none">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Drop className="w-3 h-3 text-planara-teal shrink-0" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-planara-teal/60 shrink-0">
                    Live
                  </span>
                  <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                  <div className="flex items-center gap-3 ml-2 overflow-hidden">
                    {[
                      { icon: Clock, value: "847 hrs" },
                      { icon: Gauge, value: "58 psi" },
                      { icon: Thermometer, value: "172°F" },
                      { icon: BatteryMedium, value: "12.4V" },
                      { icon: Drop, value: "68%" },
                    ].map((item) => (
                      <div key={item.value} className="flex items-center gap-1 shrink-0">
                        <item.icon className="w-3 h-3 text-white/25" />
                        <span className="text-[10px] font-mono text-white/50">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Demo area */}
              <div className="bg-[#0B0E14] h-[240px] relative pointer-events-none">
                <div className="px-5 pt-5">
                  {/* Search input */}
                  <div className="relative mb-4">
                    <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
                    <div className="w-full bg-white/[0.04] border border-white/10 rounded-sm pl-9 pr-4 py-2.5 text-xs text-white/25 font-mono">
                      Ask about the Yamaha F300...
                    </div>
                  </div>
                  {/* Query chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {SERVICE_QUERIES.map((q) => (
                      <span
                        key={q}
                        className="text-[10px] font-mono px-2 py-1 bg-white/[0.04] border border-white/10 rounded-sm text-white/35"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0B0E14] to-transparent" />
              </div>
            </div>

            {/* Card text */}
            <div className="mt-5">
              <h3 className="text-lg font-bold text-planara-dark mb-1.5">
                Service Intelligence
              </h3>
              <p className="text-sm text-planara-muted leading-relaxed mb-3">
                For certified technicians. Dense, procedural, safety-first — backed
                by manual citations and live telemetry.
              </p>
              <Link
                href="/demo/service"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-planara-blue hover:text-planara-blue/80 transition-colors"
              >
                Take the interactive tour
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Owner Intelligence Card */}
          <div className="group/card transition-transform duration-200 hover:-translate-y-1">
            <div className="rounded-lg overflow-hidden border border-planara-border shadow-lg group-hover/card:shadow-xl transition-shadow duration-200 bg-white">
              {/* Dealer header */}
              <div className="px-5 py-3.5 flex items-center justify-between border-b border-planara-border pointer-events-none">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-planara-navy flex items-center justify-center">
                    <Anchor className="w-4 h-4 text-white" weight="duotone" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-planara-dark">Newport Marine</p>
                    <p className="text-[10px] text-planara-muted">Your certified Yamaha dealer</p>
                  </div>
                </div>
                <Phone className="w-4 h-4 text-planara-blue" />
              </div>

              {/* Vessel card mini */}
              <div className="px-5 py-3.5 border-b border-planara-border pointer-events-none">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm font-semibold text-planara-dark">Reel Therapy</p>
                    <p className="text-[10px] text-planara-muted">2023 Grady-White Canyon 326</p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-planara-muted">
                    <MapPin className="w-3 h-3" />
                    Newport, RI
                  </div>
                </div>
                <div className="flex gap-3">
                  {[
                    { label: "Hours", value: "847" },
                    { label: "Oil", value: "58 psi" },
                    { label: "Coolant", value: "172°F" },
                    { label: "Battery", value: "12.4V" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1">
                      <span className="text-[10px] text-planara-muted/60">{item.label}</span>
                      <span className="text-[10px] font-medium text-planara-dark">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Query grid */}
              <div className="h-[140px] px-5 py-4 relative pointer-events-none">
                <p className="text-xs text-planara-muted mb-3">What can I help you with?</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {OWNER_QUERIES.map((q) => (
                    <span
                      key={q}
                      className="text-[10px] px-3 py-2 bg-planara-light border border-planara-border rounded-lg text-planara-muted"
                    >
                      {q}
                    </span>
                  ))}
                </div>
                {/* Gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
              </div>
            </div>

            {/* Card text */}
            <div className="mt-5">
              <h3 className="text-lg font-bold text-planara-dark mb-1.5">
                Owner Intelligence
              </h3>
              <p className="text-sm text-planara-muted leading-relaxed mb-3">
                For boat owners and dealers. Conversational, actionable,
                white-labeled for each dealership.
              </p>
              <Link
                href="/demo/owner"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-planara-blue hover:text-planara-blue/80 transition-colors"
              >
                Take the interactive tour
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
