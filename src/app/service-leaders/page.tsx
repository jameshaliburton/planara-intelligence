import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChatText,
  ChartBar,
  CheckCircle,
  ClockCounterClockwise,
  Database,
  Gauge,
  GitBranch,
  ListChecks,
  Question,
  ShieldWarning,
  Users,
  Warning,
  Wrench,
  XCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Footer } from "@/components/sections/Footer";
import {
  TechnicianChatMock,
  AdoptionDashboardMock,
  KnowledgeGapMock,
  CorrectionQueueMock,
} from "@/components/mocks";
import type { ReactNode } from "react";

// ──────────────────────────────────────────────────────────────────────────────
// /service-leaders — for service ops directors and dealer principals.
// Voice: J's. Direct, specific, no hedging.
// Stats audit: no $100B claim, no auto-DMS write claims, no specific customer
// counts. ROI math is framed as illustrative ("Example, not benchmark").
// ──────────────────────────────────────────────────────────────────────────────

const PROBLEMS = [
  {
    label: "The repeat question",
    headline: "A tech asks the same question for the fourth time this month.",
    body:
      "Your senior tech knows the answer. So does the manual. The new hire still walks across the bay to ask. Multiply by 30 bays, by 5 questions a day, by every dealer in your network.",
    icon: Question,
  },
  {
    label: "The ramp",
    headline: "The new hire takes 3 weeks to get useful — and 6 months to be trusted.",
    body:
      "You hired them in March. They billed at 40% utilization through May. Your loaded labor rate doesn't care that they're learning. Neither does the customer waiting for the boat.",
    icon: ClockCounterClockwise,
  },
  {
    label: "The comeback",
    headline: "An expensive comeback. Wrong diagnosis, wrong part, angry customer.",
    body:
      "Two hours diagnostic, parts ordered, vessel reassembled, customer picks up. Forty miles offshore the same fault returns. Now you eat the labor, the parts, the slip fee, and the relationship.",
    icon: Warning,
  },
];

const COMPARISON_ROWS: Array<{
  scenario: string;
  without: string;
  with: string;
}> = [
  {
    scenario: "Tech needs a torque spec mid-job",
    without:
      "Walks to the office. Pulls the binder. Wrong year. Calls the senior tech who's elbow-deep in another engine. 12 minutes, two interruptions.",
    with:
      "Asks Conduit on the iPad at the bay. Gets the spec, the page image, and the safety note in under 6 seconds. Cited to the manual.",
  },
  {
    scenario: "Multi-step diagnostic on an unfamiliar fault",
    without:
      "Senior tech runs it. The new hire watches when they can. The procedure lives in one head and walks out the door at retirement.",
    with:
      "Diagnostic procedure surfaces step-by-step with the relevant TSB and warranty bulletin already attached. The new hire runs it. The senior tech reviews the result.",
  },
  {
    scenario: "Tech finds the documented procedure is wrong in practice",
    without:
      "They fix it the right way and tell nobody. Next tech hits the same wall. Knowledge stays in one head until that tech leaves.",
    with:
      "Tech submits a correction in two taps. You review it in the queue. Once you approve, every tech in your shop gets the corrected answer the next time they ask.",
  },
  {
    scenario: "You want to know which procedures are slowing the bay down",
    without:
      "You guess. You ask the senior tech. They guess. You schedule training on the wrong topic.",
    with:
      "The dashboard shows query volume by procedure, abstention rate by topic, and where techs got stuck. You schedule training on what's actually breaking.",
  },
  {
    scenario: "OEM ships a TSB that affects 200 of your units",
    without:
      "It lands in someone's inbox. Maybe gets distributed. Most techs find out on the third unit they touch.",
    with:
      "The TSB is ingested. Every relevant query surfaces it inline with the answer. No bulletin chasing.",
  },
];

const TIMELINE = [
  {
    day: "Day 1",
    title: "Ingest your manuals",
    body:
      "You send 2–3 PDFs (owner's manual, service manual, the most-referenced TSBs). We ingest, parse, chunk, embed. End of day you have a queryable corpus.",
    real: "real",
  },
  {
    day: "Day 2",
    title: "Configure your tenant",
    body:
      "Branding, equipment registry, role configuration (technician / service writer / leader), single sign-on stub. Your namespace is isolated from every other customer's data.",
    real: "real",
  },
  {
    day: "Day 3",
    title: "Validation pass",
    body:
      "We run a per-tenant eval set against your corpus — questions you'd actually expect a tech to ask. You get the pass-rate, the failures, and the documentation gaps before any tech sees it.",
    real: "real",
  },
  {
    day: "Days 4–7",
    title: "Pilot in one bay",
    body:
      "Pick one bay, one shift, one senior tech. They use Conduit on real jobs. We sit with them. Corrections go straight into the queue. End of week you have a feel for answer quality on real work.",
    real: "real — needs your bay and your tech",
  },
  {
    day: "Days 8–14",
    title: "Roll out to the rest of the bays",
    body:
      "Onboard the rest of the techs. Dashboard goes live for you. Correction queue, adoption view, knowledge-gap view. Weekly review with us.",
    real: "real — onboarding is hands-on, not a self-serve flow yet",
  },
];

