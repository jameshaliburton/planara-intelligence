import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Megaphone,
  Wrench,
  Headset,
  ChartBar,
  Buildings,
  CheckCircle,
  Flag,
  Eye,
  Lock,
  Gauge,
  Stack,
} from "@phosphor-icons/react/dist/ssr";
import { FieldIntelligenceDiagram } from "@/components/FieldIntelligenceDiagram";
import { Footer } from "@/components/sections/Footer";
import {
  TechnicianChatMock,
  OwnerSurfaceMock,
  AdoptionDashboardMock,
  OEMAnalyticsMock,
} from "@/components/mocks";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "How Planara Conduit works — Technical Service Intelligence",
  description:
    "Conduit turns manufacturer manuals, standards, and service bulletins into cited, safety-validated answers for the people who service the equipment. The full architecture, role-by-role.",
};

export default function PlatformPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Inputs />
      <Architecture />
      <Roles />
      <CorrectionPipeline />
      <Standards />
      <ArchitectureBox />
      <PlatformFAQ />
      <Footer />
    </main>
  );
}

/* ────────────────────────────────────────────────────────────
 * 1. Hero
 * ──────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative bg-planara-dark overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-6 py-24 md:py-32 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-8">
          Planara Conduit · The platform
        </p>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-8 max-w-4xl">
          How Planara Conduit works.
        </h1>

        <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-10">
          Conduit ingests manufacturer manuals, industry standards, and service
          bulletins, and returns cited, safety-validated answers to the people
          who service the equipment.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="https://demo.planara.com/demo"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
          >
            See the demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
 * 2. Three inputs / one output
 * ──────────────────────────────────────────────────────────── */

const INPUTS = [
  {
    icon: BookOpen,
    label: "Manuals",
    detail:
      "Owner's manuals, service manuals, parts catalogs — every page indexed, every diagram preserved.",
  },
  {
    icon: ShieldCheck,
    label: "Standards",
    detail:
      "ABYC, ANSI Z535, OSHA, ASHRAE, ASE, EPA — referenced inline so safety language survives the answer.",
  },
  {
    icon: Megaphone,
    label: "Service bulletins",
    detail:
      "Technical service bulletins and field updates layered over the base library so the latest guidance wins.",
  },
];

