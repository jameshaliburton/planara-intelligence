import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  FileDoc,
  Wrench,
  ChatText,
  ChartLineUp,
  ShieldWarning,
  Lock,
} from "@phosphor-icons/react/dist/ssr";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TableOfContents } from "@/components/whitepaper/TableOfContents";
import { StickyHeader } from "@/components/whitepaper/StickyHeader";
import { ValueChainDiagram } from "@/components/whitepaper/ValueChainDiagram";
import { IntelligenceGapDiagram } from "@/components/whitepaper/IntelligenceGapDiagram";
import { MarginBars } from "@/components/whitepaper/MarginBars";
import { TwoPathDiagram } from "@/components/whitepaper/TwoPathDiagram";
import { PhaseTimeline } from "@/components/whitepaper/PhaseTimeline";
import { WhitepaperGate } from "@/components/WhitepaperGate";

export const metadata: Metadata = {
  title:
    "The Intelligence Gap: Where Purpose-Built AI Creates Value in Equipment Manufacturing — Planara",
  description:
    "A landscape overview of the opportunities, market dynamics, and emerging AI applications across the equipment manufacturing value chain.",
};

/* ── Helper components ── */

function StatCallout({
  value,
  label,
  source,
}: {
  value: string;
  label: string;
  source: string;
}) {
  return (
    <div className="border-l-2 border-planara-teal pl-6 py-2">
      <AnimatedCounter
        value={value}
        className="text-3xl md:text-4xl font-bold text-planara-teal tracking-tight block"
      />
      <p className="text-sm text-white/60 mt-1">{label}</p>
      {source && (
        <p className="text-xs text-white/25 font-mono mt-1">{source}</p>
      )}
    </div>
  );
}

function InlineStatCallout({
  value,
  label,
  source,
}: {
  value: string;
  label: string;
  source?: string;
}) {
  return (
    <div className="border border-white/[0.06] rounded-lg px-5 py-4 bg-white/[0.015] my-6">
      <div className="flex items-baseline gap-3">
        <AnimatedCounter
          value={value}
          className="text-2xl md:text-3xl font-bold text-planara-teal tracking-tight"
        />
        <p className="text-sm text-white/50">{label}</p>
      </div>
      {source && (
        <p className="text-[10px] text-white/20 font-mono mt-1">{source}</p>
      )}
    </div>
  );
}

function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <div className="mb-8 pt-16 scroll-mt-24" id={id}>
      <div className="w-10 h-0.5 bg-planara-teal mb-6" />
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
        {title}
      </h2>
    </div>
  );
}

function SubHeading({ title }: { title: string }) {
  return (
    <h3 className="text-lg md:text-xl font-bold text-white mt-12 mb-4">
      {title}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[17px] text-white/55 leading-[1.7] mb-6">{children}</p>
  );
}

function Bold({ children }: { children: React.ReactNode }) {
  return <strong className="text-white/85 font-semibold">{children}</strong>;
}

function DownloadLink() {
  return <WhitepaperGate theme="dark" ctaLabel="Email me the PDF" />;
}

/* ── Page ── */

