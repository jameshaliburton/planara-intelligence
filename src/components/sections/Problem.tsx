export function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-white border-b border-planara-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          The Problem
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-16 max-w-3xl">
          Billions in documentation. Zero intelligence.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Stat 1 */}
          <div className="border-l-2 border-planara-teal pl-6">
            <p className="text-5xl md:text-6xl font-bold text-planara-dark tracking-tight">
              72%
            </p>
            <p className="text-lg font-semibold text-planara-dark mt-2">
              of manufacturers have undocumented fixes
            </p>
            <p className="text-base text-planara-muted mt-1 leading-relaxed">
              masking true downtime causes across their service operations
            </p>
            <p className="text-xs text-planara-muted/60 mt-3 font-mono">
              HVI Manufacturing Survey, 2025
            </p>
          </div>

          {/* Stat 2 */}
          <div className="border-l-2 border-planara-teal pl-6">
            <p className="text-5xl md:text-6xl font-bold text-planara-dark tracking-tight">
              61%
            </p>
            <p className="text-lg font-semibold text-planara-dark mt-2">
              of a technician&apos;s day
            </p>
            <p className="text-base text-planara-muted mt-1 leading-relaxed">
              spent searching systems instead of performing maintenance
            </p>
            <p className="text-xs text-planara-muted/60 mt-3 font-mono">
              IFS / Reliabilityweb Study, 2024
            </p>
          </div>

          {/* Stat 3 — positioning statement */}
          <div className="border-l-2 border-planara-teal pl-6">
            <p className="text-5xl md:text-6xl font-bold text-planara-dark tracking-tight">
              $0
            </p>
            <p className="text-lg font-semibold text-planara-dark mt-2 leading-snug">
              Zero value extracted from connected equipment telemetry
            </p>
            <p className="text-base text-planara-muted mt-1 leading-relaxed">
              Manufacturers invest in connected equipment but capture none of
              that data as actionable service intelligence — today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
