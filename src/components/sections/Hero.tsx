import { ArrowDown } from "lucide-react";

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

      <div className="relative container mx-auto px-6 py-32 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-8">
          Planara Manufacturing Intelligence
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95] mb-8">
          Nobody reads
          <br />
          the manual.
        </h1>

        <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-6">
          Equipment manufacturers produce thousands of pages of technical
          documentation that service technicians can&apos;t find, dealers
          can&apos;t use, and owners never see.
        </p>

        <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed mb-12">
          That&apos;s a{" "}
          <span className="text-planara-teal font-semibold">
            $100 billion problem
          </span>{" "}
          in equipment downtime, wasted labor, and lost revenue.
          <br />
          Planara solves it.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#platform"
            className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
          >
            See how it works
          </a>
          <a
            href="/PLANARA_manufacturing_intelligence_whitepaper.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
          >
            Read the white paper
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        aria-hidden="true"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" strokeWidth={1.5} />
      </div>
    </section>
  );
}
