import Link from "next/link";

const PRODUCT_LINKS = [
  { label: "Platform", href: "/platform" },
  { label: "See the demo", href: "https://demo.planara.com/demo", external: true },
  { label: "White paper", href: "/whitepaper" },
];

const VERTICAL_LINKS = [
  { label: "Marine", href: "/marine" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "HVAC", href: "/hvac" },
  { label: "Heavy & agricultural equipment", href: "/heavy-equipment" },
  { label: "Power generation", href: "/power-generation" },
];

const FOR_LINKS = [
  { label: "Service leaders", href: "/service-leaders" },
  { label: "Enterprise", href: "/enterprise" },
];

export function Footer() {
  return (
    <footer className="bg-planara-dark border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl py-16">
        {/* Top: brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.4fr_1fr_1fr] gap-8 md:gap-10 mb-14">
          {/* Brand block */}
          <div>
            <p className="text-base font-bold text-white mb-1">Planara</p>
            <p className="text-xs font-mono uppercase tracking-wider text-planara-teal/80 mb-4">
              Conduit
            </p>
            <p className="text-sm text-white/55 leading-relaxed max-w-xs">
              Technical Service Intelligence: cited, safety-validated answers
              for the people who service the equipment.
            </p>
          </div>

          {/* Product */}
          <FooterColumn title="Product" links={PRODUCT_LINKS} />

          {/* Verticals */}
          <FooterColumn title="Verticals" links={VERTICAL_LINKS} />

          {/* For */}
          <FooterColumn title="For" links={FOR_LINKS} />

          {/* Company */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-white/35 mb-4">
              Talk to us
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@planara.com"
                  className="text-sm text-white/70 hover:text-planara-teal transition-colors"
                >
                  hello@planara.com
                </a>
                <p className="text-[11px] text-white/35 mt-0.5">General inquiries</p>
              </li>
              <li>
                <a
                  href="mailto:pilots@planara.com"
                  className="text-sm text-white/70 hover:text-planara-teal transition-colors"
                >
                  pilots@planara.com
                </a>
                <p className="text-[11px] text-white/35 mt-0.5">Pilot applications</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/35">
            <p>&copy; {new Date().getFullYear()} Planara. All rights reserved.</p>
            <Link
              href="/privacy"
              className="hover:text-planara-teal transition-colors"
            >
              Privacy
            </Link>
          </div>
          <p className="text-xs font-mono text-white/30">
            Planara Conduit · Technical Service Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <p className="text-xs font-mono uppercase tracking-wider text-white/35 mb-4">
        {title}
      </p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            {l.external ? (
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/70 hover:text-planara-teal transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                href={l.href}
                className="text-sm text-white/70 hover:text-planara-teal transition-colors"
              >
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
