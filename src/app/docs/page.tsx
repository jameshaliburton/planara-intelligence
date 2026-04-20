import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import {
  ArrowRight,
  Rocket,
  Brain,
  FolderOpen,
  ChartBar,
  Eye,
  GearSix,
  ShieldCheck,
  BookOpen,
  FileText,
  Quotes,
  ShieldWarning,
  Gauge,
  Buildings,
  UsersFour,
  Broadcast,
  ListChecks,
  Blueprint,
  Code,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Platform Documentation",
  description:
    "Comprehensive guides for every role — from first login to network-wide deployment. Getting started, platform concepts, evaluation, monitoring, operations, administration.",
  alternates: { canonical: "/docs" },
  openGraph: {
    title: "Planara Platform Documentation",
    description:
      "Comprehensive guides across Getting Started, Platform Concepts, Evaluation, Monitoring, Operations, and Administration.",
    url: "/docs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planara Platform Documentation",
    description:
      "Comprehensive guides for every role — from first login to network-wide deployment.",
  },
};

const docSections = [
  {
    icon: Rocket,
    title: "Getting Started",
    count: 4,
    guides: [
      "Platform overview",
      "First document upload",
      "Configuration walkthrough",
      "Deploying to your team",
    ],
  },
  {
    icon: Brain,
    title: "Platform Concepts",
    count: 12,
    guides: [
      "Structured responses",
      "Citation tracking",
      "Confidence scoring",
      "Safety enrichment",
      "Context streams",
      "Role-aware intelligence",
      "Diagnostic templates",
      "Knowledge gap detection",
      "Feedback loops",
      "Multi-model support",
      "Equipment identification",
      "Progressive generation",
    ],
  },
  {
    icon: FolderOpen,
    title: "Content Management",
    count: 4,
    guides: [
      "Document ingestion",
      "Three-parser validation",
      "Image and diagram handling",
      "Service bulletin management",
    ],
  },
  {
    icon: ChartBar,
    title: "Quality & Evaluation",
    count: 4,
    guides: [
      "Evaluation framework",
      "Golden query baselines",
      "Retrieval quality metrics",
      "Response accuracy scoring",
    ],
  },
  {
    icon: Eye,
    title: "Monitoring & Analytics",
    count: 5,
    guides: [
      "Pipeline observability",
      "Query analytics",
      "Network adoption metrics",
      "Knowledge gap reports",
      "Latency monitoring",
    ],
  },
  {
    icon: GearSix,
    title: "Operations",
    count: 4,
    guides: [
      "Self-serve onboarding",
      "Tenant provisioning",
      "Service-system integration",
      "Webhook configuration",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Administration",
    count: 3,
    guides: [
      "Multi-tenant security",
      "Access control & RLS",
      "Audit & compliance",
    ],
  },
];

const capabilities = [
  { icon: FileText, label: "Structured responses" },
  { icon: Quotes, label: "Page-level citations" },
  { icon: ShieldWarning, label: "Safety-first warnings" },
  { icon: Gauge, label: "Confidence scoring" },
  { icon: Buildings, label: "Multi-tenant isolation" },
  { icon: UsersFour, label: "Role-aware output" },
  { icon: Broadcast, label: "Context streams" },
  { icon: ListChecks, label: "CKL enrichment" },
  { icon: Blueprint, label: "Diagram highlighting" },
  { icon: Code, label: "Widget API" },
];

const totalGuides = docSections.reduce((sum, s) => sum + s.count, 0);

export default function DocsPage() {
  return (
    <main className="min-h-screen pt-14">
      {/* Hero */}
      <section className="py-16 md:py-22 bg-planara-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-8">
            Documentation
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[0.95] mb-6">
            Platform Documentation
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Comprehensive guides for every role — from first login to
            network-wide deployment. {totalGuides}+ guides across {docSections.length} sections.
          </p>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="py-16 md:py-22 bg-planara-navy">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docSections.map((section) => (
              <div
                key={section.title}
                className="border border-white/[0.08] rounded-sm p-6 bg-white/[0.02]"
              >
                <div className="flex items-center justify-between mb-4">
                  <section.icon className="w-6 h-6 text-planara-teal" weight="duotone" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/30">
                    {section.count} guides
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-1.5">
                  {section.guides.map((guide) => (
                    <li
                      key={guide}
                      className="flex items-start gap-2 text-sm text-white/45 leading-relaxed"
                    >
                      <span className="text-planara-teal/40 mt-1 shrink-0">
                        &bull;
                      </span>
                      {guide}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 md:py-22 bg-planara-dark border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
            Platform Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-16 max-w-3xl">
            What the platform delivers.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="border border-white/[0.08] rounded-sm p-4 bg-white/[0.02] text-center"
              >
                <cap.icon className="w-5 h-5 text-planara-teal mx-auto mb-2" weight="duotone" />
                <p className="text-xs font-medium text-white/60">{cap.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-22 bg-planara-navy">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <BookOpen className="w-10 h-10 text-planara-teal mx-auto mb-6" weight="duotone" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Request Documentation Access
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-8 leading-relaxed">
            Full platform documentation is available to prospective customers
            and partners.
          </p>
          <a
            href="mailto:hello@planara.com?subject=Documentation%20Access%20Request"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors text-base"
          >
            Request access
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
