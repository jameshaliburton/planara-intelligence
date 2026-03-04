import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: 1,
    title: "Standalone Prototype",
    detail:
      "Self-contained tool, no integrations needed. Proves value with your own documentation in 1-2 weeks.",
    tags: ["No IT required", "Your docs only", "1-2 weeks"],
    active: true,
  },
  {
    number: 2,
    title: "Connect Your Data",
    detail:
      "Wire in telemetry from Siren Marine, pull service history from your DMS, add live equipment context to every query.",
    tags: ["Siren Marine", "Service history", "Live context"],
    active: false,
  },
  {
    number: 3,
    title: "Embed Into Your Tools",
    detail:
      "Intelligence layer inside your existing DMS, service tools, and customer portals. No new software to learn.",
    tags: ["CDK / Lightspeed", "Service tools", "Customer portals"],
    active: false,
  },
  {
    number: 4,
    title: "Scale Across the Platform",
    detail:
      "Multi-model documentation, multi-dealer white-labeling, owner self-service. Revenue-generating for the dealer network.",
    tags: ["Multi-model", "White-labeled", "Per-unit SaaS"],
    active: false,
  },
];

export function ValueProp() {
  return (
    <section id="value-prop" className="py-24 md:py-32 bg-planara-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          The Path
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          Start standalone. Integrate when it&apos;s proven.
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mb-16 leading-relaxed">
          Embedding intelligence into legacy vendor software is the hard path —
          IT approvals, API politics, long timelines. Start with a standalone
          tool that proves value first, then integrate.
        </p>

        {/* Progress bar */}
        <div className="relative mb-8 hidden md:block">
          <div className="absolute top-4 left-0 right-0 h-px bg-white/10" />
          <div className="absolute top-4 left-0 w-[12.5%] h-px bg-planara-teal" />
          <div className="grid grid-cols-4 relative">
            {steps.map((step) => (
              <div key={step.number} className="flex justify-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-medium",
                    step.active
                      ? "bg-planara-teal text-planara-dark"
                      : "bg-white/[0.06] border border-white/10 text-white/30"
                  )}
                >
                  {step.number}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className={cn(
                "rounded-sm p-5 relative",
                step.active
                  ? "border-2 border-planara-teal/40 bg-planara-teal/[0.06]"
                  : "border border-white/10 bg-white/[0.02]"
              )}
            >
              {/* You are here marker */}
              {step.active && (
                <div className="flex items-center gap-1.5 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-planara-teal" strokeWidth={2} />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-planara-teal font-medium">
                    You are here
                  </span>
                </div>
              )}

              <span
                className={cn(
                  "text-xs font-mono mb-2 block",
                  step.active ? "text-planara-teal/60" : "text-white/20"
                )}
              >
                Step {step.number}
              </span>
              <h3
                className={cn(
                  "text-sm font-semibold mb-2",
                  step.active ? "text-white" : "text-white/50"
                )}
              >
                {step.title}
              </h3>
              <p
                className={cn(
                  "text-xs leading-relaxed mb-4",
                  step.active ? "text-white/70" : "text-white/30"
                )}
              >
                {step.detail}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "text-[10px] font-mono px-1.5 py-0.5 rounded-sm",
                      step.active
                        ? "bg-planara-teal/10 text-planara-teal/70"
                        : "bg-white/[0.04] text-white/20"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Annotation */}
        <div className="mt-8 flex items-start gap-3">
          <MapPin className="w-4 h-4 text-planara-teal shrink-0 mt-0.5" strokeWidth={1.5} />
          <p className="text-sm text-white/50 leading-relaxed">
            <span className="text-white/80 font-medium">This demo was built in under 2 weeks from a single owner&apos;s manual.</span>{" "}
            No integrations, no IT project, no vendor approvals. A working prototype
            that proves the value before you commit to anything.
          </p>
        </div>
      </div>
    </section>
  );
}
