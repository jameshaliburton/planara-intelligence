import {
  ArrowRight,
  ChatText,
  Anchor,
  ChartLineUp,
  BookOpen,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const outcomes = [
  {
    audience: "Field technicians",
    headline: "Cited answers in seconds, not search trips.",
    body:
      "Specs, parts, procedures — pulled from your manuals, not invented. Every answer cites the page. Safety warnings come through verbatim.",
    example: "What oil does the F300 require? · 7.1 L YAMALUBE 4-M FC-W · cited",
    cta: { label: "Try the technician demo", href: "/demo/service" },
    Mock: TechnicianMock,
  },
  {
    audience: "Dealer service operations",
    headline: "Owner questions become service revenue.",
    body:
      "A dealer-branded surface answers owner questions in plain language and routes the relevant conversation back to the dealership for booking, parts, or follow-up.",
    example: "When is my next service due? · 153 hrs to next interval · book",
    cta: { label: "Try the owner demo", href: "/demo/owner" },
    Mock: OwnerMock,
  },
  {
    audience: "OEM product teams",
    headline: "See what your fleet is actually experiencing.",
    body:
      "Failure patterns, documentation gaps, recurring questions — by model, by region. The questions Conduit can't answer are the documentation you need to write.",
    example: "Top 10 unanswered questions · F300 · last 30 days",
    cta: null,
    Mock: OEMMock,
  },
];

export function Integration() {
  return (
    <section
      id="three-outcomes"
      className="py-16 md:py-22 bg-white border-b border-planara-border"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          Three outcomes
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
          Three audiences. One platform.
        </h2>
        <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
          The same Conduit deployment serves the technician on the bench, the
          owner at the dock, and the product team back at HQ — each with the
          surface that fits how they actually work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((o) => (
            <div
              key={o.audience}
              className="flex flex-col rounded-lg overflow-hidden border border-planara-border bg-white"
            >
              <o.Mock />
              <div className="px-5 py-5 flex flex-col flex-1">
                <p className="text-[10px] font-mono uppercase tracking-wider text-planara-muted/70 mb-2">
                  {o.audience}
                </p>
                <h3 className="text-base font-semibold text-planara-dark mb-2 leading-snug">
                  {o.headline}
                </h3>
                <p className="text-sm text-planara-muted leading-relaxed mb-4">
                  {o.body}
                </p>
                <p className="text-[11px] font-mono text-planara-muted/60 leading-relaxed mb-4 mt-auto">
                  {o.example}
                </p>
                {o.cta ? (
                  <Link
                    href={o.cta.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-planara-blue hover:text-planara-blue/80 transition-colors"
                  >
                    {o.cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="text-sm text-planara-muted/40 font-mono">
                    Backoffice surface
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* W5 will swap each Mock for the captured screenshot.
   Each mock is a faithful skeleton of the real surface so the page reads
   correctly even if the PNG is missing. */

function TechnicianMock() {
  return (
    <div className="bg-[#0B0E14] aspect-[4/3] relative overflow-hidden">
      <div className="px-4 pt-3 pb-2 border-b border-white/[0.06] flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-planara-teal/20 flex items-center justify-center">
          <BookOpen className="w-3 h-3 text-planara-teal" weight="duotone" />
        </div>
        <span className="text-[10px] font-semibold text-white/80">Conduit</span>
        <span className="text-[9px] font-mono text-white/30 ml-auto">F300 · 847 hrs</span>
      </div>
      <div className="px-4 py-3 space-y-2">
        <div className="ml-auto max-w-[75%] bg-planara-teal/10 border border-planara-teal/20 rounded-xl rounded-tr-sm px-3 py-1.5">
          <p className="text-[10px] text-white/85">What oil does the F300 require?</p>
        </div>
        <div className="bg-white/[0.03] border border-white/10 rounded-xl rounded-tl-sm px-3 py-2">
          <div className="space-y-0.5 mb-2">
            {[
              ["Type", "YAMALUBE 4-M FC-W"],
              ["Viscosity", "SAE 10W-30"],
              ["Capacity", "7.1L"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between text-[9px]">
                <span className="font-mono text-white/35">{k}</span>
                <span className="text-white/80 font-medium">{v}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 pt-1.5 border-t border-white/[0.06]">
            <BookOpen className="w-2.5 h-2.5 text-white/25" weight="duotone" />
            <span className="text-[8px] font-mono text-white/30">
              F300 OM · Lubrication · p.42
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0B0E14] to-transparent" />
    </div>
  );
}

function OwnerMock() {
  return (
    <div className="bg-white aspect-[4/3] relative overflow-hidden border-b border-planara-border">
      <div className="px-4 pt-3 pb-2 border-b border-planara-border flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-planara-navy flex items-center justify-center">
          <Anchor className="w-3 h-3 text-white" weight="duotone" />
        </div>
        <div>
          <p className="text-[10px] font-semibold text-planara-dark leading-tight">
            Newport Marine
          </p>
          <p className="text-[8px] text-planara-muted leading-tight">
            Your certified dealer
          </p>
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="mb-2">
          <p className="text-[10px] font-semibold text-planara-dark">Reel Therapy</p>
          <p className="text-[8px] text-planara-muted">
            2023 Grady-White Canyon 326
          </p>
        </div>
        <div className="grid grid-cols-2 gap-1">
          {[
            "When is my next service due?",
            "What does the warning light mean?",
            "How do I winterize?",
            "Book service",
          ].map((q) => (
            <span
              key={q}
              className="text-[9px] px-2 py-1.5 bg-planara-light border border-planara-border rounded-md text-planara-muted"
            >
              {q}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

function OEMMock() {
  return (
    <div className="bg-planara-dark aspect-[4/3] relative overflow-hidden">
      <div className="px-4 pt-3 pb-2 border-b border-white/[0.06] flex items-center gap-2">
        <ChartLineUp className="w-3.5 h-3.5 text-planara-teal" weight="duotone" />
        <span className="text-[10px] font-semibold text-white/80">
          Fleet analytics · F300
        </span>
        <span className="text-[9px] font-mono text-white/30 ml-auto">last 30d</span>
      </div>
      <div className="px-4 py-3">
        <p className="text-[9px] font-mono uppercase tracking-wider text-white/35 mb-2">
          Top unanswered questions
        </p>
        <div className="space-y-1.5">
          {[
            { q: "Idle hunting at warm start", count: 47 },
            { q: "Trim sensor calibration", count: 31 },
            { q: "ECU update procedure (2024)", count: 22 },
            { q: "Smart Craft pairing failure", count: 18 },
          ].map((row) => (
            <div
              key={row.q}
              className="flex items-center justify-between gap-2 px-2 py-1 bg-white/[0.02] border border-white/[0.06] rounded-sm"
            >
              <ChatText className="w-2.5 h-2.5 text-planara-teal/60 shrink-0" weight="duotone" />
              <span className="text-[9px] text-white/70 flex-1 truncate">
                {row.q}
              </span>
              <span className="text-[9px] font-mono text-white/40">
                {row.count}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-planara-dark to-transparent" />
    </div>
  );
}
