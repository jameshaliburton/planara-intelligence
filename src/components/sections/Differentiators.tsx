import { ArrowsClockwise, ShieldCheck, Network, ChartLineUp } from "@phosphor-icons/react/dist/ssr";

const points = [
  {
    icon: Network,
    title: "One library, every dealer",
    body:
      "Conduit deploys at the OEM. Their dealer network — every dealer, every technician — answers from the same library. The manufacturer writes the manual once. Everyone downstream answers consistently.",
  },
  {
    icon: ArrowsClockwise,
    title: "Corrections improve the next answer",
    body:
      "Every correction a technician submits reviews, validates, and improves the next answer for the next technician — inside the same tenant. The platform learns from real repairs, not from a lab.",
  },
  {
    icon: ShieldCheck,
    title: "Cited or it doesn't ship",
    body:
      "Every spec, every torque value, every step is sourced from a retrieved page. If the manual doesn't say it, Conduit doesn't either. Citations are tappable to the original page image, and confidence is scored on every answer.",
  },
  {
    icon: ChartLineUp,
    title: "See what your dealers are actually asking",
    body:
      "What questions are dealers asking? Which procedures are taking longest? Where do answers fail? Conduit surfaces the patterns across the OEM's own dealer network — and the documentation gaps the OEM can finally close.",
  },
];

export function Differentiators() {
  return (
    <section id="differentiators" className="py-16 md:py-22 bg-planara-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          What makes Conduit different
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-16 max-w-3xl">
          Built for the field, not for the lab.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {points.map((p) => (
            <div key={p.title} className="flex gap-4">
              <p.icon
                className="w-6 h-6 text-planara-teal shrink-0 mt-1"
                weight="duotone"
              />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-base text-white/55 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
