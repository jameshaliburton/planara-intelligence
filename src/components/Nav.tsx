"use client";

import { useState } from "react";
import { List, X, CaretDown } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/service-leaders", label: "Service Leaders" },
  { href: "/marine", label: "Marine" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/about", label: "About" },
];

const demoLinks = [
  { href: "https://demo.planara.com", label: "Live Product Demo", external: true },
  { href: "/demo/service", label: "Service Tour" },
  { href: "/demo/owner", label: "Owner Tour" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demosOpen, setDemosOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-planara-dark/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="text-sm font-semibold text-white tracking-tight">
            Planara
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  pathname === link.href
                    ? "text-white font-medium"
                    : "text-white/50 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Demos dropdown */}
            <div className="relative">
              <button
                onClick={() => setDemosOpen(!demosOpen)}
                onBlur={() => setTimeout(() => setDemosOpen(false), 150)}
                className={cn(
                  "flex items-center gap-1 text-sm transition-colors",
                  pathname.startsWith("/demo")
                    ? "text-white font-medium"
                    : "text-white/50 hover:text-white"
                )}
              >
                Demos
                <CaretDown
                  className={cn(
                    "w-3 h-3 transition-transform",
                    demosOpen && "rotate-180"
                  )}
                />
              </button>
              {demosOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 bg-planara-dark/95 backdrop-blur-md border border-white/10 rounded-sm shadow-xl">
                  {demoLinks.map((link) =>
                    link.external ? (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-planara-teal hover:bg-white/[0.04] transition-colors"
                        onClick={() => setDemosOpen(false)}
                      >
                        {link.label} ↗
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/[0.04] transition-colors"
                        onClick={() => setDemosOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              href="mailto:hello@planara.com"
              className="ml-2 px-4 py-1.5 bg-planara-teal text-planara-dark text-sm font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/60 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <List className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-planara-dark/95 backdrop-blur-md border-t border-white/[0.06]">
          <div className="container mx-auto max-w-5xl px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block py-2.5 text-sm transition-colors",
                  pathname === link.href
                    ? "text-white font-medium"
                    : "text-white/50 hover:text-white"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-white/[0.06] pt-2 mt-2">
              <p className="text-xs font-mono uppercase tracking-wider text-white/25 mb-2">
                Demos
              </p>
              {demoLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block py-2.5 text-sm text-planara-teal transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label} ↗
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2.5 text-sm text-white/50 hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
            <div className="pt-4">
              <a
                href="mailto:hello@planara.com"
                className="block w-full text-center px-4 py-2.5 bg-planara-teal text-planara-dark text-sm font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
