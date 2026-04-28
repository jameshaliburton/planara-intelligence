import {
  ArrowRight,
  Books,
  Wrench,
  GearSix,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import {
  TechnicianChatMock,
  AdoptionDashboardMock,
} from "@/components/mocks";
import { PilotApplicationForm } from "@/components/PilotApplicationForm";

/**
 * Vertical config consumed by DesignPartnerLayout.
 *
 * Each design-partner page builds one of these and passes it in.
 * The layout component owns all structural rendering, voice, and design tokens.
 */
export type DesignPartnerVertical = {
  slug: string;
  label: string;
  icon: PhosphorIcon;
  /** Optional hand-written H1. Falls back to "Conduit for {label}." */
  headline?: string;
  /** One-line hook. Sits as hero subhead. */
  hookSentence: string;
  paragraphs: {
    /** Standards layer (codes, regs, certifications). */
    standards: string;
    /** Documentation density (manuals, bulletins, schematics, decision trees). */
    density: string;
    /** Service workflow (how the work actually happens). */
    workflow: string;
  };
  /** Short note shown under the deployment screenshots. */
  deploymentNotes: string;
  /** Optional hint copy under the application form. */
  applicationFormHints?: string;
  /**
   * Optional vertical-specific technician chat content rendered in the hero.
   * Falls back to the marine F300 reference if not provided.
   */
  heroMock?: {
    question: string;
    specs: [string, string][];
    safetyText: string;
    citation: string;
    equipmentLabel: string;
  };
};

type Props = { vertical: DesignPartnerVertical };

export function DesignPartnerLayout({ vertical }: Props) {
  return (
    <main className="min-h-screen bg-white">
      <Hero vertical={vertical} />
      <WhyFits vertical={vertical} />
      <DeploymentLook vertical={vertical} />
      <PartnerOffer />
      <ApplicationForm vertical={vertical} />
      <Footer />
    </main>
  );
}

/* ─────────────────────────── Hero ─────────────────────────── */

function Hero({ vertical }: Props) {
  const Icon = vertical.icon;
  return (
    <section
      id="vertical-hero"
      className="relative min-h-screen flex items-center bg-planara-dark overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-6 py-24 md:py-32 max-w-6xl">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-8 inline-flex items-center gap-2">
              <Icon className="w-4 h-4" weight="duotone" />
              Planara Conduit · {vertical.label}
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-8">
              {vertical.headline ?? `Conduit for ${vertical.label}.`}
            </h1>

            <p className="text-xl text-white/70 max-w-2xl leading-relaxed mb-6">
              {vertical.hookSentence}
            </p>

            <p className="text-lg text-white/55 max-w-2xl leading-relaxed mb-10">
              Conduit turns manufacturer manuals, standards, and service
              bulletins into cited, safety-validated answers — for the
              technician at the equipment, the dispatcher at the desk, and the
              service ops leader watching the metric.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#apply"
                className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
              >
                Apply to deploy with us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#why-fits"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
              >
                Why this vertical fits
              </Link>
            </div>
          </div>

          <HeroFrame vertical={vertical} />
        </div>
      </div>
    </section>
  );
}

function HeroFrame({ vertical }: Props) {
  const mock = vertical.heroMock;
  return (
    <div className="relative mx-auto w-full max-w-[360px] lg:max-w-none lg:w-full">
      <TechnicianChatMock
        aspect="portrait"
        question={mock?.question}
        specs={mock?.specs}
        safetyText={mock?.safetyText}
        citation={mock?.citation}
        equipmentLabel={mock?.equipmentLabel ?? vertical.label}
      />
    </div>
  );
}

/* ─────────────────────── Why this fits ─────────────────────── */

function WhyFits({ vertical }: Props) {
  const reasons = [
    {
      icon: Books,
      title: "The standards layer.",
      body: vertical.paragraphs.standards,
    },
    {
      icon: Wrench,
      title: "The documentation density.",
      body: vertical.paragraphs.density,
    },
    {
      icon: GearSix,
      title: "The service workflow.",
      body: vertical.paragraphs.workflow,
    },
  ];

  return (
    <section
      id="why-fits"
      className="py-16 md:py-22 bg-white border-b border-planara-border"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          Why {vertical.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
          Why {vertical.label} fits Conduit&apos;s model.
        </h2>
        <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
          What makes this vertical fit the Conduit pattern: the standards
          stack, the documentation density, and how the service work actually
          happens.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div key={r.title}>
              <r.icon
                className="w-7 h-7 text-planara-teal mb-4"
                weight="duotone"
              />
              <h3 className="text-lg font-semibold text-planara-dark mb-3">
                {r.title}
              </h3>
              <p className="text-base text-planara-muted leading-relaxed">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── What a deployment looks like ──────────────── */

function DeploymentLook({ vertical }: Props) {
  const mock = vertical.heroMock;
  const captions = [
    `Technician chat — cited to the OEM documentation. Reference content shown; your deployment configures terminology and standards at onboarding.`,
    `Service-leader console — adoption, knowledge gaps, and correction throughput across the bays. Reference content shown.`,
  ];

  return (
    <section
      id="deployment"
      className="py-16 md:py-22 bg-planara-light border-b border-planara-border"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          What it looks like
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
          What a Conduit deployment in {vertical.label} looks
          like.
        </h2>
        <p className="text-lg text-planara-muted max-w-2xl mb-10 leading-relaxed">
          {vertical.deploymentNotes}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
          <figure className="w-full max-w-[420px] rounded-lg border border-planara-border overflow-hidden bg-planara-dark">
            <div className="p-3">
              <TechnicianChatMock
                aspect="landscape"
                question={mock?.question}
                specs={mock?.specs}
                safetyText={mock?.safetyText}
                citation={mock?.citation}
                equipmentLabel={mock?.equipmentLabel ?? vertical.label}
              />
            </div>
            <figcaption className="px-5 py-3 text-[11px] font-mono text-white/55 leading-relaxed border-t border-white/[0.06]">
              {captions[0]}
            </figcaption>
          </figure>

          <figure className="w-full max-w-[420px] rounded-lg border border-planara-border overflow-hidden bg-planara-dark">
            <div className="p-3">
              <AdoptionDashboardMock
                tenantLabel={`${vertical.label} pilot`}
              />
            </div>
            <figcaption className="px-5 py-3 text-[11px] font-mono text-white/55 leading-relaxed border-t border-white/[0.06]">
              {captions[1]}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Partner offer ─────────────────────── */

function PartnerOffer() {
  const youGet = [
    "A working Conduit deployment built on your actual documentation",
    "Custom configuration: terminology, standards, and role surfaces tuned to how your techs work",
    "Locked-in early pricing for the life of the contract",
    "A direct line to the team building the platform — your feedback shapes the next release",
    "Named publicly as a launch partner when you're ready, kept private until then",
  ];
  const weNeed = [
    "Access to your equipment documentation (PDFs are fine — manuals, bulletins, internal SOPs)",
    "3–5 technician interviews so we understand the actual service work",
    "30 minutes a week of feedback for the first 8 weeks",
    "Honesty when something doesn't work",
  ];

  return (
    <section
      id="offer"
      className="py-16 md:py-22 bg-white border-b border-planara-border"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          Early access — by application
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
          We&apos;re not shipping a finished product in this vertical yet.
        </h2>
        <p className="text-lg text-planara-muted max-w-3xl mb-4 leading-relaxed">
          The reference deployment is in marine. We&apos;re working with a small
          number of design partners — companies who want Conduit running on
          their documentation now and are willing to shape it as we go.
        </p>
        <p className="text-base text-planara-muted/85 max-w-3xl mb-12 leading-relaxed">
          That&apos;s a real deployment for you, with real tradeoffs. Here&apos;s
          the trade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-planara-border rounded-lg p-6 bg-planara-light">
            <p className="text-xs font-mono uppercase tracking-wider text-planara-teal mb-4">
              What you get out of it
            </p>
            <ul className="space-y-3">
              {youGet.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-sm text-planara-dark/85"
                >
                  <CheckCircle
                    className="w-4 h-4 text-planara-teal shrink-0 mt-0.5"
                    weight="duotone"
                  />
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-planara-border rounded-lg p-6 bg-planara-light">
            <p className="text-xs font-mono uppercase tracking-wider text-planara-muted/70 mb-4">
              What we need from you
            </p>
            <ul className="space-y-3">
              {weNeed.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-sm text-planara-dark/85"
                >
                  <CheckCircle
                    className="w-4 h-4 text-planara-muted shrink-0 mt-0.5"
                    weight="duotone"
                  />
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Application form ─────────────────────── */

function ApplicationForm({ vertical }: Props) {
  return (
    <section id="apply" className="py-16 md:py-22 bg-planara-dark">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          Apply
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
          Apply to deploy Conduit in {vertical.label}.
        </h2>
        <p className="text-lg text-white/65 leading-relaxed mb-10">
          {vertical.applicationFormHints ??
            "We read every one. If we think there's a fit, we'll come back to you within a week with next steps."}
        </p>

        <PilotApplicationForm vertical={vertical.label} />
      </div>
    </section>
  );
}
