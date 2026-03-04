"use client";

import { useState } from "react";
import {
  Anchor,
  ArrowLeft,
  CalendarBlank,
  CaretRight,
  Clock,
  Gauge,
  Lightbulb,
  MapPin,
  ChatCircle,
  Phone,
  PaperPlaneTilt,
  ShoppingCart,
  Thermometer,
  BatteryMedium,
  Drop,
  BookOpen,
} from "@phosphor-icons/react";
import type { OwnerQueryResponse, OwnerAction } from "@/types";
import { cn } from "@/lib/utils";
import { useIntegrationToast } from "@/components/IntegrationToast";

const SUGGESTED_QUERIES = [
  "When is my next service due?",
  "What oil does my engine need?",
  "How do I winterize?",
  "What does the warning light mean?",
];

const VESSEL = {
  name: "Reel Therapy",
  model: "2023 Grady-White Canyon 326",
  engines: "Twin Yamaha F300CA",
  location: "Newport Shipyard, Newport, RI",
  hours: 847,
  oilPressure: 58,
  coolantTemp: 172,
  battery: 12.4,
  fuel: 68,
};

const DEALER = {
  name: "Newport Marine",
  phone: "(401) 555-0142",
  address: "1 Commercial Wharf, Newport, RI 02840",
  hours: "Mon-Fri 7:30 AM - 5:00 PM",
};

