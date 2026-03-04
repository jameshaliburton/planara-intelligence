"use client";

import { useEffect, useState, useCallback } from "react";
import { List, X } from "@phosphor-icons/react";

const sections = [
  { id: "section-1", label: "Executive Summary" },
  { id: "section-2", label: "Where Value Leaks" },
  { id: "section-3", label: "Connected Equipment" },
  { id: "section-4", label: "Aftermarket Opportunity" },
  { id: "section-5", label: "Purpose-Built AI" },
  { id: "section-6", label: "Two Paths" },
  { id: "section-7", label: "Getting Started" },
  { id: "section-8", label: "Sources" },
];

export function TableOfContents() {
  const [activeId, setActiveId] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      const offset = window.scrollY + 200;
      let current = "";
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) {
          current = id;
        }
      }
      setActiveId(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const nav = (
    <nav>
      <p className="text-[10px] font-mono uppercase tracking-wider text-white/20 mb-3">
        Contents
      </p>
      <div className="space-y-0.5">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`block w-full text-left text-[13px] py-1.5 px-3 rounded transition-colors ${
              activeId === id
                ? "text-planara-teal bg-planara-teal/[0.06]"
                : "text-white/30 hover:text-white/50"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-52 shrink-0">
        <div className="sticky top-24">{nav}</div>
      </aside>

      {/* Mobile toggle */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-11 h-11 bg-planara-dark border border-white/10 rounded-full flex items-center justify-center shadow-2xl"
          aria-label="Table of contents"
        >
          {mobileOpen ? (
            <X className="w-4 h-4 text-white/60" />
          ) : (
            <List className="w-4 h-4 text-white/60" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40"
          onClick={() => setMobileOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="absolute bottom-20 right-6 w-56 bg-planara-dark border border-white/10 rounded-lg p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {nav}
          </div>
        </div>
      )}
    </>
  );
}
