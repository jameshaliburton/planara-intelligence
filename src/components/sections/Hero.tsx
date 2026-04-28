import { ArrowDown, ChatText, BookOpen, ShieldWarning } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const VERTICALS = [
  { label: "Marine", href: "/marine" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "HVAC", href: "/hvac" },
  { label: "Heavy & agricultural equipment", href: "/heavy-equipment" },
  { label: "Power generation", href: "/power-generation" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-planara-dark overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-6 py-24 md:py-32 max-w-6xl">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-8">
              Planara Conduit
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[0.95] mb-8">
              Technical
              <br />
              Service
              <br />
              Intelligence.
            </h1>

            <p className="text-xl text-white/70 max-w-xl leading-relaxed mb-10">
              Planara Conduit turns manufacturer manuals, standards, and service
              bulletins into cited, safety-validated answers for the people who
              service the equipment.
            </p>

            <div className="mb-10">
              <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3">
                Built for
              </p>
              <div className="flex flex-wrap gap-2">
                {VERTICALS.map((v) => (
                  <Link
                    key={v.label}
                    href={v.href}
                    className="text-sm font-medium px-3.5 py-2 border border-white/15 rounded-sm text-white/80 hover:border-planara-teal/60 hover:text-white hover:bg-white/[0.04] transition-colors"
                  >
                    {v.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://demo.planara.com/demo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
              >
                See the demo
              </a>
              <Link
                href="#platform"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
              >
                How it works
              </Link>
            </div>
          </div>

          {/* Right: iPad screenshot frame.
              W5 will swap this for a real PNG captured from app.planara.com.
              The mock here is a faithful skeleton of the technician chat. */}
          <HeroScreenshot />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        aria-hidden="true"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}

function HeroScreenshot() {
  return (
    <div className="relative mx-auto w-full max-w-[360px] lg:max-w-none lg:w-full">
      {/* iPad portrait frame */}
      <div className="relative aspect-[834/1194] rounded-[28px] border border-white/15 bg-[#0B0E14] shadow-[0_30px_120px_-30px_rgba(67,206,214,0.25)] overflow-hidden">
        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 px-6 pt-3 pb-2 flex items-center justify-between text-[10px] font-mono text-white/40">
          <span>9:41</span>
          <span>app.planara.com</span>
        </div>

        {/* Header */}
        <div className="absolute top-9 left-0 right-0 px-5 py-3 border-b border-white/[0.06] flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-planara-teal/20 flex items-center justify-center">
            <BookOpen className="w-3.5 h-3.5 text-planara-teal" weight="duotone" />
          </div>
          <span className="text-xs font-semibold text-white/80">Conduit</span>
          <span className="text-[10px] font-mono text-white/30 ml-auto">F300 · 847 hrs</span>
        </div>

        {/* Question bubble */}
        <div className="absolute top-24 left-5 right-5">
          <div className="ml-auto max-w-[80%] bg-planara-teal/10 border border-planara-teal/20 rounded-2xl rounded-tr-sm px-4 py-2.5">
            <div className="flex items-start gap-1.5">
              <ChatText className="w-3 h-3 text-planara-teal/70 shrink-0 mt-1" weight="duotone" />
              <p className="text-xs text-white/85 leading-relaxed">
                What oil does the F300 require?
              </p>
            </div>
          </div>
        </div>

        {/* Answer card */}
        <div className="absolute top-44 left-5 right-5">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl rounded-tl-sm overflow-hidden">
            {/* Spec table */}
            <div className="px-4 pt-4 pb-3">
              <p className="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-2">
                Specifications
              </p>
              {[
                ["Type", "YAMALUBE 4-M FC-W"],
                ["Viscosity", "SAE 10W-30"],
                ["Capacity", "7.1L"],
                ["Filter", "69J-13440-04"],
                ["Interval", "100 hrs · annually"],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex items-center justify-between text-[11px] py-1 ${
                    i % 2 === 0 ? "bg-white/[0.015]" : ""
                  } px-2 -mx-2 rounded-sm`}
                >
                  <span className="font-mono text-white/40">{k}</span>
                  <span className="text-white/85 font-medium">{v}</span>
                </div>
              ))}
            </div>

            {/* Safety warning */}
            <div className="px-4 pb-4">
              <div className="flex items-start gap-2 p-2.5 border border-amber-400/25 bg-amber-400/[0.04] rounded-sm">
                <ShieldWarning
                  className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5"
                  weight="duotone"
                />
                <p className="text-[10px] text-white/65 leading-relaxed">
                  Run engine to operating temperature before draining. Hot oil
                  flows more completely. Use caution — surfaces will be hot.
                </p>
              </div>
            </div>

            {/* Citation */}
            <div className="border-t border-white/[0.06] px-4 py-2.5 flex items-center gap-1.5">
              <BookOpen className="w-3 h-3 text-white/25" weight="duotone" />
              <span className="text-[10px] font-mono text-white/35">
                F300 Owner&apos;s Manual · Lubrication · p.42
              </span>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B0E14] to-transparent" />

        {/* Input bar */}
        <div className="absolute bottom-6 left-5 right-5">
          <div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-full px-4 py-2.5">
            <ChatText className="w-3.5 h-3.5 text-white/30" weight="duotone" />
            <span className="text-[11px] font-mono text-white/30">
              Ask about the F300…
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