export function OwnerDemo({ standalone = false }: { standalone?: boolean }) {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<OwnerQueryResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const { showIntegrationToast } = useIntegrationToast();

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
      const res = await fetch("/api/owner/query", {
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
    <section id="owner-demo" className={standalone ? "min-h-screen bg-planara-light" : "bg-planara-light"}>
      {standalone ? (
        <div className="container mx-auto max-w-2xl px-6 pt-6 mb-2">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-planara-muted hover:text-planara-blue transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to overview
          </a>
        </div>
      ) : (
        <div className="bg-white border-b border-planara-border py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
              Product 2
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-3">
              Owner Intelligence
            </h2>
            <p className="text-lg text-planara-muted max-w-2xl leading-relaxed">
              For boat owners and their dealers. White-labeled, warm, premium.
              Every answer drives action — schedule service, order parts, call
              your dealer.
            </p>
          </div>
        </div>
      )}

      {/* Demo container */}
      <div className={standalone ? "py-4 px-6" : "py-8 px-6"}>
        <div className="container mx-auto max-w-2xl">
          {/* Dealer branded header */}
          <div className="bg-white rounded-t-lg border border-planara-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-planara-navy flex items-center justify-center">
                <Anchor className="w-5 h-5 text-white" weight="duotone" />
              </div>
              <div>
                <p className="text-sm font-semibold text-planara-dark">
                  {DEALER.name}
                </p>
                <p className="text-xs text-planara-muted">Your certified Yamaha dealer</p>
              </div>
            </div>
            {/* Integration stub: click-to-call */}
            <button
              onClick={() => showIntegrationToast("In production, this initiates a click-to-call via the dealer phone system")}
              className="flex items-center gap-1.5 text-sm text-planara-blue hover:text-planara-blue/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call</span>
            </button>
          </div>

          {/* Vessel card */}
          <VesselCard />

          {/* Chat area */}
          <div className="bg-white border-x border-planara-border">
            <div className="px-6 py-6">
              {/* Suggested queries (show when no response) */}
              {!response && !loading && (
                <div className="space-y-4 mb-6">
                  <p className="text-sm text-planara-muted">
                    What can I help you with?
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SUGGESTED_QUERIES.map((q) => (
                      <button
                        key={q}
                        onClick={() => handleQuery(q)}
                        className="text-left text-sm px-4 py-3 bg-planara-light border border-planara-border rounded-lg hover:border-planara-blue/40 hover:bg-blue-50/50 transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Loading */}
              {loading && (
                <div className="flex items-center gap-3 text-planara-muted text-sm py-8 justify-center">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-planara-blue/40 rounded-full animate-bounce [animation-delay:0ms]" />
                    <div className="w-2 h-2 bg-planara-blue/40 rounded-full animate-bounce [animation-delay:150ms]" />
                    <div className="w-2 h-2 bg-planara-blue/40 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}

              {/* Response */}
              {response && !loading && (
                <div className="space-y-5">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-planara-blue text-white text-sm px-4 py-2.5 rounded-2xl rounded-br-md max-w-[80%]">
                      {query}
                    </div>
                  </div>

                  {/* Bot response */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-planara-light border border-planara-border flex items-center justify-center shrink-0">
                      <ChatCircle
                        className="w-4 h-4 text-planara-muted"
                      />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="bg-planara-light border border-planara-border rounded-2xl rounded-tl-md px-4 py-3">
                        <p className="text-sm text-planara-dark leading-relaxed">
                          {response.text}
                        </p>
                      </div>

                      {/* Tip */}
                      {response.tip && (
                        <div className="flex items-start gap-2 px-4 py-3 bg-amber-50 border border-amber-200/50 rounded-lg">
                          <Lightbulb
                            className="w-4 h-4 text-amber-500 shrink-0 mt-0.5"
                            weight="duotone"
                          />
                          <p className="text-sm text-amber-800">
                            {response.tip}
                          </p>
                        </div>
                      )}

                      {/* Action button */}
                      {response.action && (
                        <ActionButton action={response.action} />
                      )}

                      {/* Citation */}
                      {response.citation && (
                        <p className="flex items-center gap-1.5 text-xs text-planara-muted">
                          <BookOpen className="w-3 h-3" weight="duotone" />
                          {response.citation.source} — {response.citation.section}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Try another query */}
                  <div className="pt-2 space-y-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleReset}
                        className="flex items-center gap-1.5 text-xs text-planara-muted hover:text-planara-blue transition-colors"
                      >
                        <ArrowLeft className="w-3 h-3" />
                        Back
                      </button>
                      <span className="text-xs text-planara-muted/40">or try:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {SUGGESTED_QUERIES.filter((q) => q !== query).map((q) => (
                        <button
                          key={q}
                          onClick={() => handleQuery(q)}
                          className="text-left text-xs px-3 py-1.5 bg-planara-light border border-planara-border rounded-full hover:border-planara-blue/40 transition-colors text-planara-muted"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="px-6 pb-4">
              <div className="relative">
                <input
                  type="text"
                  value={response ? "" : query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    if (response) setResponse(null);
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleQuery(query)}
                  placeholder="Ask about your boat..."
                  className="w-full bg-planara-light border border-planara-border rounded-full pl-5 pr-12 py-3 text-sm text-planara-dark placeholder:text-planara-muted/60 focus:outline-none focus:border-planara-blue/50 focus:ring-1 focus:ring-planara-blue/20"
                />
                <button
                  onClick={() => handleQuery(query)}
                  disabled={loading || !query.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-planara-blue disabled:opacity-30 hover:text-planara-blue/80 transition-colors"
                >
                  <PaperPlaneTilt className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Dealer card */}
          <DealerCard />

          {/* Powered by Planara */}
          <div className="bg-white rounded-b-lg border border-t-0 border-planara-border px-6 py-3 flex items-center justify-between">
            <p className="text-[11px] text-planara-muted/50">
              Demo — built from Yamaha F300 documentation
            </p>
            <p className="text-[11px] text-planara-muted/50">
              Powered by <span className="font-medium">Planara</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VesselCard() {
  const telemetryItems = [
    { icon: Clock, label: "Hours", value: `${VESSEL.hours}`, alert: VESSEL.hours > 800 },
    { icon: Gauge, label: "Oil", value: `${VESSEL.oilPressure} psi` },
    { icon: Thermometer, label: "Coolant", value: `${VESSEL.coolantTemp}°F` },
    { icon: BatteryMedium, label: "Battery", value: `${VESSEL.battery}V` },
    { icon: Drop, label: "Fuel", value: `${VESSEL.fuel}%` },
  ];

  return (
    <div className="bg-white border-x border-planara-border">
      <div className="px-6 py-5 border-b border-planara-border">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-planara-dark">
              {VESSEL.name}
            </h3>
            <p className="text-sm text-planara-muted">{VESSEL.model}</p>
            <p className="text-sm text-planara-muted">{VESSEL.engines}</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-planara-muted">
            <MapPin className="w-3.5 h-3.5" />
            {VESSEL.location}
          </div>
        </div>

        {/* Mini telemetry */}
        <div className="flex flex-wrap gap-4">
          {telemetryItems.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <item.icon
                className={cn(
                  "w-3.5 h-3.5",
                  item.alert ? "text-amber-500" : "text-planara-muted/50"
                )}
              />
              <span className="text-xs text-planara-muted">{item.label}</span>
              <span
                className={cn(
                  "text-xs font-medium",
                  item.alert ? "text-amber-600" : "text-planara-dark"
                )}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActionButton({ action }: { action: OwnerAction }) {
  const { showIntegrationToast } = useIntegrationToast();
  const icons: Record<string, typeof CalendarBlank> = {
    schedule: CalendarBlank,
    call: Phone,
    order: ShoppingCart,
    dealer: MapPin,
  };
  const Icon = icons[action.type] ?? CaretRight;

  const toastMessages: Record<string, string> = {
    schedule: "In production, this creates an appointment in your dealer scheduling system (CDK, Lightspeed, DealerSocket)",
    call: "In production, this initiates a click-to-call via the dealer phone system",
    order: "In production, this creates a parts order in your DMS (CDK, Lightspeed, DealerSocket)",
    dealer: "In production, this opens directions in the dealer locator",
  };

  return (
    <button
      className="flex items-center gap-2 px-4 py-2.5 bg-planara-blue text-white text-sm font-medium rounded-full hover:bg-planara-blue/90 transition-colors"
      onClick={() => showIntegrationToast(toastMessages[action.type] ?? `Integration point: ${action.endpoint}`)}
    >
      <Icon className="w-4 h-4" />
      {action.label}
    </button>
  );
}

function DealerCard() {
  const { showIntegrationToast } = useIntegrationToast();

  return (
    <div className="bg-white border-x border-planara-border border-b px-6 py-5">
      <div className="bg-planara-light border border-planara-border rounded-lg p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-planara-dark">
              {DEALER.name}
            </p>
            <p className="text-xs text-planara-muted mt-1">{DEALER.address}</p>
            <p className="text-xs text-planara-muted">{DEALER.hours}</p>
          </div>
          <div className="flex gap-2">
            {/* Integration stub: DMS directions */}
            <button
              onClick={() => showIntegrationToast("In production, this opens directions in the dealer locator")}
              className="p-2 text-planara-muted hover:text-planara-blue border border-planara-border rounded-lg transition-colors"
            >
              <MapPin className="w-4 h-4" />
            </button>
            {/* Integration stub: click-to-call */}
            <button
              onClick={() => showIntegrationToast("In production, this initiates a click-to-call via the dealer phone system")}
              className="p-2 text-planara-muted hover:text-planara-blue border border-planara-border rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
