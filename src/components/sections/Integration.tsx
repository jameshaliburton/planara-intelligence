import { Wrench, Store, BarChart3 } from "lucide-react";

const columns = [
  {
    icon: Wrench,
    label: "Service Ops",
    headline: "Instant answers backed by your documentation.",
    description:
      "Technicians get structured responses — safety warnings, spec tables, parts with SKUs, step-by-step procedures — all cross-referenced with live telemetry.",
  },
  {
    icon: Store,
    label: "Dealer Network",
    headline: "Owner questions become service revenue.",
    description:
      "A branded self-service portal turns owner questions into service appointments and parts orders. New revenue channel, zero additional staff.",
  },
  {
    icon: BarChart3,
    label: "OEM Intelligence",
    headline: "Fleet-wide intelligence for product teams.",
    description:
      "Failure patterns, documentation gaps, warranty validation — intelligence that feeds back into product development across the fleet.",
  },
];

export function Integration() {
  return (
    <section id="integration" className="py-24 md:py-32 bg-white border-b border-planara-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          What It Delivers
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
          Intelligence for every role in your ecosystem.
        </h2>
        <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
          One platform serves technicians, dealers, and OEM product teams —
          each with tools designed for how they actually work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((col) => (
            <div key={col.label}>
              <col.icon className="w-5 h-5 text-planara-teal mb-3" strokeWidth={1.5} />
              <p className="text-xs font-mono uppercase tracking-wider text-planara-muted mb-2">
                {col.label}
              </p>
              <h3 className="text-base font-bold text-planara-dark mb-2">
                {col.headline}
              </h3>
              <p className="text-sm text-planara-muted leading-relaxed">
                {col.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
