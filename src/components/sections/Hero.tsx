import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

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
          Planara Intelligence Layer
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95] mb-8">
          Every repair
          <br />
          makes the
          <br />
          next one faster.
        </h1>

        <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-6">
          Planara sits between manufacturer documentation and service
          execution. It turns OEM knowledge into structured, cited,
          safety-checked intelligence — and learns from every repair
          across your service network.
        </p>

        <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed mb-12">
          The manufacturer publishes. The service network uses it.{" "}
          <span className="text-planara-teal font-semibold">
            The field intelligence flows back.
          </span>
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://demo.planara.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
          >
            See the demo
          </a>
          <a
            href="/platform"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
          >
            How it works
          </a>
          <a
            href="/whitepaper"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
          >
            White paper
          </a>
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