export default function WhitePaperPage() {
  return (
    <main className="min-h-screen bg-planara-dark">
      <StickyHeader />

      {/* Top nav */}
      <div className="border-b border-white/[0.06]">
        <div className="container mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-white/40 hover:text-planara-teal transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to overview
          </Link>
          <span className="text-xs font-mono text-white/20">
            Planara &mdash; Technical Service Intelligence
          </span>
        </div>
      </div>

      {/* Main layout */}
      <div className="container mx-auto max-w-5xl px-6">
        <div className="lg:flex lg:gap-10">
          <TableOfContents />

          <div className="flex-1 min-w-0">
            {/* Hero */}
            <header className="pt-16 md:pt-24 pb-12">
              <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-6">
                White Paper
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                The Intelligence Gap: Where Purpose-Built AI Creates Value in
                Equipment Manufacturing
              </h1>
              <p className="text-lg md:text-xl text-white/40 leading-relaxed mb-4 max-w-2xl">
                A landscape overview of the opportunities, market dynamics, and
                emerging AI applications across the manufacturing value chain
              </p>
              <p className="text-sm text-white/25 mb-10">
                Planara &mdash; Technical Service Intelligence &middot; March 2026
              </p>
              <DownloadLink />
            </header>

            {/* Article */}
            <article className="pb-16">
              {/* ═══════════════════════════════════════════
                  SECTION 1: EXECUTIVE SUMMARY
                  ═══════════════════════════════════════════ */}
              <SectionHeading
                id="section-1"
                title="Executive Summary"
              />

              <P>
                Aftermarket services generate 2.5x the margins of new equipment
                sales &mdash; 25% EBIT versus 10% (McKinsey, 30-industry
                analysis). The companies capturing the largest share of this
                value are the ones connecting their documentation, telemetry, and
                service operations into a single technical service intelligence
                platform.
              </P>
              <P>
                We call the space between what manufacturers{" "}
                <Bold>know</Bold> &mdash; documentation, telemetry, service
                history &mdash; and what their ecosystem can{" "}
                <Bold>access</Bold> the intelligence gap. Every OEM has millions
                invested in technical documentation. Most have connected
                equipment generating real-time data. Few have connected these
                assets into intelligence that reaches technicians, dealers, and
                owners at the point of need.
              </P>
              <P>
                Companies closing this gap are winning &mdash; expanding
                aftermarket revenue, improving technician productivity, and
                strengthening dealer relationships. Those that aren&apos;t are
                losing aftermarket share to competitors and third-party service
                providers who will fill the intelligence vacuum.
              </P>
              <P>
                <Bold>
                  This paper maps where value is being created across the
                  equipment manufacturing value chain, what purpose-built AI
                  applications look like in practice today, and what it takes to
                  start.
                </Bold>
              </P>

              <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                  <StatCallout
                    value="25%"
                    label="EBIT margin on aftermarket services"
                    source="McKinsey (30-industry analysis)"
                  />
                  <StatCallout
                    value="1.9M"
                    label="manufacturing jobs unfilled by 2033"
                    source="Deloitte / Manufacturing Institute, 2024"
                  />
                  <StatCallout
                    value="$141B"
                    label="IoT in manufacturing market (2025)"
                    source="Fortune Business Insights"
                  />
                </div>
              </ScrollReveal>

              {/* ═══════════════════════════════════════════
                  SECTION 2: WHERE VALUE LEAKS
                  ═══════════════════════════════════════════ */}
              <SectionHeading
                id="section-2"
                title="Where Value Leaks &mdash; The Manufacturing Value Chain"
              />

              <P>
                The equipment manufacturing value chain runs from OEM through
                dealers and service providers to the end customer. At each
                handoff point, there&apos;s both a friction cost and an
                intelligence opportunity.
              </P>

              <P>
                <Bold>Two shapes of the same value chain.</Bold> The shape that
                network takes varies by industry. For marine, automotive,
                powersports, and heavy equipment, the classic shape is{" "}
                <Bold>OEM &rarr; Dealer &rarr; Technician &rarr; Owner</Bold>:
                the manufacturer builds, a dealer network distributes and
                services, technicians execute the work, owners operate the
                asset. This is the shape most of the rest of this paper
                describes.
              </P>

              <P>
                For factory-floor manufacturing, the shape is{" "}
                <Bold>
                  Corporate Manufacturing &rarr; Plant &rarr; Operator
                </Bold>
                : a central manufacturing organization operates its own
                production sites, each plant runs its own equipment, and
                operators on the line use that equipment every shift. There is
                no external dealer, no third-party service organization, no
                consumer owner &mdash; the same company designs, runs, and
                services the equipment in-house. The same intelligence gap
                exists; it just lives between corporate engineering and the
                plant floor rather than between OEM and dealer.
              </P>

              <P>
                <Bold>
                  Both shapes have the same problem and the same opportunity.
                </Bold>{" "}
                Documentation is invested in once and consumed unevenly across
                the network. Telemetry flows but doesn&apos;t reach the point
                of use. The people who need the answer are farthest from the
                people who wrote it. Where this paper says &ldquo;dealer,&rdquo;
                a factory-shape reader can read &ldquo;plant.&rdquo; Where it
                says &ldquo;technician,&rdquo; read &ldquo;operator.&rdquo;
                Where it says &ldquo;fleet,&rdquo; read &ldquo;production
                lines.&rdquo; The value chain is the same shape rotated &mdash;
                the intelligence layer applies to both.
              </P>

              <ValueChainDiagram />

              <SubHeading title="OEM Documentation: Millions Invested, None of It Searchable" />
              <P>
                Every manufacturer has already invested millions in creating
                technical documentation &mdash; service manuals, parts catalogs,
                technical bulletins, wiring diagrams, training materials. For a
                complex product like a marine outboard engine or an industrial
                compressor, the documentation library can run to thousands of
                pages across dozens of documents.
              </P>
              <P>
                The question is whether this investment stays trapped as
                static documentation or becomes queryable technical service
                intelligence. Today, the answer is overwhelmingly the former.
                Documentation is distributed as static files &mdash; not
                searchable in context, not connected to specific equipment,
                not linked to live telemetry that might indicate which
                procedure is relevant right now.
              </P>

              <InlineStatCallout
                value="72%"
                label="of manufacturers have undocumented fixes masking true downtime causes"
                source="HVI Manufacturing Survey, 2025"
              />

              <P>
                Only 55% of businesses have established formal systems for
                documenting and sharing maintenance knowledge between
                technicians (McKinsey). The knowledge exists. The systems to
                make it useful do not.
              </P>

              <SubHeading title="The Dealer Gap: Customer-Facing, Digitally Under-Equipped" />
              <P>
                Dealers are the primary customer relationship for most equipment
                manufacturers. They&apos;re also chronically under-equipped for
                this role. The global automotive DMS market alone is valued at
                $4.96 billion (2024), projected to reach $11.67 billion by 2034,
                growing at 8.9% CAGR. The investment is massive, but the
                technical service intelligence connecting these systems is
                almost entirely absent.
              </P>
              <P>
                <Bold>
                  Dealers who can surface manufacturer intelligence at the point
                  of service win the customer relationship.
                </Bold>{" "}
                Studies indicate 68% of consumers now prefer digital service
                scheduling. In automotive, customer satisfaction reached an
                all-time high in 2024 when dealers invested in omnichannel
                experiences. Marine, powersports, and industrial equipment
                dealers face the same expectations but with a fraction of the
                digital infrastructure.
              </P>

              <SubHeading title="The Technician Multiplier: Making Every Tech Your Best Tech" />
              <P>
                You can&apos;t hire your way out of the technician shortage. The
                manufacturing sector needs 3.8 million new employees by 2033,
                but 1.9 million of those jobs could remain unfilled &mdash; a
                50% fulfillment gap (Deloitte / Manufacturing Institute, 2024).
                Nearly a third of the current workforce is over 55. The Service
                Council estimates the field service industry could lose 40% of
                its 20 million personnel to retirement within 3-4 years.
              </P>

              <InlineStatCallout
                value="61%"
                label="of a technician's day spent searching systems instead of performing maintenance"
                source="IFS / Reliabilityweb Study, 2024"
              />

              <P>
                <Bold>
                  But you can make every technician perform like your most
                  experienced one
                </Bold>{" "}
                by putting documentation intelligence in their hands. Today,
                only 25-35% of a technician&apos;s day involves actual
                maintenance work. The gap isn&apos;t skill &mdash; it&apos;s
                access. A lack of job-enabling technology was cited as a top
                challenge by 38% of skilled trade workers, alongside a lack of
                knowledge sharing on the jobsite (31%).
              </P>

              <SubHeading title="The Owner Revenue Engine: Every Question Is a Service Event" />
              <P>
                Owners don&apos;t read manuals. But they do ask questions. Every
                unanswered question is a service appointment that didn&apos;t
                get scheduled, a part that didn&apos;t get ordered, a warranty
                issue that went unresolved.
              </P>
              <P>
                The owner is the revenue engine of the aftermarket. Engaging
                them with intelligent, contextual, easy-to-use tools turns
                passive ownership into active service revenue for the dealer
                network. The owner of a $350,000 fishing boat expects the
                service experience to match the sophistication of the product
                they purchased. Instead, they get a PDF manual and a phone
                number.
              </P>

              {/* ═══════════════════════════════════════════
                  SECTION 3: CONNECTED EQUIPMENT
                  ═══════════════════════════════════════════ */}
              <SectionHeading
                id="section-3"
                title="Connected Equipment, Disconnected Value"
              />

              <P>
                Manufacturers have already invested in connected equipment. The
                IoT in manufacturing market was valued at $141.18 billion in
                2025 and is projected to reach $1.1 trillion by 2034, growing
                at 26.2% CAGR (Fortune Business Insights). An estimated 40
                billion IoT devices will be in operation by 2030. In marine
                alone, connected equipment platforms like Siren Marine are
                becoming standard on new vessels.
              </P>
              <P>
                <Bold>
                  The data is flowing. The question is whether it stays in
                  dashboards nobody checks or becomes context for intelligence.
                </Bold>
              </P>
              <P>
                75% of IoT projects fail to achieve their desired outcomes
                &mdash; not because the sensors are wrong, but because telemetry
                without documentation context is noise. A temperature reading
                means nothing without the manual that says what range is normal
                for that engine under those conditions. 847 engine hours means
                nothing without the service schedule that specifies what
                maintenance is due.
              </P>
              <P>
                Telemetry + documentation context = actionable intelligence.
                Telemetry alone = expensive dashboards.
              </P>

              <IntelligenceGapDiagram />

              {/* ═══════════════════════════════════════════
                  SECTION 4: THE AFTERMARKET OPPORTUNITY
                  ═══════════════════════════════════════════ */}
              <SectionHeading
                id="section-4"
                title="The Aftermarket Opportunity"
              />

              <P>
                The strategic case for aftermarket services is no longer
                debatable. Aftermarket is 2.5x more profitable than new
                equipment sales. BCG reports that service revenue among
                industrial manufacturers grew 10% in 2023, with an expected
                further 8% increase in 2024. Services carry gross margins
                roughly double the 15-25% typically earned from equipment
                sales.
              </P>

              <MarginBars />

              <P>
                PMMI&apos;s 2025 report found that over the next three years,
                96% of OEMs expect growth in parts sales and 94% expect growth
                in services. Deloitte research shows manufacturers focused on
                services often have 80% or more of their installed base under
                service contracts, creating recurring revenue that stabilizes
                the business through economic cycles.
              </P>
              <P>
                Automotive is 5-10 years ahead &mdash; connected vehicles,
                digital service scheduling, parts optimization, retention
                systems. Marine, powersports, agricultural, and industrial
                equipment are accelerating now. The marine maintenance software
                market alone is projected to grow from $1.28 billion to $2.13
                billion by 2032. Heavy equipment manufacturers like Caterpillar
                and John Deere have led the way with fleet telematics and
                predictive maintenance. The pattern is consistent:{" "}
                <Bold>connect the equipment, then connect the intelligence.</Bold>
              </P>

              {/* ═══════════════════════════════════════════
                  SECTION 5: WHERE PURPOSE-BUILT AI CREATES VALUE
                  ═══════════════════════════════════════════ */}
              <SectionHeading
                id="section-5"
                title="Where Purpose-Built AI Creates Value Today"
              />

              {/* Why Generic AI Fails */}
              <SubHeading title="Why Generic AI Fails in Equipment Service" />
              <P>
                Generic AI tools &mdash; ChatGPT, Copilot, Glean &mdash; are
                designed for general knowledge work: drafting emails,
                summarizing meetings, searching corporate documents. Equipment
                service requires something fundamentally different.
              </P>
              <P>
                Technical service intelligence demands{" "}
                <Bold>structured, safety-critical output</Bold>: spec tables
                with exact values, procedural steps in mandatory sequences,
                parts lists with real SKUs, system diagrams with labeled
                components, verifiable citations to specific manual pages.
              </P>
              <P>
                Wrong lubrication spec = seized engine. Wrong torque value =
                structural failure. Wrong wiring diagram = electrical fire.
                This isn&apos;t email drafting.
              </P>
              <P>
                Generic AI draws from public training data. Technical service
                intelligence requires <Bold>your</Bold> documentation,{" "}
                <Bold>your</Bold> telemetry, <Bold>your</Bold> parts catalog.
                And manufacturers can&apos;t upload proprietary documentation to
                public AI services without IP exposure.
              </P>

              {/* Generic vs Purpose-Built comparison */}
              <ScrollReveal>
                <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/[0.06] rounded-lg overflow-hidden">
                  {/* Generic AI */}
                  <div className="p-5 md:p-6 bg-white/[0.01] md:border-r border-b md:border-b-0 border-white/[0.06]">
                    <div className="flex items-center gap-2 mb-4">
                      <ChatText
                        className="w-4 h-4 text-white/25"
                        weight="duotone"
                      />
                      <p className="text-xs font-mono uppercase tracking-wider text-white/25">
                        Generic AI Assistant
                      </p>
                    </div>
                    <div className="rounded bg-white/[0.02] border border-white/[0.05] p-4">
                      <p className="text-[13px] text-white/30 leading-relaxed italic">
                        &ldquo;The Yamaha F300 typically uses a 10W-30 four-stroke
                        marine engine oil. You should check your owner&apos;s
                        manual for the specific capacity and recommended brand.
                        Regular oil changes are important for engine
                        longevity...&rdquo;
                      </p>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <ShieldWarning className="w-3.5 h-3.5 text-red-400/30" />
                      <p className="text-[10px] text-white/20">
                        No citations. No part numbers. No safety warnings.
                      </p>
                    </div>
                  </div>

                  {/* Purpose-Built */}
                  <div className="p-5 md:p-6 bg-planara-teal/[0.015]">
                    <div className="flex items-center gap-2 mb-4">
                      <FileDoc
                        className="w-4 h-4 text-planara-teal/50"
                        weight="duotone"
                      />
                      <p className="text-xs font-mono uppercase tracking-wider text-planara-teal/50">
                        Purpose-Built Intelligence
                      </p>
                    </div>
                    <div className="rounded bg-planara-teal/[0.03] border border-planara-teal/10 p-4 space-y-2">
                      <p className="text-[13px] text-white/60 font-semibold">
                        YAMALUBE 4-M FC-W, SAE 10W-30
                      </p>
                      <div className="text-[11px] text-white/40 space-y-1">
                        <p>Capacity: 7.1L (with filter)</p>
                        <p>Change interval: 100 hours</p>
                        <p>
                          Filter:{" "}
                          <span className="text-planara-teal/60 font-mono">
                            69J-13440-04
                          </span>
                        </p>
                      </div>
                      <p className="text-[10px] text-planara-teal/40 font-mono pt-1 border-t border-planara-teal/10">
                        Source: Owner&apos;s Manual LIT-18626-12-51, p.42
                      </p>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-planara-teal/30" />
                      <p className="text-[10px] text-planara-teal/40">
                        Your docs. Your data. Verified citations.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Four Application Areas */}
              <P>
                Purpose-built AI in equipment service falls into four
                application areas that map directly to the value chain gaps
                above.
              </P>

              <SubHeading title="Documentation Intelligence" />
              <P>
                Ingest a manufacturer&apos;s entire documentation library and
                make it queryable in natural language. A technician asks
                &ldquo;What oil does the F300 require?&rdquo; and gets:
              </P>
              <div className="border border-planara-teal/15 rounded-lg px-5 py-4 bg-planara-teal/[0.02] my-6 space-y-1.5">
                <p className="text-sm text-white/70 font-semibold">
                  YAMALUBE 4-M FC-W, SAE 10W-30
                </p>
                <p className="text-[13px] text-white/45">
                  7.1L capacity &middot; 100-hour change interval &middot;
                  Filter: 69J-13440-04
                </p>
                <p className="text-[13px] text-white/45">
                  + Lubrication system diagram &middot; Safety warnings
                </p>
                <p className="text-[10px] text-planara-teal/40 font-mono pt-1.5">
                  Citation: Owner&apos;s Manual, page 42
                </p>
              </div>
              <P>
                Not a chatbot. Structured retrieval with safety warnings, spec
                tables, step-by-step procedures, and parts lists. Output shaped
                by <Bold>who&apos;s asking</Bold> (technician gets dense
                procedures, owner gets plain language) and{" "}
                <Bold>what the equipment is doing</Bold> (telemetry provides
                context for relevance).
              </P>

              <SubHeading title="Predictive Service Operations" />
              <P>
                Documentation + telemetry = proactive, not reactive. When a
                vessel has 847 engine hours and the service manual specifies a
                1,000-hour major service, the system alerts the dealer and owner
                6 weeks ahead, identifies required parts, checks inventory
                availability, and pre-populates a work order. (In a
                factory-floor deployment, the same logic alerts the plant
                reliability lead before a runtime threshold trips, against the
                plant&apos;s SOP rather than the OEM&apos;s service manual.)
              </P>
              <P>
                ABB&apos;s research shows predictive maintenance reduces spare
                parts needs by up to 40%, and real-time monitoring reduces
                unplanned downtime by 25%. The shift from reactive to
                predictive isn&apos;t incremental &mdash; it&apos;s structural.
              </P>

              <SubHeading title="Customer Experience Transformation" />
              <P>
                <em>Specific to the classic shape.</em> A factory-floor
                deployment surfaces this differently &mdash; the audience is
                internal operators, not external customers, and the surface is
                shop-floor tablets rather than consumer-facing apps. The rest
                of this subsection describes the classic shape.
              </P>
              <P>
                Same intelligence, different interface: conversational,
                dealer-branded, action-oriented. Every question becomes a
                potential service event.
              </P>
              <P>
                &ldquo;When is my next service due?&rdquo; &rarr; schedule
                button. &ldquo;What oil do I need?&rdquo; &rarr; order button.
                &ldquo;What does the warning light mean?&rdquo; &rarr; call
                dealer button. Transforms the owner relationship from
                &ldquo;PDF manual + phone number&rdquo; to &ldquo;ask anything,
                act on anything.&rdquo;
              </P>

              <SubHeading title="Fleet-Wide Intelligence" />
              <P>
                At scale, the data flowing through a technical service
                intelligence platform reveals patterns invisible to individual
                dealers or technicians &mdash; or to individual plants in a
                factory-floor deployment. Which failure modes are most common
                across a model line (or across production lines in a plant)?
                Which documentation sections generate the most queries? Which
                dealers (or plants) are seeing unusual service patterns?
              </P>
              <P>
                This is the feedback loop that connects technical service
                experience back to product development, quality assurance, and
                documentation improvement. <Bold>
                  Not just a tool &mdash; a closed-loop system that improves
                  your products.
                </Bold>
              </P>

              {/* Four applications grid */}
              <ScrollReveal>
                <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: FileDoc,
                      name: "Documentation Intelligence",
                      example:
                        "Natural language queries across entire documentation library with structured, cited responses",
                      metric: "Structured output with verifiable citations",
                    },
                    {
                      icon: Wrench,
                      name: "Predictive Service Operations",
                      example:
                        "Telemetry-triggered service alerts with pre-populated work orders and parts identification",
                      metric: "40% spare parts reduction (ABB)",
                    },
                    {
                      icon: ChatText,
                      name: "Customer Experience",
                      example:
                        "Dealer-branded conversational interface turning every question into a service action",
                      metric: "Every interaction = service revenue potential",
                    },
                    {
                      icon: ChartLineUp,
                      name: "Fleet-Wide Intelligence",
                      example:
                        "Cross-fleet pattern detection feeding product development and quality assurance",
                      metric: "Field data → product improvement loop",
                    },
                  ].map((app) => (
                    <div
                      key={app.name}
                      className="border border-white/[0.06] rounded-lg p-5 bg-white/[0.015]"
                    >
                      <app.icon
                        className="w-6 h-6 text-planara-teal/50 mb-3"
                        weight="duotone"
                      />
                      <p className="text-sm font-semibold text-white mb-1.5">
                        {app.name}
                      </p>
                      <p className="text-[12px] text-white/40 leading-relaxed mb-3">
                        {app.example}
                      </p>
                      <p className="text-[10px] text-planara-teal/50 font-mono">
                        {app.metric}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* ═══════════════════════════════════════════
                  SECTION 6: TWO PATHS
                  ═══════════════════════════════════════════ */}
              <SectionHeading
                id="section-6"
                title="Two Paths &mdash; Build New or Enhance Existing"
              />

              <P>
                Organizations evaluating AI-powered technical service
                intelligence face a strategic choice. You don&apos;t have to
                wait for vendor cooperation to start.
              </P>
              <P>
                Most manufacturers use vendor-licensed software they can&apos;t
                modify &mdash; CDK, Lightspeed, DealerSocket. Purpose-built
                applications are the realistic starting point: standalone tools
                for specific use cases, built in weeks not months, requiring no
                vendor integration. They prove value before any significant
                commitment.
              </P>
              <P>
                Embedded intelligence &mdash; API integration into existing DMS
                and service tools &mdash; is the longer-term play that follows
                after standalone tools have proven value and justified the
                integration investment.
              </P>
              <P>
                <Bold>
                  Both paths run on the same platform: the same documentation
                  pipeline, the same telemetry connections, the same retrieval
                  architecture. Start with whichever path has the lowest
                  friction. Add the other when the ROI justifies it.
                </Bold>
              </P>

              <TwoPathDiagram />

              {/* ═══════════════════════════════════════════
                  SECTION 7: GETTING STARTED
                  ═══════════════════════════════════════════ */}
              <SectionHeading
                id="section-7"
                title="A Framework for Getting Started"
              />

              <P>
                Technical service intelligence is not an all-or-nothing
                transformation. The most successful implementations follow a
                phased approach that proves value incrementally and builds
                organizational confidence before scaling.
              </P>

              <PhaseTimeline />

              <P>
                <Bold>
                  The requirements to start are minimal: 2-3 equipment manuals
                  (PDF is fine), one use case to focus on, and one point of
                  contact who knows the product and can validate results.
                </Bold>{" "}
                Everything else builds from there.
              </P>

              {/* ═══════════════════════════════════════════
                  SECTION 8: SOURCES
                  ═══════════════════════════════════════════ */}
              <SectionHeading
                id="section-8"
                title="Sources and References"
              />

              <div className="space-y-3 text-xs text-white/25 leading-relaxed font-mono">
                <p>
                  [1] McKinsey &amp; Company, &apos;Industrial aftermarket
                  services: Growing the core&apos; &mdash; EBIT margin analysis
                  across 30 industries (25% aftermarket vs. 10% new equipment).
                </p>
                <p>
                  [2] McKinsey &amp; Company &mdash; 55% of businesses have
                  established formal knowledge-sharing systems between
                  technicians.
                </p>
                <p>
                  [3] Boston Consulting Group (BCG), &apos;Aftermarket Services
                  Drive Growth and Higher Margins for Industrial
                  Manufacturers,&apos; July 2025 &mdash; Service revenue growth
                  (10% in 2023, 8% expected in 2024), gross margins double
                  equipment sales.
                </p>
                <p>
                  [4] Deloitte, &apos;Aftermarket services: Digital
                  differentiator beyond COVID-19&apos; &mdash; 80%+ installed
                  base under service contracts, dealer digital tool strategies.
                </p>
                <p>
                  [5] Deloitte / Manufacturing Institute, &apos;Taking charge:
                  Manufacturers support growth with active workforce
                  strategies,&apos; 2024 &mdash; 3.8M new employees needed by
                  2033, 1.9M unfilled (50% gap).
                </p>
                <p>
                  [6] PMMI, &apos;2025 Aftermarket Parts &amp; Service
                  Report&apos; &mdash; 96% of OEMs expect parts growth, 94%
                  expect service growth within three years.
                </p>
                <p>
                  [7] IFS / Reliabilityweb, &apos;Liberating maintenance
                  technicians,&apos; 2024 &mdash; Technicians spend 61% of day
                  searching systems; wrench time averages 18-30%.
                </p>
                <p>
                  [8] Heavy Vehicle Inspection (HVI), 2025 manufacturing survey
                  &mdash; 72% of companies have &apos;hidden factories&apos; of
                  undocumented fixes masking true downtime.
                </p>
                <p>
                  [9] The Service Council &mdash; Global field service industry
                  could lose up to 40% of 20M personnel to retirement within 3-4
                  years; half of operations experiencing staffing shortages.
                </p>
                <p>
                  [10] Fortune Business Insights &mdash; IoT in manufacturing
                  market valued at $141.18B (2025), projected $1.1T by 2034
                  (26.2% CAGR).
                </p>
                <p>
                  [11] Grand View Research &mdash; Knowledge management software
                  market valued at $20.15B (2024), projected $62.15B by 2033
                  (13.6% CAGR). Manufacturing holds 16% market share.
                </p>
                <p>
                  [12] Bureau of Labor Statistics (BLS), January 2026 &mdash;
                  ~415,000 open manufacturing jobs in late 2025; 245,000
                  employees left in December 2025.
                </p>
                <p>
                  [13] Fiix Software / Industry benchmark &mdash; Typical wrench
                  time 25-35%; world-class target 55%.
                </p>
                <p>
                  [14] Future Market Insights &mdash; Automotive DMS market
                  $4.96B (2024), projected $11.67B by 2034 (8.9% CAGR).
                </p>
                <p>
                  [15] IntelMarket Research &mdash; Marine maintenance software
                  market $1.28B (2025), projected $2.13B by 2032 (9.0% CAGR).
                </p>
                <p>
                  [16] ABB &mdash; Predictive maintenance reduces spare parts
                  needs by up to 40%; real-time monitoring reduces unplanned
                  downtime by 25%.
                </p>
                <p>
                  [17] Quickbase &mdash; Nearly one-third of manufacturing
                  workers over age 55.
                </p>
                <p>
                  [18] Auto Pro Solutions / Industry study &mdash; 68% of
                  consumers prefer digital service scheduling.
                </p>
                <p>
                  [19] Cox Automotive Consumer Buyer Journey Study, 2024 &mdash;
                  Customer satisfaction reached all-time high (75%) with
                  omnichannel dealer experiences.
                </p>
                <p>
                  [20] Skilled trades survey (FMA, 2024) &mdash; 38% cite lack
                  of job-enabling technology as top challenge; 31% cite lack of
                  knowledge sharing; 46% plan to adopt more digital tools in
                  2025.
                </p>
              </div>
            </article>

            {/* Footer */}
            <footer className="border-t border-white/[0.06] py-12 space-y-6">
              <DownloadLink />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link
                  href="/"
                  className="text-sm text-white/40 hover:text-planara-teal transition-colors"
                >
                  &larr; Back to Planara
                </Link>
                <div className="text-right">
                  <p className="text-sm font-semibold text-white/50">
                    Planara
                  </p>
                  <p className="text-xs text-white/20 mt-0.5">
                    Technical Service Intelligence
                  </p>
                </div>
              </div>
              <p className="text-xs text-white/15">
                &copy; {new Date().getFullYear()} Planara. All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
