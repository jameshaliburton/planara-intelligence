"use client";

import { useState } from "react";
import {
  ArrowRight,
  Plug,
  Server,
  Wrench,
  Store,
  BarChart3,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "service",
    label: "Service Operations",
    icon: Wrench,
    headline: "From question to work order in one interaction.",
    description:
      "Planara embeds intelligence directly into the technician workflow. No new tools to learn — it surfaces the right information inside the systems they already use.",
    flow: [
      { step: "Technician asks a question", detail: "Natural language query about a specific symptom, procedure, or spec" },
      { step: "Planara retrieves from docs + telemetry", detail: "RAG pipeline searches manuals, cross-references live engine data from Siren Marine" },
      { step: "Surfaces parts with live inventory", detail: "Relevant parts identified with real-time stock from your existing catalog system" },
      { step: "Creates work order in their existing DMS", detail: "Pre-populated work order pushed to CDK, Lightspeed, or DealerSocket — no re-keying" },
    ],
    integrations: ["CDK Global", "Lightspeed", "DealerSocket", "Siren Marine", "OEM Parts Catalogs"],
  },
  {
    id: "dealer",
    label: "Dealer Network",
    icon: Store,
    headline: "Every dealer interaction becomes a service opportunity.",
    description:
      "White-labeled owner portal that drives service revenue back to the dealer. Owners get answers, dealers get appointments.",
    flow: [
      { step: "Owner asks about their boat", detail: "Self-service portal with their vessel, their dealer, their service history" },
      { step: "Planara answers in plain language", detail: "Conversational responses sourced from manufacturer documentation — not generic AI" },
      { step: "Every answer includes a dealer CTA", detail: "Schedule service, order parts, call the dealer — branded for their specific dealership" },
      { step: "Dealer captures the revenue", detail: "Appointments, parts orders, and service requests flow directly into dealer DMS" },
    ],
    integrations: ["Dealer-branded portal", "DMS scheduling", "Parts ordering", "Customer CRM", "Service reminders"],
  },
  {
    id: "oem",
    label: "OEM Intelligence",
    icon: BarChart3,
    headline: "Turn service data into product intelligence.",
    description:
      "Aggregate query patterns across the fleet to identify what technicians and owners actually struggle with — then feed that back into product and documentation.",
    flow: [
      { step: "Fleet-wide failure pattern analysis", detail: "Identify recurring issues across models, years, and operating conditions" },
      { step: "Warranty claim validation", detail: "Cross-reference claims against documentation and telemetry to flag anomalies" },
      { step: "Documentation gap identification", detail: "Surface the questions your docs don't answer — the most valuable feedback loop" },
      { step: "Product improvement feedback", detail: "Structured data on what breaks, what confuses, and what works — by model and region" },
    ],
    integrations: ["Fleet telemetry", "Warranty systems", "Quality management", "Product engineering", "Technical writing"],
  },
];

export function Integration() {
  const [activeTab, setActiveTab] = useState("service");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="integration" className="py-24 md:py-32 bg-white border-b border-planara-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          Integration &amp; Technology
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
          Plugs into the systems you already use.
        </h2>
        <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
          Every CTA in the demos above maps to a real integration point.
          Planara connects to telemetry, dealer management, parts catalogs,
          and service operations out of the box.
        </p>

        {/* Seamless integration callout */}
        <div className="border border-planara-teal/20 rounded-sm p-6 bg-planara-teal/[0.03] mb-12">
          <div className="flex items-start gap-4">
            <Layers className="w-5 h-5 text-planara-teal shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <p className="text-base font-semibold text-planara-dark mb-1">
                Planara doesn&apos;t replace your existing software. It makes it intelligent.
              </p>
              <p className="text-sm text-planara-muted leading-relaxed">
                No new tools to learn. Planara embeds into dealer management systems,
                service tools, and customer portals your teams already use — adding an
                intelligence layer on top of existing workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-planara-border mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors",
                activeTab === tab.id
                  ? "border-planara-teal text-planara-dark"
                  : "border-transparent text-planara-muted hover:text-planara-dark"
              )}
            >
              <tab.icon className="w-4 h-4" strokeWidth={1.5} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Active tab content */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-planara-dark mb-2">
            {active.headline}
          </h3>
          <p className="text-base text-planara-muted leading-relaxed mb-8 max-w-2xl">
            {active.description}
          </p>

          {/* Workflow steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {active.flow.map((item, i) => (
              <div key={item.step} className="relative">
                <div className="border border-planara-border rounded-sm p-4 h-full">
                  <span className="text-xs font-mono text-planara-teal mb-2 block">
                    {i + 1}
                  </span>
                  <p className="text-sm font-semibold text-planara-dark mb-1">
                    {item.step}
                  </p>
                  <p className="text-xs text-planara-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                {i < active.flow.length - 1 && (
                  <ArrowRight
                    className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-planara-border z-10"
                    strokeWidth={1.5}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Connected systems */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-planara-muted/60 mr-2 self-center">
              Connects to
            </span>
            {active.integrations.map((name) => (
              <span
                key={name}
                className="text-xs font-mono px-2.5 py-1 bg-planara-light border border-planara-border rounded-sm text-planara-muted"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* RAG architecture footnote */}
        <div className="border-t border-planara-border pt-8">
          <div className="flex items-start gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <Plug className="w-4 h-4 text-planara-muted/40" strokeWidth={1.5} />
              <Server className="w-4 h-4 text-planara-muted/40" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-planara-muted/50 mb-1">
                Technical Architecture
              </p>
              <p className="text-sm text-planara-muted/70 leading-relaxed">
                Document parsing, chunking, and semantic embedding. Contextual
                retrieval with telemetry fusion. Citation-tracked responses with
                structured output for UI rendering. Built for manufacturer-scale
                documentation libraries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
