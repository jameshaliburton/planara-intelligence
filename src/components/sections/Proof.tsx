import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { WhitePaperCTA } from "@/components/WhitePaperModal";

const stats = [
  { value: "1B+", label: "Users reached by products this team has shipped" },
  { value: "25+", label: "Fortune 100 clients across prior engagements" },
  { value: "Multiple", label: "Successful exits" },
];

const phases = [
  {
    phase: "Prototype",
    timeline: "1–2 weeks",
    detail:
      "Working prototype from your documentation. Ingest 2–3 manuals, configure one use case, demo with your data.",
  },
  {
    phase: "Pilot",
    timeline: "4–8 weeks",
    detail:
      "Production deployment with real users. Full library, telemetry where available, measured outcomes.",
  },
  {
    phase: "Platform",
    timeline: "Ongoing",
    detail:
      "Per-tenant SaaS. Multi-model support, dealer-branded surfaces, continuous improvement from technician corrections.",
  },
];

export function Proof() {
  return (
    <section id="proof" className="py-16 md:py-22 bg-planara-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          Proof
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          Built by people who&apos;ve shipped at scale.
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mb-16 leading-relaxed">
          Conduit is early. The team is not. We&apos;re in active conversations
          with marine OEMs and a global manufacturing operator.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-planara-teal pl-6">
              <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {s.value}
              </p>
              <p className="text-sm text-white/50 mt-2 leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Leadership experience — text line */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-wider text-white/30 mb-3">
            Team experience includes
          </p>
          <p className="text-base text-white/65 leading-relaxed">
            Ford · Airbus · Google · Apple · Uber · Disney · Goldman Sachs · Samsung
          </p>
        </div>

        {/* Engagement phases — single strip */}
        <div className="border-t border-white/[0.08] pt-12 mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-white/30 mb-6">
            How we engage
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
            {phases.map((p, i) => (
              <div key={p.phase}>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-xs font-mono text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-white">{p.phase}</h3>
                  <span className="text-xs text-planara-teal/70 font-mono ml-auto">
                    {p.timeline}
                  </span>
                </div>
                <p className="text-sm text-white/45 leading-relaxed pl-8">
                  {p.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* White paper CTA */}
        <div className="border-t border-white/[0.08] pt-12">
          <div className="flex items-start justify-between gap-8 flex-wrap">
            <div className="max-w-xl">
              <p className="text-xs font-mono uppercase tracking-wider text-white/30 mb-2">
                Read the thesis
              </p>
              <p className="text-base text-white/70 leading-relaxed">
                The white paper covers the structural problem, why it took until
                now to be solvable, and what changes when authoritative
                documentation becomes queryable infrastructure.
              </p>
            </div>
            <WhitePaperCTA variant="dark" />
          </div>
        </div>

        <div className="mt-12 flex items-center gap-2 text-sm text-white/40">
          <ArrowRight className="w-4 h-4 text-planara-teal/60" />
          <a
            href="mailto:hello@planara.com"
            className="hover:text-white transition-colors"
          >
            hello@planara.com
          </a>
        </div>
      </div>
    </section>
  );
}
