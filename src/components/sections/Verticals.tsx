import { Anchor, Factory, Wind, Tractor, Lightning } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const verticals = [
  {
    slug: "marine",
    label: "Marine",
    icon: Anchor,
    blurb:
      "Outboard, sterndrive, and diesel propulsion. ABYC standards. Dealer-network distribution.",
    href: "/marine",
    status: "Reference deployment",
  },
  {
    slug: "manufacturing",
    label: "Manufacturing",
    icon: Factory,
    blurb:
      "Production line uptime, OSHA 1910, lockout-tagout, shift-handoff knowledge loss.",
    href: "/manufacturing",
    status: "Design partner",
  },
  {
    slug: "hvac",
    label: "HVAC",
    icon: Wind,
    blurb:
      "EPA 608, ASHRAE, ASE. Dispatch-based field workforces, commercial and residential.",
    href: "/hvac",
    status: "Design partner",
  },
  {
    slug: "heavy-equipment",
    label: "Heavy & agricultural equipment",
    icon: Tractor,
    blurb:
      "Hours-based service intervals, multi-engine vehicles, dealer-network OEMs.",
    href: "/heavy-equipment",
    status: "Design partner",
  },
  {
    slug: "power-generation",
    label: "Power generation",
    icon: Lightning,
    blurb:
      "Genset maintenance, runtime-based intervals, distributed service networks.",
    href: "/power-generation",
    status: "Design partner",
  },
];

export function Verticals() {
  return (
    <section id="verticals" className="py-16 md:py-22 bg-white border-b border-planara-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          Verticals
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
          One platform. Configured per vertical.
        </h2>
        <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
          Marine is our reference deployment. The other four are open to design
          partners — early pricing, custom configuration, named on the platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {verticals.map((v) => (
            <Link
              key={v.slug}
              href={v.href}
              className="group border border-planara-border rounded-sm p-6 hover:border-planara-teal/40 hover:bg-planara-light transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <v.icon
                  className="w-7 h-7 text-planara-teal"
                  weight="duotone"
                />
                <span className="text-[10px] font-mono uppercase tracking-wider text-planara-muted/60">
                  {v.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-planara-dark mb-2 group-hover:text-planara-teal transition-colors">
                {v.label}
              </h3>
              <p className="text-sm text-planara-muted leading-relaxed">
                {v.blurb}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
