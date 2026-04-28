"use client";

import { useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const PRIMARY_LINKS = [
  { label: "Platform", href: "/platform" },
  { label: "Service leaders", href: "/service-leaders" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "White paper", href: "/whitepaper" },
];

const VERTICAL_LINKS = [
  { label: "Marine", href: "/marine" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "HVAC", href: "/hvac" },
  { label: "Heavy & agricultural", href: "/heavy-equipment" },
  { label: "Power generation", href: "/power-generation" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-planara-dark/90 backdrop-blur border-b border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-6xl h-14 flex items-center gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          onClick={() => setOpen(false)}
        >
          <span className="text-sm font-bold tracking-tight text-white">
            Planara
          </span>
          <span className="hidden sm:inline text-[11px] font-mono uppercase tracking-wider text-planara-teal/80">
            Conduit
          </span>
        </Link>

        {/* Desktop primary links */}
        <nav className="hidden md:flex items-center gap-1 ml-2">
          {PRIMARY_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white px-3 py-2 rounded-sm hover:bg-white/[0.04] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <VerticalsDropdown />
        </nav>

        {/* Right CTA (desktop) */}
        <div className="ml-auto hidden md:flex items-center gap-3">
          <Link
            href="mailto:hello@planara.com"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            hello@planara.com
          </Link>
          <Link
            href="/demo/service"
            className="text-sm font-semibold px-4 py-2 bg-planara-teal text-planara-dark rounded-sm hover:bg-planara-teal/90 transition-colors"
          >
            See the demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden ml-auto text-white/80 hover:text-white p-2"
        >
          {open ? <X className="w-5 h-5" /> : <List className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden border-t border-white/[0.06] bg-planara-dark overflow-hidden transition-[max-height,opacity] duration-200 ease-out",
          open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-6 max-w-6xl py-4 flex flex-col gap-1">
          {PRIMARY_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/80 py-2"
            >
              {l.label}
            </Link>
          ))}
          <p className="text-[10px] font-mono uppercase tracking-wider text-white/30 mt-4 mb-1">
            Verticals
          </p>
          {VERTICAL_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/70 py-1.5"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/demo/service"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center px-4 py-2.5 bg-planara-teal text-planara-dark text-sm font-semibold rounded-sm"
          >
            See the demo
          </Link>
        </div>
      </div>
    </header>
  );
}

function VerticalsDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="text-sm text-white/70 hover:text-white px-3 py-2 rounded-sm hover:bg-white/[0.04] transition-colors"
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        Verticals
      </button>
      <div
        className={cn(
          "absolute left-0 top-full pt-2 transition-opacity duration-150",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="min-w-[220px] bg-planara-dark border border-white/10 rounded-sm py-2 shadow-xl">
          {VERTICAL_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-4 py-2 text-sm text-white/75 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
