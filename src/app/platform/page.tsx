import { Integration } from "@/components/sections/Integration";
import { Differentiators } from "@/components/sections/Differentiators";
import { PlatformScreenshots } from "@/components/sections/PlatformScreenshots";
import { Platform } from "@/components/sections/Platform";
import { SlimFAQ } from "@/components/sections/SlimFAQ";
import { Footer } from "@/components/sections/Footer";
import {
  Broadcast,
  Wrench,
  ListChecks,
  Warning,
  ClockCounterClockwise,
  Package,
  Newspaper,
  Blueprint,
  DeviceMobile,
  Code,
  PaintBrush,
} from "@phosphor-icons/react/dist/ssr";

const contextStreams = [
  { icon: ListChecks, label: "Step notes" },
  { icon: Warning, label: "Fault codes" },
  { icon: ClockCounterClockwise, label: "Customer history" },
  { icon: Broadcast, label: "Feedback" },
  { icon: Package, label: "Parts inventory" },
  { icon: Wrench, label: "Service history" },
  { icon: Newspaper, label: "TSB matching" },
  { icon: Blueprint, label: "Diagram context" },
];

const consumptionModels = [
  {
    icon: DeviceMobile,
    title: "Reference apps",
    description:
      "Production PWA, live in days. White-labelled for your service network. Technicians, operators, and service managers each get an interface designed for how they work.",
    tag: "Fastest to value",
  },
  {
    icon: Code,
    title: "Widget API",
    description:
      "Typed JSON endpoints for every capability. Embed structured responses, confidence scores, safety warnings, and citation data directly into your existing systems.",
    tag: "Maximum flexibility",
  },
  {
    icon: PaintBrush,
    title: "Custom build",
    description:
      "Bespoke application on the platform. Your design, your UX, your workflows — powered by the full intelligence pipeline. For organizations with specific requirements.",
    tag: "Full control",
  },
];

const platformFAQ = [
  {
    q: "How does the three-parser system work?",
    a: "Every document is processed by three independent parsers using multiple AI providers with automatic failover. If any two parsers disagree on a spec value, part number, or procedure step, the conflict is flagged for human review rather than silently resolved. This catches extraction errors before they reach technicians.",
  },
  {
    q: "What happens when the system doesn't have an answer?",
    a: "Planara never guesses. If retrieved documentation doesn't contain the answer with sufficient confidence, the system says so explicitly and cites what it did find. A confidence tier (verified / informed / uncertain) is attached to every response so users know how much to trust it.",
  },
  {
    q: "How does the feedback loop improve over time?",
    a: "When a technician corrects a response or a diagnostic outcome is recorded, that signal is stored and used to refine future retrieval. Documentation gaps are surfaced to content teams. The system compounds — every service event makes the next answer better.",
  },
];

export default function PlatformPage() {
  return (
    <main className="min-h-screen pt-14">
      {/* Hero */}
      <section className="py-16 md:py-22 bg-planara-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-8">
            The Platform
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[0.95] mb-6">
            Manufacturing intelligence
            <br />
            that compounds.
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Documentation and telemetry in. Structured, cited, safety-critical
            intelligence out. The same platform powers technicians, service teams, and
            OEM analytics.
          </p>
        </div>
      </section>

      <Integration />

      {/* Context Streams */}
      <section className="py-16 md:py-22 bg-planara-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
            Context Streams
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 max-w-3xl">
            Every query is enriched with up to 8 data streams.
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mb-16 leading-relaxed">
            Step notes, fault codes, customer history, feedback, parts
            inventory, service history, TSB matching, and diagram context — all
            feeding a central intelligence layer.
          </p>

          {/* Streams → Pipeline → Response */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              {/* Left: 8 streams */}
              <div className="grid grid-cols-2 gap-2">
                {contextStreams.map((stream) => (
                  <div
                    key={stream.label}
                    className="border border-white/[0.08] rounded-sm px-3 py-2.5 bg-white/[0.02] flex items-center gap-2.5 hover:border-planara-teal/20 transition-colors"
                  >
                    <stream.icon className="w-4 h-4 text-planara-teal shrink-0" weight="duotone" />
                    <p className="text-xs font-medium text-white/70">{stream.label}</p>
                  </div>
                ))}
              </div>

              {/* Center: Arrow → Pipeline → Arrow */}
              <div className="flex flex-col items-center gap-2 px-4">
                <div className="w-px h-4 bg-planara-teal/20" />
                <div className="border border-planara-teal/30 rounded-sm px-5 py-6 bg-planara-teal/[0.04] text-center">
                  <p className="text-xs font-mono uppercase tracking-wider text-planara-teal/60 mb-1">Multi-stage</p>
                  <p className="text-sm font-bold text-planara-teal">Intelligence</p>
                  <p className="text-sm font-bold text-planara-teal">Pipeline</p>
                </div>
                <div className="w-px h-4 bg-planara-teal/20" />
              </div>

              {/* Right: Output types */}
              <div className="space-y-2">
                <div className="border border-planara-teal/20 rounded-sm px-3 py-2.5 bg-planara-teal/[0.02]">
                  <p className="text-xs font-semibold text-planara-teal">Structured procedures</p>
                  <p className="text-[10px] text-white/30">Step-by-step with safety warnings</p>
                </div>
                <div className="border border-planara-teal/20 rounded-sm px-3 py-2.5 bg-planara-teal/[0.02]">
                  <p className="text-xs font-semibold text-planara-teal">Cited specifications</p>
                  <p className="text-[10px] text-white/30">Every value traced to source page</p>
                </div>
                <div className="border border-planara-teal/20 rounded-sm px-3 py-2.5 bg-planara-teal/[0.02]">
                  <p className="text-xs font-semibold text-planara-teal">Confidence scoring</p>
                  <p className="text-[10px] text-white/30">Verified / check source / low confidence</p>
                </div>
                <div className="border border-planara-teal/20 rounded-sm px-3 py-2.5 bg-planara-teal/[0.02]">
                  <p className="text-xs font-semibold text-planara-teal">Field corrections</p>
                  <p className="text-[10px] text-white/30">Network-validated knowledge applied</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Consumption Models */}
      <section className="py-16 md:py-22 bg-white border-b border-planara-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            Three Ways to Deploy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-4 max-w-3xl">
            Reference apps. Widget API. Custom build.
          </h2>
          <p className="text-lg text-planara-muted max-w-2xl mb-16 leading-relaxed">
            Start with production-ready apps, embed capabilities into existing
            systems, or build something entirely custom on the platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consumptionModels.map((model) => (
              <div
                key={model.title}
                className="border border-planara-border rounded-sm p-6 hover:border-planara-teal/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <model.icon className="w-6 h-6 text-planara-teal" weight="duotone" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-planara-teal/70">
                    {model.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-planara-dark mb-2">
                  {model.title}
                </h3>
                <p className="text-sm text-planara-muted leading-relaxed">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Differentiators />
      <PlatformScreenshots />
      <Platform />
      <SlimFAQ questions={platformFAQ} />
      <Footer />
    </main>
  );
}
