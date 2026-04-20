import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { AIComparison } from "@/components/sections/AIComparison";
import { Differentiators } from "@/components/sections/Differentiators";
import { FieldIntelligenceDiagram } from "@/components/sections/FieldIntelligenceDiagram";
import { SocialProof } from "@/components/sections/SocialProof";
import { Engagement } from "@/components/sections/Engagement";
import { SlimFAQ } from "@/components/sections/SlimFAQ";
import { Footer } from "@/components/sections/Footer";
import {
  Wrench,
  Storefront,
  ChartLineUp,
  ArrowRight,
  Upload,
  ChatText,
  Globe,
  Buildings,
  LockKey,
  UsersFour,
  ChartBar,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const outcomes = [
  {
    icon: Wrench,
    title: "Field Technicians",
    description: "Structured procedures, safety warnings, and parts lists — cited to the page. Equipment-scoped to the unit on the lift. Informed by what worked across the network.",
    href: "/platform",
  },
  {
    icon: Storefront,
    title: "Service Leaders",
    description: "Reduce diagnostic time. Improve first-time fix rate. Capture field knowledge before it walks out the door. Measure ROI per technician.",
    href: "/service-leaders",
  },
  {
    icon: ChartLineUp,
    title: "OEM Product Teams",
    description: "Network-wide resolution analytics. Field issue detection before recalls. Documentation gaps ranked by cost. The intelligence your engineering team can't get any other way.",
    href: "/platform",
  },
];

const credentialNames = ["Ford", "Airbus", "Google", "Apple", "Uber", "Disney", "Goldman Sachs", "Samsung"];

const howItWorks = [
  {
    icon: Upload,
    step: "1",
    title: "OEM publishes documentation",
    description: "Manuals, TSBs, parts catalogs, compliance standards. Ingested, chunked, embedded, and indexed in under 30 seconds per document.",
  },
  {
    icon: ChatText,
    step: "2",
    title: "Techs get answers, system learns",
    description: "Structured procedures with citations, safety warnings, and parts lists. Every repair outcome feeds back — what worked, what didn't, what the tech actually did.",
  },
  {
    icon: Globe,
    step: "3",
    title: "Intelligence compounds across the network",
    description: "Field corrections, resolution patterns, and diagnostic improvements accumulate across every service location. The manufacturer sees what no single shop can.",
  },
];

const dealerFeatures = [
  {
    icon: Buildings,
    title: "Per-location isolation",
    description: "Every service location gets its own workspace with separated data, users, and service history. Content published by the manufacturer propagates automatically.",
  },
  {
    icon: Storefront,
    title: "Field intelligence capture",
    description: "Step-level outcome tracking, technician corrections, and diagnostic outcomes flow back into the knowledge base. The system learns from every repair at every location.",
  },
  {
    icon: UsersFour,
    title: "Role-based intelligence",
    description: "Technicians see procedures and safety warnings. Service managers see resolution rates and knowledge gaps. Operators see plain-language answers with service CTAs.",
  },
  {
    icon: ChartBar,
    title: "Network-wide analytics",
    description: "The manufacturer sees what no single location can: cross-network resolution patterns, documentation gaps ranked by impact, and field issue detection before they escalate.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />

      {/* Product Definition */}
      <section className="py-16 md:py-22 bg-white border-b border-planara-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            What Planara Is
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-4 max-w-3xl">
            The field intelligence layer between manufacturer knowledge and service execution.
          </h2>
          <p className="text-lg text-planara-muted max-w-2xl mb-16 leading-relaxed">
            Content flows down. Intelligence flows up. Every repair across your
            service network makes the next one faster.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item) => (
              <div key={item.title} className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-planara-teal/10 text-planara-teal text-sm font-bold font-mono">
                    {item.step}
                  </span>
                  <item.icon className="w-5 h-5 text-planara-teal" weight="duotone" />
                </div>
                <h3 className="text-base font-semibold text-planara-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-planara-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AIComparison />

      {/* Three Audiences */}
      <section className="py-16 md:py-22 bg-white border-b border-planara-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            Built For
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-16 max-w-3xl">
            Different intelligence for different jobs.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outcomes.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group border border-planara-border rounded-sm p-6 hover:border-planara-teal/30 transition-colors"
              >
                <item.icon className="w-6 h-6 text-planara-teal mb-4" weight="duotone" />
                <h3 className="text-base font-semibold text-planara-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-planara-muted leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-planara-blue group-hover:text-planara-blue/80 transition-colors">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Network */}
      <section className="py-16 md:py-22 bg-planara-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
            Service Network Distribution
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 max-w-3xl">
            The manufacturer deploys once. Every service location gets intelligence.
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mb-16 leading-relaxed">
            Marine service centers. Factory floor teams. HVAC contractors. Automotive dealers.
            Same platform, different verticals. Content flows down. Field intelligence flows back up.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dealerFeatures.map((feature) => (
              <div
                key={feature.title}
                className="border border-white/[0.08] rounded-sm p-6 bg-white/[0.02] hover:border-planara-teal/20 transition-colors"
              >
                <feature.icon className="w-6 h-6 text-planara-teal mb-4" weight="duotone" />
                <h3 className="text-base font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Differentiators />
      <FieldIntelligenceDiagram />

      {/* Verticals */}
      <section className="py-16 md:py-22 bg-white border-b border-planara-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            Verticals
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-4 max-w-3xl">
            One platform. Tuned for your industry.
          </h2>
          <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
            Same intelligence pipeline. Different compliance standards, terminology,
            workflows, and document structures. Each vertical gets its own configuration
            layer — not a reskinned generic tool.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/marine"
              className="group border border-planara-teal/30 rounded-sm p-6 bg-planara-teal/[0.02] hover:border-planara-teal/50 transition-colors"
            >
              <p className="text-sm font-semibold text-planara-dark mb-1">Marine</p>
              <p className="text-xs text-planara-muted leading-relaxed mb-3">
                Outboard, sterndrive, inboard. ABYC/USCG compliance. Service network distribution.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-planara-teal group-hover:text-planara-teal/80">
                View marine solution <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
            <div className="border border-planara-border rounded-sm p-6 opacity-70">
              <p className="text-sm font-semibold text-planara-dark mb-1">Factory</p>
              <p className="text-xs text-planara-muted leading-relaxed mb-3">
                CNC, robotics, packaging lines. LOTO/OSHA compliance. Shift-based workflows.
              </p>
              <span className="text-xs font-mono text-planara-muted/50">Coming soon</span>
            </div>
            <div className="border border-planara-border rounded-sm p-6 opacity-70">
              <p className="text-sm font-semibold text-planara-dark mb-1">HVAC</p>
              <p className="text-xs text-planara-muted leading-relaxed mb-3">
                Commercial and residential. EPA 608, ASHRAE. Dispatch-based workflows.
              </p>
              <span className="text-xs font-mono text-planara-muted/50">Coming soon</span>
            </div>
            <div className="border border-planara-border rounded-sm p-6 opacity-70">
              <p className="text-sm font-semibold text-planara-dark mb-1">Automotive</p>
              <p className="text-xs text-planara-muted leading-relaxed mb-3">
                OEM service networks. ASE/OSHA compliance. DMS integration.
              </p>
              <span className="text-xs font-mono text-planara-muted/50">Coming soon</span>
            </div>
          </div>
        </div>
      </section>

      <SocialProof />

      {/* Condensed credentials strip */}
      <section className="py-8 bg-planara-dark border-b border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-xs font-mono uppercase tracking-wider text-white/25 shrink-0">
              Leadership experience
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {credentialNames.map((name) => (
                <span key={name} className="text-sm font-medium text-white/20">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-16 md:py-22 bg-white border-b border-planara-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            Measurable Outcomes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-16 max-w-3xl">
            The intelligence is the moat. These are the numbers that matter.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-planara-border rounded-sm p-6">
              <p className="text-xl font-bold text-planara-dark mb-2">First-time fix rate</p>
              <p className="text-sm text-planara-muted leading-relaxed">
                Close the 28-point gap between your best and worst locations. A failed first visit costs 2 extra truck rolls and 14 days. Every tech gets the knowledge of your most experienced people.
              </p>
              <p className="text-xs font-mono text-planara-teal/70 mt-3">25% of service costs are repeat visits — Aquant 2026</p>
            </div>
            <div className="border border-planara-border rounded-sm p-6">
              <p className="text-xl font-bold text-planara-dark mb-2">Warranty cost reduction</p>
              <p className="text-sm text-planara-muted leading-relaxed">
                Cross-network resolution analytics distinguish systemic failures from one-offs. Catch warranty patterns across thousands of units before claims pile up. Give product engineering data they can act on.
              </p>
              <p className="text-xs font-mono text-planara-teal/70 mt-3">Field issue detection weeks before traditional reporting</p>
            </div>
            <div className="border border-planara-border rounded-sm p-6">
              <p className="text-xl font-bold text-planara-dark mb-2">Operator satisfaction</p>
              <p className="text-sm text-planara-muted leading-relaxed">
                Instant answers, no phone tag. Maintenance schedules, plain-language explanations, one-tap scheduling. Every interaction builds loyalty and drives service revenue back to your network.
              </p>
              <p className="text-xs font-mono text-planara-teal/70 mt-3">Self-service deflects routine calls, captures service leads</p>
            </div>
            <div className="border border-planara-border rounded-sm p-6">
              <p className="text-xl font-bold text-planara-dark mb-2">Tech onboarding &amp; retention</p>
              <p className="text-sm text-planara-muted leading-relaxed">
                Junior techs ramp in weeks, not years. Senior techs stop being the human search engine. When someone retires, the knowledge stays. Top companies retain 87% vs. 66% for underperformers.
              </p>
              <p className="text-xs font-mono text-planara-teal/70 mt-3">70% of service orgs face disruption from retirements — The Service Council</p>
            </div>
            <div className="border border-planara-border rounded-sm p-6">
              <p className="text-xl font-bold text-planara-dark mb-2">Service revenue growth</p>
              <p className="text-sm text-planara-muted leading-relaxed">
                The operator portal turns every question into a service appointment or parts order. Proactive maintenance alerts drive pre-season revenue. The manufacturer's service network becomes a profit center, not a cost center.
              </p>
              <p className="text-xs font-mono text-planara-teal/70 mt-3">Every operator interaction is a revenue opportunity</p>
            </div>
            <div className="border border-planara-border rounded-sm p-6">
              <p className="text-xl font-bold text-planara-dark mb-2">Compliance &amp; liability</p>
              <p className="text-sm text-planara-muted leading-relaxed">
                ANSI Z535 safety classification on every response. Industry standards cited alongside procedures. Complete audit trail of what was recommended and what was done. Reduces exposure when procedures are safety-critical.
              </p>
              <p className="text-xs font-mono text-planara-teal/70 mt-3">Every claim traced to source document and page</p>
            </div>
          </div>
        </div>
      </section>

      <Engagement />
      <SlimFAQ />

      {/* CTA */}
      <section className="py-16 md:py-22 bg-planara-dark">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Ready to see it with your documentation?
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-8 leading-relaxed">
            Open the live demo, or get a prototype built from your manuals
            in 1-2 weeks.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://demo.planara.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
            >
              See the live demo
            </a>
            <a
              href="mailto:hello@planara.com?subject=Prototype%20with%20our%20manuals"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
            >
              Prototype with your manuals
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
