"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function StickyHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-planara-dark/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="container mx-auto max-w-5xl px-6 py-3 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-white">
            Planara
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="/PLANARA_manufacturing_intelligence_whitepaper.pdf"
              download
              className="hidden sm:inline text-xs text-white/40 hover:text-planara-teal transition-colors"
            >
              Download PDF
            </a>
            <Link
              href="/"
              className="text-xs font-mono text-white/40 hover:text-planara-teal transition-colors"
            >
              Back to overview
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