function Inputs() {
  return (
    <section className="py-20 md:py-24 bg-planara-navy">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          Technical Service Intelligence
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          Manuals, standards, bulletins. One output. No invention.
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mb-14 leading-relaxed">
          Technical Service Intelligence (TSI) is the layer between
          authoritative documentation and the person holding the wrench. Conduit
          is the implementation. Every claim it makes is traceable to a page in
          the source library — nothing is generated from outside it.
        </p>

        {/* 3 inputs + 1 output grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-stretch">
          {/* Left: 3 input cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {INPUTS.map((input) => (
              <div
                key={input.label}
                className="border border-white/10 bg-white/[0.02] rounded-lg p-5"
              >
                <input.icon
                  className="w-5 h-5 text-planara-teal mb-4"
                  weight="duotone"
                />
                <p className="text-sm font-semibold text-white mb-2">
                  {input.label}
                </p>
                <p className="text-xs text-white/50 leading-relaxed">
                  {input.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Arrow / connector */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight
              className="w-8 h-8 text-planara-teal/60"
              weight="bold"
            />
          </div>
          <div className="flex lg:hidden items-center justify-center text-planara-teal/60">
            <ArrowRight className="w-6 h-6 rotate-90" weight="bold" />
          </div>

          {/* Right: 1 output card */}
          <div className="border border-planara-teal/40 bg-planara-teal/[0.04] rounded-lg p-6 flex flex-col justify-center">
            <p className="text-[10px] font-mono uppercase tracking-wider text-planara-teal mb-3">
              Output
            </p>
            <p className="text-base font-semibold text-white mb-3 leading-snug">
              Cited, safety-validated answers
            </p>
            <p className="text-sm text-white/65 leading-relaxed">
              Structured responses with tappable citations to the original page.
              Safety language preserved verbatim. Confidence scored per answer.
              When the library doesn&apos;t have it, Conduit says so.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
 * 3. The full architecture diagram
 * ──────────────────────────────────────────────────────────── */

function Architecture() {
  return (
    <section className="py-20 md:py-24 bg-planara-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          The architecture
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          Documentation in. Role-specific surfaces out. A feedback loop in between.
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mb-12 leading-relaxed">
          One ingestion pipeline. Three role-specific surfaces. Every field
          correction flows back into the index so the next technician gets a
          better answer than the last one got.
        </p>

        <FieldIntelligenceDiagram />
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
 * 4. What each role gets
 * ──────────────────────────────────────────────────────────── */

type Role = {
  slug: string;
  name: string;
  icon: typeof Wrench;
  description: string;
  outcome: string;
  mock: ReactNode;
};

const ROLES: Role[] = [
  {
    slug: "field-technician",
    name: "Field technician",
    icon: Wrench,
    description:
      "The person at the bench, with the engine open, holding a torque wrench. They get specs, parts, and procedures pulled directly from the manual — never invented. Citations are tappable to the source page so the tech can verify before turning a fastener.",
    outcome:
      "Time on tool goes up because time hunting through PDFs goes down.",
    mock: <TechnicianChatMock aspect="landscape" />,
  },
  {
    slug: "service-writer",
    name: "Service writer / dealer service desk",
    icon: Headset,
    description:
      "The person taking the customer call and translating it into a work order. They get a plain-language interpreter that turns owner symptoms into the right diagnostic procedure, the right parts list, and the right service interval — backed by the same documentation the technician will use.",
    outcome:
      "Work orders get scoped correctly the first time, before the boat hits the lift.",
    mock: <OwnerSurfaceMock />,
  },
  {
    slug: "service-leader",
    name: "Service leader / operations leader",
    icon: ChartBar,
    description:
      "The person responsible for throughput, warranty exposure, and tech retention — whether that's a dealer principal looking across the bay floor or a manufacturing ops director looking across the line. They see which jobs are taking longest, which questions are stalling the floor, and where the documentation is failing the team. Same role, two contexts: dealer service network and internal manufacturing operations.",
    outcome:
      "The signal to fix a process — or escalate a documentation gap to the OEM — arrives in days, not quarters.",
    mock: <AdoptionDashboardMock />,
  },
  {
    slug: "oem-product",
    name: "OEM product team",
    icon: Buildings,
    description:
      "The team that wrote the manual in the first place. They see what the field is actually asking — by model, by region, by service interval — and which questions Conduit can't answer because the underlying documentation doesn't cover them. The unanswered queries are the next service bulletin.",
    outcome:
      "Documentation evolves from a static asset to a feedback-driven product, with measured impact downstream.",
    mock: <OEMAnalyticsMock />,
  },
];

function Roles() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          What each role gets
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
          One platform. Four roles. Two contexts.
        </h2>
        <p className="text-lg text-planara-muted max-w-2xl mb-16 leading-relaxed">
          Conduit isn&apos;t a chat window bolted on the side of a service
          business. It&apos;s a query layer the whole organization works
          against — each role through the surface that fits how they work.
        </p>

        <div className="space-y-16">
          {ROLES.map((role, i) => (
            <div
              key={role.slug}
              className={`grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-start ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Copy */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-md bg-planara-light border border-planara-border flex items-center justify-center">
                    <role.icon
                      className="w-5 h-5 text-planara-teal"
                      weight="duotone"
                    />
                  </div>
                  <p className="text-xs font-mono uppercase tracking-wider text-planara-muted">
                    Role {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-planara-dark mb-4 leading-tight">
                  {role.name}
                </h3>
                <p className="text-base text-planara-muted leading-relaxed mb-5">
                  {role.description}
                </p>
                <div className="border-l-2 border-planara-teal pl-4 py-1">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-planara-muted/70 mb-1">
                    Outcome
                  </p>
                  <p className="text-base text-planara-dark font-medium leading-snug">
                    {role.outcome}
                  </p>
                </div>
              </div>

              {/* Role surface mock — styled, not a captured screenshot. */}
              <div
                className="relative rounded-lg border border-planara-border bg-planara-dark overflow-hidden"
                aria-label={`${role.name} surface`}
              >
                {role.mock}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
 * 5. Correction pipeline narrative
 * ──────────────────────────────────────────────────────────── */

const CORRECTION_STEPS = [
  {
    icon: Flag,
    label: "Flag",
    title: "A technician flags the answer.",
    body:
      "Mid-job, a tech sees Conduit return a torque spec that disagrees with the latest service bulletin. They tap the citation, hit &quot;flag this answer,&quot; and write one line: &quot;TSB 2024-07 supersedes the OM value here.&quot; The job continues. The flag posts to the dealer&apos;s validation queue.",
  },
  {
    icon: Eye,
    label: "Validate",
    title: "The dealer service leader validates it.",
    body:
      "The flagged answer lands in a queue inside the same dealership&apos;s console — alongside the original question, the cited source, the tech&apos;s note, and the suggested fix. A senior tech or service leader reviews the bulletin reference, confirms the supersession, and approves the correction.",
  },
  {
    icon: CheckCircle,
    label: "Apply",
    title: "The next technician gets the corrected answer.",
    body:
      "On approval, the correction is layered into the dealer&apos;s tenant index. The next time anyone in the dealership asks the same question — or any question that surfaces the same procedure — the corrected answer appears, with the original citation plus the validated correction noted inline.",
  },
];

function CorrectionPipeline() {
  return (
    <section className="py-20 md:py-24 bg-planara-light">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          The correction pipeline
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
          The library learns from the floor it serves.
        </h2>
        <p className="text-lg text-planara-muted max-w-2xl mb-14 leading-relaxed">
          Every correction a technician submits is reviewed and validated
          inside the same tenant — and improves the next answer for the next
          technician on the same team. Corrections stay scoped to the
          dealership that submitted them. Nothing leaves your tenant.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-planara-border rounded-lg overflow-hidden border border-planara-border">
          {CORRECTION_STEPS.map((step, i) => (
            <div
              key={step.label}
              className="bg-white p-6 md:p-7 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-md bg-planara-teal/10 border border-planara-teal/30 flex items-center justify-center">
                  <step.icon
                    className="w-4 h-4 text-planara-teal"
                    weight="duotone"
                  />
                </div>
                <p className="text-xs font-mono uppercase tracking-wider text-planara-muted">
                  Step {String(i + 1).padStart(2, "0")} · {step.label}
                </p>
              </div>
              <h3 className="text-base font-semibold text-planara-dark mb-3 leading-snug">
                {step.title}
              </h3>
              <p
                className="text-sm text-planara-muted leading-relaxed"
                dangerouslySetInnerHTML={{ __html: step.body }}
              />
            </div>
          ))}
        </div>

        <p className="text-sm text-planara-muted/80 mt-8 max-w-3xl leading-relaxed">
          <span className="font-semibold text-planara-dark">Single-tenant
          loop, by design.</span> Corrections improve the dealership that made
          them. They don&apos;t flow to other tenants, and they don&apos;t
          train any shared model. When the OEM wants the signal, it sees the
          aggregate pattern of unanswered questions in its own console — never
          another dealer&apos;s data.
        </p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
 * 6. Standards integration
 * ──────────────────────────────────────────────────────────── */

const STANDARDS = [
  {
    code: "ABYC",
    name: "American Boat & Yacht Council",
    domains: ["Marine"],
    detail:
      "Wiring, fuel systems, and safety standards referenced wherever marine procedures touch them.",
  },
  {
    code: "ANSI Z535",
    name: "Safety signs and labels",
    domains: ["Marine", "Manufacturing", "HVAC", "Heavy & agricultural equipment"],
    detail:
      "Severity levels (DANGER / WARNING / CAUTION / NOTICE) preserved verbatim through every answer.",
  },
  {
    code: "OSHA 1910",
    name: "Occupational Safety and Health",
    domains: ["Manufacturing", "HVAC", "Heavy & agricultural equipment"],
    detail:
      "General industry standards surfaced inline whenever a procedure crosses a regulated activity.",
  },
  {
    code: "ASHRAE",
    name: "Refrigeration and HVAC&R",
    domains: ["HVAC"],
    detail:
      "Charging, recovery, and ventilation standards referenced alongside equipment-specific service steps.",
  },
  {
    code: "ASE",
    name: "Automotive Service Excellence",
    domains: ["Powersports", "Heavy & agricultural equipment"],
    detail:
      "Diagnostic and repair certification language used so technicians see standards they recognize.",
  },
  {
    code: "EPA 608",
    name: "Refrigerant handling",
    domains: ["HVAC"],
    detail:
      "Federal handling and recovery requirements referenced anywhere a procedure touches refrigerant.",
  },
];

function Standards() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          Standards integration
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
          The standards live inside the answers, not in a separate binder.
        </h2>
        <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
          Conduit indexes the relevant industry standards alongside the OEM
          documentation so the safety language a technician needs is part of
          the answer — not a separate lookup. Standards are tagged by vertical
          so a marine reader sees marine standards highlighted, an HVAC reader
          sees HVAC standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {STANDARDS.map((s) => (
            <div
              key={s.code}
              className="border border-planara-border rounded-lg p-5 bg-white hover:border-planara-teal/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <p className="text-base font-semibold text-planara-dark font-mono">
                    {s.code}
                  </p>
                  <p className="text-xs text-planara-muted mt-0.5">{s.name}</p>
                </div>
                <div className="flex flex-wrap gap-1 justify-end max-w-[55%]">
                  {s.domains.map((d) => (
                    <span
                      key={d}
                      className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-sm bg-planara-teal/[0.08] text-planara-teal border border-planara-teal/20"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-planara-muted leading-relaxed mt-3">
                {s.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs font-mono text-planara-muted/60 mt-6">
          Additional standards integrated per vertical at deployment. List
          shown reflects current reference deployments.
        </p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
 * 7. Architecture box (technical buyers) + Three Ways to Deploy
 * ──────────────────────────────────────────────────────────── */

const ARCH_PILLARS = [
  {
    icon: Stack,
    title: "Multi-parser ingestion",
    body:
      "Each document is parsed by a primary extractor and validated by a second, independent parser. Diagrams, tables, and torque specs survive intact — and disagreements between parsers are flagged for review, not silently flattened.",
  },
  {
    icon: BookOpen,
    title: "Page-level citations",
    body:
      "Every claim resolves to a specific page in a specific document. Citations are tappable and surface the original page image, so the technician verifies the source before turning a fastener.",
  },
  {
    icon: Lock,
    title: "Namespace isolation",
    body:
      "Each tenant's documentation lives in its own logical namespace. No tenant's data, queries, or corrections cross into another tenant's index. Enforced at the storage layer, not at the application layer.",
  },
  {
    icon: Gauge,
    title: "Confidence scoring",
    body:
      "Every answer carries a confidence tier (verified / informed / uncertain). When the library doesn't support a strong answer, Conduit says so explicitly rather than smoothing the gap with prose.",
  },
];

const DEPLOY_PATHS = [
  {
    label: "Reference apps",
    title: "Pre-built surfaces, your library.",
    body:
      "Use the Planara reference apps for technician, owner, and OEM workflows. Branded for your dealer network. Fastest path to a working pilot.",
  },
  {
    label: "Widget API",
    title: "Embed Conduit into what you already run.",
    body:
      "Drop the query interface into your existing dealer portal, service writer console, or technician tablet app. Same answers, your chrome.",
  },
  {
    label: "Custom build",
    title: "Conduit as the query layer underneath.",
    body:
      "Build your own surface against the Conduit API. You control the UI; Conduit handles ingestion, retrieval, citation, and safety validation.",
  },
];

function ArchitectureBox() {
  return (
    <section className="py-20 md:py-24 bg-planara-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          Under the hood
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          For the technical buyer.
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mb-14 leading-relaxed">
          The four properties that make Conduit safe to put in front of a
          regulated workforce.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-20">
          {ARCH_PILLARS.map((p) => (
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

        {/* Three ways to deploy */}
        <div className="border-t border-white/[0.08] pt-14">
          <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3">
            Deployment paths
          </p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-12 max-w-2xl">
            Pick the surface. Conduit is the layer underneath.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEPLOY_PATHS.map((d, i) => (
              <div
                key={d.label}
                className="border border-white/10 bg-white/[0.02] rounded-lg p-6"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-xs font-mono text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xs font-mono uppercase tracking-wider text-planara-teal">
                    {d.label}
                  </p>
                </div>
                <h4 className="text-base font-semibold text-white mb-3 leading-snug">
                  {d.title}
                </h4>
                <p className="text-sm text-white/55 leading-relaxed">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
 * 8. Common questions (platform-specific)
 * ──────────────────────────────────────────────────────────── */

const PLATFORM_FAQ = [
  {
    q: "How long does a Conduit deployment take?",
    a: "A working prototype on 2–3 of your manuals takes 1–2 weeks. A pilot deployment with the full library, role-specific surfaces, and real users takes 4–8 weeks. The slow part isn't the technology — it's working through the documentation library with your product team and confirming what the answers should look like.",
  },
  {
    q: "What happens when a manual updates?",
    a: "New revisions and service bulletins are re-ingested and the index is updated in place. Where a bulletin supersedes a base manual value, Conduit prefers the bulletin and flags the supersession in the citation. Old document versions are retained so any historical answer can be traced back to the source it was generated from.",
  },
  {
    q: "How is namespace isolation enforced?",
    a: "Each tenant has its own logical namespace at the storage layer. Queries, retrievals, corrections, and analytics are scoped to that namespace before any application code runs. There is no shared index across tenants, no cross-tenant training, and no shared model fine-tuned on customer data. A dealer's corrections improve their own deployment — not anyone else's.",
  },
];

function PlatformFAQ() {
  return (
    <section className="py-20 md:py-24 bg-planara-navy">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          Common questions
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-14 max-w-2xl">
          What technical buyers ask first.
        </h2>

        <div className="space-y-10">
          {PLATFORM_FAQ.map((item) => (
            <div key={item.q}>
              <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                {item.q}
              </h3>
              <p className="text-base text-white/55 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
          <Link
            href="https://demo.planara.com/demo"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
          >
            See the demo
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="mailto:hello@planara.com"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
          >
            Talk to the team
          </a>
        </div>
      </div>
    </section>
  );
}
