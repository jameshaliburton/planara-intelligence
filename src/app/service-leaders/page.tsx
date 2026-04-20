import {
  Users,
  Clock,
  TrendUp,
  ShieldCheck,
  ArrowRight,
  MagnifyingGlass,
  Student,
  PhoneDisconnect,
  Wrench,
  ChartBar,
  ListChecks,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";

const painPoints = [
  {
    icon: Student,
    title: "The new tech can't find the procedure",
    description:
      "Hired 3 months ago, trained on 2 models, just got dispatched to a unit they've never seen. They're flipping through a 600-page PDF on an iPad while the customer watches. Twenty minutes later they call the senior tech.",
    outcome: "With Planara: query the symptom, get the cited procedure in 8 seconds. No phone call.",
  },
  {
    icon: PhoneDisconnect,
    title: "Your best tech is everyone else's help desk",
    description:
      "The senior tech who's been here 15 years spends 2 hours a day answering questions from the rest of the team. That's 2 hours of billable labor gone, and when they retire, all of it walks out the door.",
    outcome: "With Planara: every answer the senior tech gives is captured. The system learns it. Next time, the junior tech gets it directly.",
  },
  {
    icon: Clock,
    title: "The callback because the first visit missed it",
    description:
      "Tech replaced the thermostat. Customer called back 2 weeks later — same symptom. Turns out 31% of the time, the actual root cause is the water passage, not the thermostat. Nobody told the tech because that knowledge wasn't in the manual.",
    outcome: "With Planara: field corrections from across the network are injected into procedures. The second tech in line gets what the first one learned.",
  },
];

const beforeAfter = [
  {
    before: "Tech searches a 600-page PDF",
    after: "Tech asks a question, gets a cited procedure in seconds",
  },
  {
    before: "New hires shadow for 6 months before they're productive",
    after: "New hires are productive in weeks — the platform fills the experience gap",
  },
  {
    before: "Knowledge leaves when people leave",
    after: "Every correction, every outcome stays in the system permanently",
  },
  {
    before: "Service manager finds out about a gap when a customer complains",
    after: "Knowledge gaps surface proactively with frequency data and impact ranking",
  },
  {
    before: "No idea which techs are struggling or why",
    after: "Adoption metrics, query patterns, and satisfaction rates per technician",
  },
  {
    before: "Callbacks cost 2 extra truck rolls and 14 days",
    after: "First-time fix rate improves as the field intelligence loop compounds",
  },
];

const managerFeatures = [
  {
    icon: ChartBar,
    title: "Adoption dashboard",
    description: "Who's using it, how often, what they're asking. Adoption funnel from registered to power user. Champions and struggling techs identified automatically.",
  },
  {
    icon: MagnifyingGlass,
    title: "Knowledge gap detection",
    description: "Topics with high query volume and low confidence — ranked by frequency. These are the documentation gaps costing you the most. Fix them, measure the improvement.",
  },
  {
    icon: TrendUp,
    title: "ROI calculator",
    description: "Configurable inputs: hourly rate, time-without-Planara, team size. Uses your real query data to compute time saved, cost savings, and months to payoff. The page you show the GM.",
  },
  {
    icon: ListChecks,
    title: "Correction management",
    description: "Technician corrections flow through submitted → validated → active. You review and approve. Bad corrections get rejected. Good ones improve every future response.",
  },
  {
    icon: ShieldCheck,
    title: "Quality monitoring",
    description: "Automated nightly evaluations against your golden query set. Regression alerts if quality drops. Feedback tracking with sentiment analysis and topic clustering.",
  },
  {
    icon: Users,
    title: "Team management",
    description: "Invite techs via magic link. Role-based access — techs see procedures, you see analytics. Deactivate leavers instantly. Query history per technician for coaching.",
  },
];

export default function ServiceLeadersPage() {
  return (
    <main className="min-h-screen pt-14">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-planara-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-6 py-24 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-8">
            For Service Leaders
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[0.95] mb-8">
            Your best tech&apos;s
            <br />
            knowledge. Available
            <br />
            to everyone.
          </h1>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-12">
            You manage the team. You&apos;re measured on speed, quality, and cost.
            Planara gives every tech on your floor the knowledge that used to
            live in one person&apos;s head — and gets smarter with every repair.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://demo.planara.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
            >
              See the live demo
            </a>
            <a
              href="mailto:hello@planara.com?subject=Service%20Leaders%20—%20Prototype%20with%20our%20manuals"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
            >
              Prototype with your manuals
            </a>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
            >
              How the platform works
            </Link>
          </div>
        </div>
      </section>

      {/* The problems you feel daily */}
      <section className="py-16 md:py-22 bg-white border-b border-planara-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            Sound Familiar?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-16 max-w-3xl">
            Three problems you deal with every week.
          </h2>

          <div className="space-y-8">
            {painPoints.map((point) => (
              <div key={point.title} className="border border-planara-border rounded-sm p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <point.icon className="w-6 h-6 text-planara-muted shrink-0 mt-1" weight="duotone" />
                  <div>
                    <h3 className="text-lg font-semibold text-planara-dark mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-planara-muted leading-relaxed mb-4">
                      {point.description}
                    </p>
                    <div className="border-l-2 border-planara-teal pl-4">
                      <p className="text-sm font-medium text-planara-dark">
                        {point.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-16 md:py-22 bg-planara-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
            What Changes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-16 max-w-3xl">
            Your operation, before and after.
          </h2>

          <div className="space-y-3">
            {beforeAfter.map((item) => (
              <div key={item.before} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 items-center">
                <div className="border border-white/[0.08] rounded-sm p-4 bg-white/[0.02]">
                  <p className="text-xs font-mono uppercase tracking-wider text-white/20 mb-1">Before</p>
                  <p className="text-sm text-white/50">{item.before}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-planara-teal hidden md:block" />
                <div className="border border-planara-teal/20 rounded-sm p-4 bg-planara-teal/[0.03]">
                  <p className="text-xs font-mono uppercase tracking-wider text-planara-teal/50 mb-1">After</p>
                  <p className="text-sm text-white/70">{item.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI preview */}
      <section className="py-16 md:py-22 bg-white border-b border-planara-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            The Math
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
            Your ROI, with your numbers.
          </h2>
          <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
            The backoffice includes a live ROI calculator that uses your real
            query data. Here&apos;s what the math looks like for a typical 10-tech operation.
          </p>

          <div className="border border-planara-border rounded-sm overflow-hidden max-w-2xl">
            <div className="grid grid-cols-2 border-b border-planara-border">
              <div className="p-4 border-r border-planara-border">
                <p className="text-xs font-mono text-planara-muted/60 mb-1">Loaded hourly rate</p>
                <p className="text-lg font-bold text-planara-dark">$85/hr</p>
              </div>
              <div className="p-4">
                <p className="text-xs font-mono text-planara-muted/60 mb-1">Avg. search time without Planara</p>
                <p className="text-lg font-bold text-planara-dark">45 min/incident</p>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-planara-border">
              <div className="p-4 border-r border-planara-border">
                <p className="text-xs font-mono text-planara-muted/60 mb-1">Avg. search time with Planara</p>
                <p className="text-lg font-bold text-planara-teal">8 min/incident</p>
              </div>
              <div className="p-4">
                <p className="text-xs font-mono text-planara-muted/60 mb-1">Incidents per tech per day</p>
                <p className="text-lg font-bold text-planara-dark">4</p>
              </div>
            </div>
            <div className="grid grid-cols-2 bg-planara-dark">
              <div className="p-4 border-r border-white/[0.06]">
                <p className="text-xs font-mono text-white/30 mb-1">Time saved / tech / day</p>
                <p className="text-2xl font-bold text-planara-teal">2.5 hrs</p>
              </div>
              <div className="p-4">
                <p className="text-xs font-mono text-white/30 mb-1">Annual savings (10 techs)</p>
                <p className="text-2xl font-bold text-planara-teal">$530K</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-planara-muted/50 mt-4 max-w-2xl">
            Based on 250 working days/year. Your actual numbers will vary — the platform calculates this from your real usage data.
          </p>
        </div>
      </section>

      {/* What your techs see */}
      <section className="py-16 md:py-22 bg-planara-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
            What Your Techs See
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
            A question box. Not a training course.
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mb-12 leading-relaxed">
            Techs type a question. They get a structured procedure with safety
            warnings, parts, specs, and a citation to the exact page in the
            manual. No training. No onboarding. No &quot;change management.&quot;
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-white/[0.08] rounded-sm p-5 bg-white/[0.02]">
              <Wrench className="w-5 h-5 text-planara-teal mb-3" weight="duotone" />
              <p className="text-sm font-semibold text-white mb-1">Structured procedures</p>
              <p className="text-xs text-white/40 leading-relaxed">
                Step-by-step with safety warnings surfaced first. Every spec value cited to source document and page.
              </p>
            </div>
            <div className="border border-white/[0.08] rounded-sm p-5 bg-white/[0.02]">
              <ShieldCheck className="w-5 h-5 text-planara-teal mb-3" weight="duotone" />
              <p className="text-sm font-semibold text-white mb-1">Confidence scoring</p>
              <p className="text-xs text-white/40 leading-relaxed">
                Verified, check source, or low confidence. The tech always knows how much to trust the answer. Low confidence escalates to you.
              </p>
            </div>
            <div className="border border-white/[0.08] rounded-sm p-5 bg-white/[0.02]">
              <Users className="w-5 h-5 text-planara-teal mb-3" weight="duotone" />
              <p className="text-sm font-semibold text-white mb-1">Field corrections</p>
              <p className="text-xs text-white/40 leading-relaxed">
                When a tech finds a better fix, they submit a correction. You validate it. Next time, everyone gets the improved procedure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you see as the manager */}
      <section className="py-16 md:py-22 bg-white border-b border-planara-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            What You See
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
            The backoffice tells you what&apos;s working and what isn&apos;t.
          </h2>
          <p className="text-lg text-planara-muted max-w-2xl mb-16 leading-relaxed">
            Adoption metrics, knowledge gaps, correction queues, feedback
            trends, and a live ROI calculator. The dashboard you show
            when someone asks &quot;is this thing working?&quot;
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managerFeatures.map((feature) => (
              <div key={feature.title} className="border border-planara-border rounded-sm p-6">
                <feature.icon className="w-5 h-5 text-planara-teal mb-3" weight="duotone" />
                <h3 className="text-sm font-semibold text-planara-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-planara-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How onboarding works */}
      <section className="py-16 md:py-22 bg-planara-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
            Getting Started
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
            Upload your manuals. Your techs are using it by Friday.
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mb-12 leading-relaxed">
            No 6-month implementation. No data science team. No professional
            services engagement. Hand over your documentation, the platform does the rest.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-white/[0.08] rounded-sm p-5 bg-white/[0.02]">
              <p className="text-sm font-mono text-planara-teal mb-2">Day 1</p>
              <p className="text-sm font-semibold text-white mb-1">Upload documentation</p>
              <p className="text-xs text-white/40">Service manuals, TSBs, parts catalogs. Ingested and indexed in minutes.</p>
            </div>
            <div className="border border-white/[0.08] rounded-sm p-5 bg-white/[0.02]">
              <p className="text-sm font-mono text-planara-teal mb-2">Day 2</p>
              <p className="text-sm font-semibold text-white mb-1">Configure roles</p>
              <p className="text-xs text-white/40">Load templates for your vertical. Set what techs see vs. what operators see.</p>
            </div>
            <div className="border border-white/[0.08] rounded-sm p-5 bg-white/[0.02]">
              <p className="text-sm font-mono text-planara-teal mb-2">Day 3-4</p>
              <p className="text-sm font-semibold text-white mb-1">Test with 2-3 techs</p>
              <p className="text-xs text-white/40">Run 20 real queries. Review results. Tune the ontology. Set the quality baseline.</p>
            </div>
            <div className="border border-planara-teal/20 rounded-sm p-5 bg-planara-teal/[0.03]">
              <p className="text-sm font-mono text-planara-teal mb-2">Day 5</p>
              <p className="text-sm font-semibold text-white mb-1">Go live</p>
              <p className="text-xs text-white/50">Send the link. No app install — it&apos;s a PWA. Add to home screen, start asking questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-22 bg-planara-navy">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            See it with your documentation.
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-8 leading-relaxed">
            Send us 2-3 of your service manuals. Working prototype in 1-2 weeks.
            Your techs will tell you if it&apos;s useful — that&apos;s the only test that matters.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@planara.com?subject=Service%20Leaders%20—%20Prototype%20Request"
              className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
            >
              Request a prototype
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
            >
              Back to platform overview
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
