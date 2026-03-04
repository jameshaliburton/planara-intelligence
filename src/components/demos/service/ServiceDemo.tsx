"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  ChevronRight,
  ClipboardList,
  Gauge,
  Package,
  RotateCcw,
  Search,
  Send,
  ShieldAlert,
  Thermometer,
  Droplets,
  Battery,
  Fuel,
  Clock,
  CheckCircle,
  Circle,
} from "lucide-react";
import type {
  ServiceQueryResponse,
  ServiceContentBlock,
  SafetyWarning,
  Citation,
  SpecRow,
  ProcedureStep,
  PartInfo,
  ServiceChecklistItem,
} from "@/types";
import { cn } from "@/lib/utils";

const SUGGESTED_QUERIES = [
  "What oil does the F300 require?",
  "Engine overheating at low RPM",
  "Winterization procedure",
  "When is my next service due?",
];

const TELEMETRY = {
  engineHours: 847,
  oilPressure: 58,
  coolantTemp: 172,
  batteryVoltage: 12.4,
  fuelLevel: 68,
};

export function ServiceDemo() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<ServiceQueryResponse | null>(null);
  const [loading, setLoading] = useState(false);

  function handleReset() {
    setQuery("");
    setResponse(null);
  }

  async function handleQuery(q: string) {
    const searchQuery = q || query;
    if (!searchQuery.trim()) return;

    setQuery(searchQuery);
    setLoading(true);
    try {
      const res = await fetch("/api/service/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: searchQuery, vesselId: "vessel-001" }),
      });
      const data = await res.json();
      setResponse(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="service-demo" className="py-16 md:py-24 bg-planara-navy">
      {/* Section intro */}
      <div className="container mx-auto max-w-5xl px-6 mb-10">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          Product 1
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          Service Intelligence
        </h2>
        <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
          For certified service technicians. Dense, procedural,
          information-forward. Every response is backed by manual citations
          and cross-referenced with live telemetry.
        </p>
      </div>

      {/* App chrome frame */}
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-lg overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
          {/* Title bar */}
          <div className="bg-[#1A1E27] border-b border-white/[0.06] px-4 py-2.5 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <span className="text-[11px] font-mono text-white/30">
                Planara Service Intelligence v1.0 — Yamaha F300CA
              </span>
            </div>
            <div className="w-[52px]" />
          </div>

          {/* Telemetry bar — more prominent */}
          <TelemetryBar />

          {/* Main demo area */}
          <div className="bg-[#0B0E14] min-h-[520px] px-6 md:px-10 py-8">
            {/* Search input */}
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-6">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
                  strokeWidth={1.5}
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleQuery(query)}
                  placeholder="Ask about the Yamaha F300..."
                  className="w-full bg-white/[0.04] border border-white/10 rounded-sm pl-11 pr-12 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-planara-teal/50 font-mono"
                />
                <button
                  onClick={() => handleQuery(query)}
                  disabled={loading || !query.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white/30 hover:text-planara-teal disabled:opacity-30 transition-colors"
                >
                  <Send className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>

              {/* Suggested queries — always visible */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {response && (
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 bg-white/[0.06] border border-white/15 rounded-sm text-white/60 hover:text-planara-teal hover:border-planara-teal/30 transition-colors"
                  >
                    <ArrowLeft className="w-3 h-3" strokeWidth={1.5} />
                    Reset
                  </button>
                )}
                {SUGGESTED_QUERIES.filter((q) => q !== query).map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuery(q)}
                    className="text-xs font-mono px-3 py-1.5 bg-white/[0.04] border border-white/10 rounded-sm text-white/50 hover:text-planara-teal hover:border-planara-teal/30 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Loading */}
              {loading && (
                <div className="flex items-center gap-3 text-white/40 text-sm font-mono py-12">
                  <div className="w-4 h-4 border-2 border-planara-teal/30 border-t-planara-teal rounded-full animate-spin" />
                  Querying documentation...
                </div>
              )}

              {/* Response */}
              {response && !loading && (
                <div className="space-y-6">
                  {/* Safety warning */}
                  {response.safety && <SafetyBanner warning={response.safety} />}

                  {/* Content blocks */}
                  {response.content.map((block, i) => (
                    <ContentBlock key={i} block={block} />
                  ))}

                  {/* Citations */}
                  {response.citations.length > 0 && (
                    <CitationBar citations={response.citations} />
                  )}

                  {/* Bottom reset */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={handleReset}
                      className="flex items-center gap-1.5 text-xs font-mono text-white/30 hover:text-planara-teal transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" strokeWidth={1.5} />
                      Try another query
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Status bar */}
          <div className="bg-[#1A1E27] border-t border-white/[0.06] px-4 py-1.5 flex items-center justify-between">
            <span className="text-[10px] font-mono text-white/20">
              Demo — built from Yamaha F300 documentation (LIT-18626-12-51)
            </span>
            <span className="text-[10px] font-mono text-white/20">
              Vessel: Reel Therapy — 2023 Canyon 326
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TelemetryBar() {
  const items = [
    {
      icon: Clock,
      label: "Engine Hours",
      value: `${TELEMETRY.engineHours}`,
      unit: "hrs",
      alert: TELEMETRY.engineHours > 800,
    },
    {
      icon: Gauge,
      label: "Oil Pressure",
      value: `${TELEMETRY.oilPressure}`,
      unit: "psi",
      alert: false,
    },
    {
      icon: Thermometer,
      label: "Coolant",
      value: `${TELEMETRY.coolantTemp}`,
      unit: "°F",
      alert: false,
    },
    {
      icon: Battery,
      label: "Battery",
      value: `${TELEMETRY.batteryVoltage}`,
      unit: "V",
      alert: TELEMETRY.batteryVoltage < 12.2,
    },
    {
      icon: Fuel,
      label: "Fuel",
      value: `${TELEMETRY.fuelLevel}`,
      unit: "%",
      alert: false,
    },
  ];

  return (
    <div className="bg-[#0D1117] border-b border-white/[0.06] px-6 md:px-10 py-3.5">
      <div className="flex items-center gap-3 overflow-x-auto">
        <div className="flex items-center gap-2 shrink-0 mr-2">
          <Droplets
            className="w-4 h-4 text-planara-teal"
            strokeWidth={1.5}
          />
          <span className="text-[11px] font-mono uppercase tracking-wider text-planara-teal/70">
            Live Telemetry
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <div className="w-px h-5 bg-white/10 shrink-0" />
        <div className="flex items-center gap-6">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 shrink-0">
              <item.icon
                className={cn(
                  "w-4 h-4",
                  item.alert ? "text-safety-warning" : "text-white/30"
                )}
                strokeWidth={1.5}
              />
              <span className="text-[11px] font-mono text-white/40">
                {item.label}
              </span>
              <span
                className={cn(
                  "text-sm font-mono font-semibold",
                  item.alert ? "text-safety-warning" : "text-white/90"
                )}
              >
                {item.value}
                <span className="text-white/30 ml-0.5 font-normal">{item.unit}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SafetyBanner({ warning }: { warning: SafetyWarning }) {
  const colors = {
    caution: "border-safety-caution/40 bg-safety-caution/5 text-safety-caution",
    warning: "border-safety-warning/40 bg-safety-warning/5 text-safety-warning",
    danger: "border-safety-danger/40 bg-safety-danger/5 text-safety-danger",
  };

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 border rounded-sm",
        colors[warning.level]
      )}
    >
      <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" strokeWidth={1.5} />
      <div>
        <p className="text-xs font-mono uppercase tracking-wider mb-1">
          {warning.level}
        </p>
        <p className="text-sm text-white/80 leading-relaxed">
          {warning.message}
        </p>
      </div>
    </div>
  );
}

function ContentBlock({ block }: { block: ServiceContentBlock }) {
  switch (block.type) {
    case "text":
      return (
        <p className="text-sm text-white/70 leading-relaxed">{block.text}</p>
      );

    case "spec-table":
      return <SpecTable specs={block.specs ?? []} />;

    case "procedure":
      return <ProcedureList steps={block.steps ?? []} />;

    case "diagram":
      return (
        <div className="border border-white/10 rounded-sm p-6 bg-white/[0.02]">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen
              className="w-4 h-4 text-planara-teal"
              strokeWidth={1.5}
            />
            <span className="text-xs font-mono uppercase tracking-wider text-white/40">
              System Diagram
            </span>
          </div>
          {/* Diagram placeholder — in production rendered from SVG */}
          <DiagramPlaceholder type={block.diagram?.type ?? "cooling"} label={block.diagram?.label ?? ""} />
        </div>
      );

    case "parts":
      return <PartsCard parts={block.parts ?? []} />;

    case "work-order-cta":
      return (
        <button
          className="flex items-center gap-2 px-5 py-3 bg-planara-blue text-white text-sm font-medium rounded-sm hover:bg-planara-blue/90 transition-colors w-full md:w-auto"
          onClick={() => {
            /* Integration stub: work order creation */
          }}
        >
          <ClipboardList className="w-4 h-4" strokeWidth={1.5} />
          {block.text}
          <ChevronRight className="w-4 h-4 ml-auto" strokeWidth={1.5} />
        </button>
      );

    case "service-checklist":
      return <ServiceChecklist items={block.checklist ?? []} />;

    default:
      return null;
  }
}

function SpecTable({ specs }: { specs: SpecRow[] }) {
  return (
    <div className="border border-white/10 rounded-sm overflow-hidden">
      <table className="w-full text-sm">
        <tbody>
          {specs.map((row, i) => (
            <tr
              key={row.label}
              className={i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}
            >
              <td className="px-4 py-2.5 font-mono text-white/40 text-xs uppercase tracking-wider">
                {row.label}
              </td>
              <td className="px-4 py-2.5 text-white/80 font-medium text-right">
                {row.value}
                {row.unit && (
                  <span className="text-white/40 ml-1">{row.unit}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProcedureList({ steps }: { steps: ProcedureStep[] }) {
  return (
    <div className="space-y-0">
      <div className="flex items-center gap-2 mb-3">
        <ClipboardList
          className="w-4 h-4 text-planara-teal"
          strokeWidth={1.5}
        />
        <span className="text-xs font-mono uppercase tracking-wider text-white/40">
          Procedure
        </span>
      </div>
      <div className="border border-white/10 rounded-sm divide-y divide-white/5">
        {steps.map((step) => (
          <div key={step.step} className="px-4 py-3">
            <div className="flex gap-3">
              <span className="text-xs font-mono text-planara-teal shrink-0 mt-0.5 w-5 text-right">
                {step.step}.
              </span>
              <div className="flex-1">
                <p className="text-sm text-white/70 leading-relaxed">
                  {step.instruction}
                </p>
                {step.warning && (
                  <p className="flex items-start gap-2 mt-2 text-xs text-safety-caution/80">
                    <AlertTriangle
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    {step.warning}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PartsCard({ parts }: { parts: PartInfo[] }) {
  return (
    <div className="border border-white/10 rounded-sm">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <Package className="w-4 h-4 text-planara-teal" strokeWidth={1.5} />
        <span className="text-xs font-mono uppercase tracking-wider text-white/40">
          Parts
        </span>
      </div>
      <div className="divide-y divide-white/5">
        {parts.map((part) => (
          <div
            key={part.partNumber}
            className="flex items-center justify-between px-4 py-3"
          >
            <div>
              <p className="text-sm text-white/70">{part.name}</p>
              <p className="text-xs font-mono text-white/30 mt-0.5">
                {part.partNumber}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-white/60">
                ${part.price.toFixed(2)}
              </span>
              <span
                className={cn(
                  "text-xs font-mono px-2 py-0.5 rounded-sm",
                  part.inStock
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-red-500/10 text-red-400"
                )}
              >
                {part.inStock ? "In Stock" : "Backorder"}
              </span>
              {/* Integration stub: parts ordering */}
              <button className="text-xs font-mono text-planara-teal hover:text-planara-teal/80 transition-colors">
                Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceChecklist({ items }: { items: ServiceChecklistItem[] }) {
  return (
    <div className="border border-white/10 rounded-sm">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <ClipboardList
          className="w-4 h-4 text-planara-teal"
          strokeWidth={1.5}
        />
        <span className="text-xs font-mono uppercase tracking-wider text-white/40">
          Service Checklist — 1,000 Hour Interval
        </span>
      </div>
      <div className="divide-y divide-white/5">
        {items.map((item) => (
          <div
            key={item.item}
            className="flex items-center justify-between px-4 py-3"
          >
            <div className="flex items-center gap-3">
              {item.due ? (
                <Circle
                  className="w-4 h-4 text-safety-warning"
                  strokeWidth={1.5}
                />
              ) : (
                <CheckCircle
                  className="w-4 h-4 text-emerald-500/60"
                  strokeWidth={1.5}
                />
              )}
              <div>
                <p
                  className={cn(
                    "text-sm",
                    item.due ? "text-white/80" : "text-white/50"
                  )}
                >
                  {item.item}
                </p>
                <p className="text-xs font-mono text-white/30 mt-0.5">
                  {item.interval}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={cn(
                  "text-xs font-mono",
                  item.due ? "text-safety-warning" : "text-white/30"
                )}
              >
                {item.due ? "Due" : "Current"}
              </p>
              {item.lastCompleted && (
                <p className="text-xs font-mono text-white/20 mt-0.5">
                  {item.lastCompleted}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiagramPlaceholder({ type, label }: { type: string; label: string }) {
  const nodes: Record<string, { items: string[]; color: string }> = {
    cooling: {
      items: [
        "Water Intake",
        "Water Pump",
        "Thermostat (143°F)",
        "Engine Block",
        "Cylinder Head",
        "Exhaust Relief",
        "Tell-Tale Outlet",
      ],
      color: "text-blue-400",
    },
    lubrication: {
      items: [
        "Oil Sump (7.1L)",
        "Oil Pump",
        "Oil Filter",
        "Main Bearings",
        "Camshaft",
        "Piston / Rings",
        "Oil Cooler",
        "Return to Sump",
      ],
      color: "text-amber-400",
    },
    electrical: {
      items: [
        "Battery (12V)",
        "Starter Motor",
        "Charging Coil",
        "ECU",
        "Injectors",
        "Ignition Coils",
        "Sensors",
      ],
      color: "text-yellow-400",
    },
    fuel: {
      items: [
        "Fuel Tank",
        "Fuel Pump",
        "Filter / Separator",
        "High Pressure Pump",
        "Fuel Rail",
        "Injectors",
        "Return Line",
      ],
      color: "text-emerald-400",
    },
  };

  const config = nodes[type] ?? nodes.cooling;

  return (
    <div>
      <p className="text-sm text-white/60 mb-4">{label}</p>
      <div className="flex flex-wrap gap-2 items-center">
        {config.items.map((item, i) => (
          <div key={item} className="flex items-center gap-2">
            <span
              className={cn(
                "text-xs font-mono px-2.5 py-1.5 bg-white/[0.04] border border-white/10 rounded-sm",
                config.color
              )}
            >
              {item}
            </span>
            {i < config.items.length - 1 && (
              <ChevronRight
                className="w-3 h-3 text-white/20"
                strokeWidth={1.5}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CitationBar({ citations }: { citations: Citation[] }) {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
      <BookOpen className="w-3.5 h-3.5 text-white/20" strokeWidth={1.5} />
      <span className="text-[11px] font-mono uppercase tracking-wider text-white/20">
        Sources
      </span>
      {citations.map((c, i) => (
        <span
          key={i}
          className="text-xs font-mono text-white/30 px-2 py-1 bg-white/[0.03] border border-white/5 rounded-sm"
        >
          {c.source} — {c.section}
          {c.page && `, p.${c.page}`}
        </span>
      ))}
    </div>
  );
}
