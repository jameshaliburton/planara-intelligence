import { Plug, Radio, Database, ShoppingCart, ClipboardList, Server } from "lucide-react";

const integrations = [
  {
    icon: Radio,
    name: "Siren Marine",
    category: "Telemetry",
    detail: "Real-time engine data, GPS, geofencing, environmental sensors",
  },
  {
    icon: Database,
    name: "Dealer Management Systems",
    category: "DMS",
    detail: "CDK, Lightspeed, DealerSocket — customer records, service history, scheduling",
  },
  {
    icon: ShoppingCart,
    name: "Parts Ordering",
    category: "Fulfillment",
    detail: "OEM and aftermarket catalogs, inventory lookup, dealer-direct ordering",
  },
  {
    icon: ClipboardList,
    name: "Work Orders",
    category: "Service Ops",
    detail: "Create, assign, and track service work orders from query context",
  },
];

export function Integration() {
  return (
    <section id="integration" className="py-24 md:py-32 bg-white border-b border-planara-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          Integration &amp; Technology
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
          Plugs into the systems you already use.
        </h2>
        <p className="text-lg text-planara-muted max-w-2xl mb-16 leading-relaxed">
          Every CTA in the demos above maps to a real integration point.
          Planara connects to telemetry, dealer management, parts catalogs,
          and service operations out of the box.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="flex gap-4 p-6 border border-planara-border rounded-sm"
            >
              <div className="w-10 h-10 bg-planara-light rounded-sm flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-planara-teal" strokeWidth={1.5} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-semibold text-planara-dark">{item.name}</p>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-planara-muted bg-planara-light px-1.5 py-0.5 rounded-sm">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-planara-muted leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RAG architecture note */}
        <div className="border border-planara-border rounded-sm p-6 bg-planara-light">
          <div className="flex items-start gap-4">
            <div className="flex items-center gap-2">
              <Plug className="w-5 h-5 text-planara-teal" strokeWidth={1.5} />
              <Server className="w-5 h-5 text-planara-teal" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-semibold text-planara-dark mb-1">
                RAG Pipeline Architecture
              </p>
              <p className="text-sm text-planara-muted leading-relaxed">
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