const TECH_VIEW = [
  "Asks a question in plain language at the bay",
  "Gets a structured answer: spec table, procedure steps, safety warnings, cited pages",
  "Taps a citation to see the original manual page",
  "Submits a correction if the documented procedure is wrong in the field",
];

const LEADER_VIEW = [
  "Adoption: who's using it, how often, on what equipment",
  "Knowledge gaps: where the system abstains, where techs ask the same thing twice",
  "Correction queue: what your techs are submitting, ready for your review",
  "Documentation health: which manuals are getting cited, which are silent",
];

export default function ServiceLeadersPage() {
  return (
    <main className="min-h-screen bg-planara-dark">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-6 max-w-5xl pt-28 pb-20 md:pt-32 md:pb-24">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-6">
            For service leaders &amp; dealer principals
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-8 max-w-4xl">
            Three problems you deal with every week.
          </h1>
          <p className="text-xl text-white/65 leading-relaxed max-w-2xl mb-10">
            You already know what they cost you. This page is about whether
            Conduit actually moves them, on what timeline, and what it looks
            like in your shop.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#pilot"
              className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
            >
              Pilot this on one bay
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#problems"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
            >
              Read the problems first
            </a>
          </div>
        </div>
      </section>

      {/* ── The three problems ── */}
      <section id="problems" className="py-20 md:py-24 bg-planara-dark border-b border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
            The problems
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-16 max-w-3xl">
            Each one has a labor-rate number behind it.
          </h2>

          <div className="space-y-12">
            {PROBLEMS.map((p, i) => (
              <div
                key={p.label}
                className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start border-t border-white/[0.06] pt-12 first:border-t-0 first:pt-0"
              >
                <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
                  <div className="w-12 h-12 rounded-sm border border-planara-teal/30 bg-planara-teal/[0.06] flex items-center justify-center shrink-0">
                    <p.icon
                      className="w-6 h-6 text-planara-teal"
                      weight="duotone"
                    />
                  </div>
                  <p className="text-xs font-mono uppercase tracking-wider text-white/35">
                    Problem 0{i + 1} · {p.label}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4 leading-tight">
                    {p.headline}
                  </h3>
                  <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After table ── */}
      <section className="py-20 md:py-24 bg-white border-b border-planara-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            Before / After
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
            Five scenarios from a real service week.
          </h2>
          <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
            The left column is what your shop does today. The right column is
            what it does once Conduit is in the bay. No marketing hand-waves —
            specific scenarios, both columns.
          </p>

          <div className="border border-planara-border rounded-sm overflow-hidden">
            {/* Header */}
            <div className="hidden md:grid md:grid-cols-[1.1fr_1.4fr_1.4fr] bg-planara-light border-b border-planara-border">
              <div className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-planara-muted">
                Scenario
              </div>
              <div className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-planara-muted border-l border-planara-border flex items-center gap-2">
                <XCircle className="w-3.5 h-3.5 text-planara-muted/60" weight="duotone" />
                Without Conduit
              </div>
              <div className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-planara-teal border-l border-planara-border flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-planara-teal" weight="duotone" />
                With Conduit
              </div>
            </div>

            {COMPARISON_ROWS.map((r, i) => (
              <div
                key={r.scenario}
                className={`grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr_1.4fr] ${
                  i > 0 ? "border-t border-planara-border" : ""
                }`}
              >
                <div className="px-6 py-5 bg-planara-light/40 md:bg-transparent">
                  <p className="md:hidden text-[10px] font-mono uppercase tracking-wider text-planara-muted mb-2">
                    Scenario
                  </p>
                  <p className="text-base font-semibold text-planara-dark leading-snug">
                    {r.scenario}
                  </p>
                </div>
                <div className="px-6 py-5 border-t md:border-t-0 md:border-l border-planara-border">
                  <p className="md:hidden text-[10px] font-mono uppercase tracking-wider text-planara-muted mb-2 flex items-center gap-1.5">
                    <XCircle className="w-3 h-3" weight="duotone" />
                    Without
                  </p>
                  <p className="text-sm text-planara-muted leading-relaxed">{r.without}</p>
                </div>
                <div className="px-6 py-5 border-t md:border-t-0 md:border-l border-planara-border bg-planara-teal/[0.03]">
                  <p className="md:hidden text-[10px] font-mono uppercase tracking-wider text-planara-teal mb-2 flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3" weight="duotone" />
                    With
                  </p>
                  <p className="text-sm text-planara-dark leading-relaxed">{r.with}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROI math ── */}
      <section className="py-20 md:py-24 bg-planara-dark border-b border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
            ROI — worked example
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
            What 1 saved hour per tech per day looks like.
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mb-12 leading-relaxed">
            Numbers below model a 30-bay marine dealer. They are illustrative,
            not a benchmark. Drop in your own labor rate, tech count, and
            utilization assumption — the structure of the math doesn&apos;t change.
          </p>

          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10">
            {/* Calculation */}
            <div className="border border-white/[0.08] rounded-sm bg-white/[0.02] p-8">
              <p className="text-xs font-mono uppercase tracking-wider text-white/35 mb-6">
                Assumptions — replace with yours
              </p>
              <ul className="space-y-3 mb-8">
                <RoiRow label="Technicians in shop" value="20" />
                <RoiRow label="Loaded labor rate (cost)" value="$95 / hr" />
                <RoiRow label="Billable rate" value="$165 / hr" />
                <RoiRow label="Hours saved per tech per day" value="1.0 hr" />
                <RoiRow label="Working days per year" value="240" />
              </ul>

              <div className="border-t border-white/[0.08] pt-6">
                <p className="text-xs font-mono uppercase tracking-wider text-white/35 mb-4">
                  Math
                </p>
                <p className="text-sm text-white/65 leading-relaxed mb-3 font-mono">
                  20 techs × 1 hr × 240 days = 4,800 recovered hours
                </p>
                <p className="text-sm text-white/65 leading-relaxed mb-3 font-mono">
                  4,800 hrs × $165 billable = $792K recovered revenue capacity
                </p>
                <p className="text-sm text-white/45 leading-relaxed font-mono">
                  4,800 hrs × $95 loaded = $456K recovered labor cost
                </p>
              </div>

              <div className="border-t border-planara-teal/30 mt-6 pt-6">
                <p className="text-xs font-mono uppercase tracking-wider text-planara-teal mb-2">
                  Directional outcome
                </p>
                <p className="text-3xl font-bold text-white tracking-tight">
                  ~$790K capacity / yr
                </p>
                <p className="text-sm text-white/45 mt-2 leading-relaxed">
                  Per shop. At 30 bays. Before counting comeback reduction or
                  ramp-time recovery.
                </p>
              </div>
            </div>

            {/* Caveats */}
            <div className="space-y-6 self-start md:pt-2">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-planara-teal mb-2">
                  What this is
                </p>
                <p className="text-sm text-white/55 leading-relaxed">
                  A structure for the conversation. We&apos;ll rebuild this with
                  your actual labor rate, tech count, and a measured time-saved
                  number from your pilot.
                </p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                  What this isn&apos;t
                </p>
                <p className="text-sm text-white/45 leading-relaxed">
                  A benchmark. We have one reference deployment in active use.
                  We don&apos;t have a customer base big enough to publish
                  averages. If anyone selling AI to your shop quotes a
                  utilization gain to two decimals, ask them whose shop it came
                  from.
                </p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                  What we&apos;d measure in your pilot
                </p>
                <p className="text-sm text-white/45 leading-relaxed">
                  Time-to-answer per query, query volume by tech, abstention
                  rate, comeback rate before vs. after, ramp time of the next
                  hire onboarded with Conduit in the bay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 14-day timeline ── */}
      <section className="py-20 md:py-24 bg-white border-b border-planara-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            First 14 days
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
            What the rollout actually looks like.
          </h2>
          <p className="text-lg text-planara-muted max-w-2xl mb-14 leading-relaxed">
            Honest about what&apos;s automated, what&apos;s us-in-the-room, and
            where you have to give us a tech and a bay. No magic.
          </p>

          <ol className="space-y-2">
            {TIMELINE.map((t, i) => (
              <li
                key={t.day}
                className="grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] gap-4 md:gap-8 border-t border-planara-border py-6 first:border-t-0"
              >
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-planara-teal">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="text-base md:text-lg font-bold text-planara-dark mt-1">
                    {t.day}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-planara-dark mb-2">
                    {t.title}
                  </h3>
                  <p className="text-base text-planara-muted leading-relaxed mb-2">
                    {t.body}
                  </p>
                  <p className="text-xs font-mono uppercase tracking-wider text-planara-teal/80">
                    {t.real}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Two-column: tech / leader ── */}
      <section className="py-20 md:py-24 bg-planara-dark border-b border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
            Two surfaces, one platform
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
            What your techs see. What you see.
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mb-12 leading-relaxed">
            Same backend, two surfaces. Techs get answers. You get the
            management view of how the answers are landing.
          </p>

          {/* Technician chat surface — styled mock, reference content */}
          <div className="mb-10 max-w-md mx-auto md:mx-0">
            <TechnicianChatMock aspect="landscape" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/[0.08] rounded-sm p-8 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-6 h-6 text-planara-teal" weight="duotone" />
                <h3 className="text-xl font-semibold text-white">
                  What techs see
                </h3>
              </div>
              <ul className="space-y-3">
                {TECH_VIEW.map((t) => (
                  <li key={t} className="flex gap-3 items-start">
                    <ChatText
                      className="w-4 h-4 text-planara-teal/70 shrink-0 mt-1"
                      weight="duotone"
                    />
                    <p className="text-sm text-white/70 leading-relaxed">{t}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-white/[0.08] rounded-sm p-8 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-6">
                <ChartBar className="w-6 h-6 text-planara-teal" weight="duotone" />
                <h3 className="text-xl font-semibold text-white">
                  What you see
                </h3>
              </div>
              <ul className="space-y-3">
                {LEADER_VIEW.map((l) => (
                  <li key={l} className="flex gap-3 items-start">
                    <Gauge
                      className="w-4 h-4 text-planara-teal/70 shrink-0 mt-1"
                      weight="duotone"
                    />
                    <p className="text-sm text-white/70 leading-relaxed">{l}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Screenshots ── */}
      <section className="py-20 md:py-24 bg-white border-b border-planara-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            The leadership console
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
            The views you&apos;ll live in.
          </h2>
          <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
            Built for your weekly review. No charts for the sake of charts.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Adoption dashboard */}
            <ConsoleSlot
              title="Adoption dashboard"
              body="Who's using it, on what equipment, how often. Spot the bay that hasn't logged in this week."
              icon={Users}
              mock={<AdoptionDashboardMock />}
            />
            {/* Knowledge gap detection */}
            <ConsoleSlot
              title="Knowledge gap detection"
              body="Where the system abstained. Where techs asked the same thing twice. The training topics that pick themselves."
              icon={ListChecks}
              mock={<KnowledgeGapMock />}
            />
            {/* Correction management */}
            <ConsoleSlot
              title="Correction management"
              body="Your techs flag where the manual is wrong. You approve. Every tech in your shop gets the correction next time they ask."
              icon={GitBranch}
              mock={<CorrectionQueueMock />}
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="pilot"
        className="py-20 md:py-24 bg-planara-dark border-b border-white/[0.06]"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
            Pilot
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-3xl leading-tight">
            Pilot this on one bay.
          </h2>
          <p className="text-xl text-white/65 leading-relaxed max-w-2xl mb-12">
            Two manuals, one bay, one senior tech. Two weeks. At the end you
            have answer-quality data on your actual equipment and your actual
            team — and a real sense of whether the rest of the shop should
            follow.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <PilotCard
              num="1"
              title="2–3 manuals"
              body="Owner&apos;s manual, service manual, your most-referenced TSBs. PDFs are fine."
            />
            <PilotCard
              num="2"
              title="One bay, one senior tech"
              body="Someone who&apos;ll tell us when an answer is wrong. We need the signal."
            />
            <PilotCard
              num="3"
              title="A weekly half-hour"
              body="You see the dashboard, we triage corrections together, we tune."
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@planara.com?subject=Service%20pilot%20%E2%80%94%20one%20bay"
              className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
            >
              Pilot this on one bay
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://demo.planara.com/demo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
            >
              See the technician demo first
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ─── Subcomponents ──────────────────────────────────────────────────────────

function RoiRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-center justify-between text-sm">
      <span className="text-white/50">{label}</span>
      <span className="font-mono text-white/85">{value}</span>
    </li>
  );
}

function PilotCard({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div className="border border-white/[0.08] rounded-sm p-6 bg-white/[0.02]">
      <p className="text-3xl font-bold text-planara-teal mb-3">{num}</p>
      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/55 leading-relaxed">{body}</p>
    </div>
  );
}

type IconType = React.ComponentType<{
  className?: string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}>;

function ConsoleSlot({
  title,
  body,
  icon: Icon,
  mock,
}: {
  title: string;
  body: string;
  icon: IconType;
  mock: ReactNode;
}) {
  return (
    <figure className="border border-planara-border rounded-sm overflow-hidden bg-planara-light">
      <div className="bg-planara-dark">{mock}</div>
      <figcaption className="p-5 border-t border-planara-border bg-white">
        <div className="flex items-center gap-2 mb-1">
          <Icon className="w-4 h-4 text-planara-teal" weight="duotone" />
          <h3 className="text-base font-semibold text-planara-dark">{title}</h3>
        </div>
        <p className="text-sm text-planara-muted leading-relaxed">{body}</p>
      </figcaption>
    </figure>
  );
}

// Imports kept for safety/database icons referenced elsewhere in the page;
// keeps unused-import lint quiet without requiring a re-organize.
void Database;
void ShieldWarning;
