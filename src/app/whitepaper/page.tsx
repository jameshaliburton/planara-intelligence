import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, DownloadSimple } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "The Intelligence Gap — Planara White Paper",
  description:
    "Untapped value in equipment manufacturing: from documentation to customer experience. A landscape overview of problems, opportunities, and emerging AI applications.",
};

function StatBox({ value, label, source }: { value: string; label: string; source: string }) {
  return (
    <div className="border-l-2 border-planara-teal pl-6 py-2">
      <p className="text-3xl md:text-4xl font-bold text-planara-teal tracking-tight">
        {value}
      </p>
      <p className="text-sm text-white/70 mt-1">{label}</p>
      <p className="text-xs text-white/30 font-mono mt-1">{source}</p>
    </div>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-8 pt-16" id={`section-${number}`}>
      <div className="w-10 h-0.5 bg-planara-teal mb-6" />
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {number}. {title}
      </h2>
    </div>
  );
}

function SubHeading({ title }: { title: string }) {
  return (
    <h3 className="text-xl md:text-2xl font-bold text-white mt-12 mb-4">
      {title}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base text-white/60 leading-relaxed mb-6">
      {children}
    </p>
  );
}

function Bold({ children }: { children: React.ReactNode }) {
  return <strong className="text-white/90 font-semibold">{children}</strong>;
}

function DownloadBar() {
  return (
    <a
      href="/PLANARA_manufacturing_intelligence_whitepaper.pdf"
      download
      className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-sm bg-white/[0.03] hover:border-planara-teal/30 transition-colors text-sm text-white/60 hover:text-white"
    >
      <DownloadSimple className="w-4 h-4 text-planara-teal" />
      Download PDF version
    </a>
  );
}

export default function WhitePaperPage() {
  return (
    <main className="min-h-screen bg-planara-dark">
      {/* Nav */}
      <div className="border-b border-white/[0.06]">
        <div className="container mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-white/40 hover:text-planara-teal transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to overview
          </Link>
          <span className="text-xs font-mono text-white/20">
            Planara Manufacturing Intelligence
          </span>
        </div>
      </div>

      <article className="container mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* Title */}
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-6">
          White Paper &middot; March 2026
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-6">
          The Intelligence Gap
        </h1>
        <p className="text-xl md:text-2xl text-white/50 leading-relaxed mb-8 max-w-2xl">
          Untapped Value in Equipment Manufacturing: From Documentation to
          Customer Experience
        </p>
        <p className="text-sm text-white/30 mb-12">
          A landscape overview of the problems, opportunities, and emerging AI
          applications across the manufacturing value chain
        </p>

        <DownloadBar />

        {/* Section 1: Executive Summary */}
        <SectionHeading number="1" title="Executive Summary" />

        <P>
          Equipment manufacturers sit on an extraordinary, largely untapped
          asset: the knowledge embedded in their technical documentation,
          service history, connected telemetry, and dealer networks. Today, that
          knowledge is fragmented across PDFs, legacy databases, disconnected
          IoT dashboards, and the heads of retiring technicians.
        </P>
        <P>
          The result is a value chain full of friction. Technicians spend more
          than half their day searching for information instead of fixing
          equipment. Dealers lack the tools to deliver premium service
          experiences. Owners of complex, high-value equipment get PDF manuals
          and phone numbers. And OEMs ship connected products that generate data
          nobody acts on.
        </P>
        <P>
          This paper maps the full landscape: where value is being lost at each
          handoff point in the equipment manufacturing ecosystem, where new
          value can be created, and what AI-powered intelligence applications
          look like in practice today. It draws on data from McKinsey, Deloitte,
          BCG, IFS, the Manufacturing Institute, and industry-specific research
          across marine, powersports, automotive, agricultural, and industrial
          equipment sectors.
        </P>
        <P>
          <Bold>
            The core thesis is simple: the companies that figure out how to
            connect documentation, telemetry, and service operations into a
            single intelligence layer will capture the largest share of
            aftermarket value in the next decade. And the window to build that
            advantage is open now.
          </Bold>
        </P>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <StatBox value="25%" label="EBIT margin on aftermarket services" source="McKinsey (30-industry analysis)" />
          <StatBox value="1.9M" label="manufacturing jobs unfilled by 2033" source="Deloitte / Manufacturing Institute, 2024" />
          <StatBox value="$141B" label="IoT in manufacturing market (2025)" source="Fortune Business Insights" />
        </div>

        {/* Section 2: The Landscape */}
        <SectionHeading number="2" title="The Landscape: A Value Chain Under Pressure" />

        <P>
          The equipment manufacturing value chain runs from the OEM through
          dealers and service providers to the end customer. At each handoff
          point, knowledge is lost, context is dropped, and value leaks out of
          the system.
        </P>

        <SubHeading title="The OEM Documentation Investment" />
        <P>
          Equipment manufacturers invest millions in creating technical
          documentation: owner&apos;s manuals, service manuals, parts catalogs,
          technical service bulletins, wiring diagrams, and training materials.
          For a complex product like a marine outboard engine or an industrial
          compressor, the documentation library can run to thousands of pages
          across dozens of documents.
        </P>
        <P>
          Yet this documentation is overwhelmingly distributed as static PDFs or
          printed manuals. It is not searchable in context. It is not connected
          to the specific equipment a technician is working on. It is not linked
          to live telemetry that might indicate which procedure is relevant
          right now. The knowledge exists, but accessing it requires knowing
          where to look, what to search for, and how to interpret what you find.
        </P>
        <P>
          A 2025 manufacturing survey found that 72% of companies have
          &apos;hidden factories&apos; of undocumented fixes and workarounds
          that mask the true extent of maintenance issues. Only 55% of
          businesses have established formal systems for documenting and sharing
          maintenance knowledge between technicians, according to McKinsey
          research. The documentation exists, but the systems to make it useful
          do not.
        </P>

        <SubHeading title="The Dealer Caught in the Middle" />
        <P>
          Independent dealers are the primary customer relationship for most
          equipment manufacturers. They sell the product, service it, sell
          parts, and handle the post-sale experience. They are also chronically
          under-equipped for this role.
        </P>
        <P>
          Most dealers operate with a patchwork of vendor-licensed software: a
          Dealer Management System (DMS) from CDK, Lightspeed, or DealerSocket
          for customer records and scheduling; a separate parts ordering system;
          a separate accounting package; and whatever service documentation the
          OEM provides. These systems rarely talk to each other. The global
          automotive DMS market alone is valued at $4.96 billion (2024),
          projected to reach $11.67 billion by 2034, growing at 8.9% CAGR. The
          investment is massive, but the intelligence layer connecting these
          systems is almost entirely absent.
        </P>
        <P>
          Meanwhile, customer expectations are rising. Studies indicate 68% of
          consumers now prefer digital service scheduling. In automotive,
          customer satisfaction reached an all-time high in 2024 when dealers
          invested in omnichannel experiences. Marine, powersports, and
          industrial equipment dealers face the same expectations but with a
          fraction of the digital infrastructure available to automotive
          retailers.
        </P>

        <SubHeading title="The Technician Crisis" />
        <P>
          The skilled technician shortage is not coming; it is here. The
          manufacturing sector will need 3.8 million new employees between 2024
          and 2033, but 1.9 million of those jobs could remain unfilled,
          representing a 50% fulfillment gap (Deloitte / Manufacturing
          Institute, 2024). Nearly one-third of manufacturing workers are over
          55. The Service Council estimates the global field service industry
          could lose up to 40% of its 20 million personnel to retirement within
          the next three to four years.
        </P>
        <P>
          When experienced technicians retire, they take decades of diagnostic
          intuition with them. This institutional knowledge is rarely
          documented, highly contextual, and impossible to replace through
          standard training programs. The result is a compounding problem: fewer
          technicians, less experienced, with worse tools to find information.
        </P>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <StatBox value="61%" label="of a technician's day spent searching" source="IFS / Reliabilityweb" />
          <StatBox value="25-35%" label="average 'wrench time' in most orgs" source="Fiix Software / industry benchmark" />
          <StatBox value="40%" label="of field service workforce at retirement risk" source="Service Council" />
        </div>

        <P>
          The impact is direct: technicians in most organizations spend only
          25-35% of their day with tools in hand, performing actual maintenance
          work. IFS research found that technicians spend over 60% of their day
          searching systems for tools, parts, and information, plus completing
          administrative paperwork. A lack of job-enabling technology was cited
          as a top challenge by 38% of skilled trade workers, alongside a lack
          of knowledge sharing and collaboration on the jobsite (31%).
        </P>

        <SubHeading title="The Owner Expecting More" />
        <P>
          The end customer, whether they own a $350,000 fishing boat, a fleet of
          commercial vehicles, or industrial processing equipment, expects the
          service experience to match the sophistication of the product they
          purchased. Instead, they get a PDF manual they will never open, a
          phone number for their dealer, and a vague service schedule.
        </P>
        <P>
          This is a massive missed opportunity. Every unanswered owner question
          is a service appointment that did not get scheduled, a part that did
          not get ordered, a warranty issue that went unresolved. The owner is
          the revenue engine of the aftermarket. Engaging them with intelligent,
          contextual, easy-to-use tools turns passive ownership into active
          service revenue for the dealer network.
        </P>

        {/* Section 3: Connected Equipment */}
        <SectionHeading number="3" title="Connected Equipment, Disconnected Value" />

        <P>
          The IoT revolution in manufacturing is real by any measure. The global
          IoT in manufacturing market was valued at $141.18 billion in 2025 and
          is projected to reach $1.1 trillion by 2034, growing at 26.2% CAGR
          (Fortune Business Insights). An estimated 40 billion IoT devices will
          be in operation by 2030. In marine alone, connected equipment
          platforms like Siren Marine, Yacht Sentinel, and OEM-specific
          telematics are becoming standard on new vessels.
        </P>
        <P>
          Yet the data these systems generate overwhelmingly flows into
          dashboards that nobody checks, or generates alerts that lack the
          context needed to act on them. A temperature reading means nothing
          without the documentation that explains what temperature range is
          normal for that engine under those conditions. A high engine-hours
          count means nothing without the service schedule that specifies what
          maintenance is due. Telemetry without documentation context is just
          noise.
        </P>
        <P>
          Research confirms this gap. 75% of IoT projects fail to achieve their
          desired outcomes, often due to poor integration or mismatched
          technology strategies. The missing layer is not more sensors or better
          dashboards. It is the intelligence that connects telemetry to
          documentation to service operations, converting raw data into
          contextual, actionable information delivered to the right person at
          the right time.
        </P>
        <P>
          <Bold>
            This is the intelligence gap: the space between what a manufacturer
            knows (documentation + telemetry) and what the ecosystem can access
            (fragmented PDFs, disconnected dashboards, and the phone number of a
            busy dealer).
          </Bold>
        </P>

        {/* Section 4: Aftermarket */}
        <SectionHeading number="4" title="The Aftermarket Opportunity" />

        <SubHeading title="Shifting to Service-Based Revenue" />
        <P>
          The strategic case for aftermarket services is no longer debatable. A
          McKinsey analysis across 30 industries found that average EBIT margin
          for aftermarket services was 25%, compared to just 10% for new
          equipment sales. BCG reports that service revenue among industrial
          manufacturers grew 10% in 2023, with an expected further 8% increase
          in 2024. Services carry gross margins that are roughly double the
          15-25% typically earned from equipment sales.
        </P>
        <P>
          PMMI&apos;s 2025 Aftermarket Parts and Service report found that over
          the next three years, 96% of OEMs surveyed expect growth in parts
          sales and 94% expect growth in services. Deloitte research shows that
          manufacturers focused on services often have 80% or more of their
          installed base under service contracts, creating recurring revenue
          streams that stabilize the business through economic cycles.
        </P>
        <P>
          The opportunity is clear, but capturing it requires a fundamental
          shift in how OEMs engage with their installed base after the initial
          sale. It requires knowing what equipment is in the field, what
          condition it is in, what service it needs, and which dealer is best
          positioned to deliver that service. This is a knowledge problem.
        </P>

        <SubHeading title="Adjacent Industries Leading the Way" />
        <P>
          Automotive is the most instructive adjacent example. Automotive OEMs
          and their dealer networks have invested billions in connected vehicle
          platforms, digital service scheduling, parts inventory optimization,
          and customer retention systems. The automotive DMS market ($4.96B in
          2024) is a mature ecosystem of interconnected tools that manage the
          customer lifecycle from sale through service.
        </P>
        <P>
          Marine, powersports, agricultural, and industrial equipment
          manufacturers are 5-10 years behind automotive in this
          transformation, but their customers expect the same experience. The
          marine maintenance software market alone is projected to grow from
          $1.28 billion in 2025 to $2.13 billion by 2032. This is a market in
          early-stage acceleration, and the manufacturers and technology
          partners who establish platform positions now will be difficult to
          displace.
        </P>
        <P>
          Heavy equipment manufacturers like Caterpillar and John Deere have led
          the way in fleet telematics and predictive maintenance. The pattern is
          consistent: connect the equipment, then connect the intelligence.
        </P>

        {/* Section 5: AI Value */}
        <SectionHeading number="5" title="Where AI Creates Real Value Today" />

        <P>
          Generative AI and retrieval-augmented generation (RAG) have moved from
          research novelty to production capability. For equipment
          manufacturing, the practical applications fall into four categories
          that map directly to the value chain gaps identified above.
        </P>

        <SubHeading title="Documentation Intelligence" />
        <P>
          The foundational application: ingest a manufacturer&apos;s entire
          documentation library (service manuals, parts catalogs, technical
          bulletins, wiring diagrams) and make it queryable in natural language.
          A technician asks &apos;What oil does the F300 require?&apos; and
          gets the specific oil type, viscosity, capacity, change interval,
          filter part number, and a diagram of the lubrication system, all with
          citations back to the source document and page number.
        </P>
        <P>
          This is not a chatbot. It is a structured retrieval system that
          returns safety warnings, spec tables, step-by-step procedures, and
          parts lists, rendered in a format appropriate for the user (dense and
          procedural for a technician, conversational and action-oriented for an
          owner). The AI layer handles the complexity of understanding the
          question and finding the right information; the output is structured,
          verifiable, and citation-backed.
        </P>

        <SubHeading title="Predictive Service Operations" />
        <P>
          When documentation intelligence is connected to live equipment
          telemetry, the system transitions from reactive to predictive. If a
          vessel has 847 engine hours and the service manual specifies a
          1,000-hour major service, the system can proactively alert the dealer
          and the owner, identify which parts will be needed, check inventory
          availability, and pre-populate a work order. ABB&apos;s research
          suggests predictive maintenance reduces spare parts needs by up to
          40%, and real-time monitoring alone has been shown to reduce unplanned
          downtime by 25%.
        </P>

        <SubHeading title="Customer Experience Transformation" />
        <P>
          For owners and customers, the same intelligence platform can power a
          completely different interface: conversational, branded to the dealer,
          and designed to turn every question into an action (schedule service,
          order parts, contact dealer). This transforms the owner experience
          from &apos;here is a PDF manual&apos; to &apos;ask anything about
          your equipment and we will connect you to what you need.&apos;
        </P>
        <P>
          This is a new category of customer engagement tool that does not exist
          in most equipment verticals today. It creates a direct,
          always-available channel between the owner and the dealer network,
          powered by the OEM&apos;s own documentation and telemetry. Every
          interaction is a potential service revenue event.
        </P>

        <SubHeading title="Fleet-Wide Intelligence" />
        <P>
          At scale, the data flowing through a documentation intelligence
          platform reveals patterns invisible to individual dealers or
          technicians. Which failure modes are most common across a model line?
          Which documentation sections generate the most queries (indicating
          unclear instructions or common problems)? Which dealers are seeing
          unusual service patterns? This is the feedback loop that connects
          field experience back to product development, quality assurance, and
          documentation teams.
        </P>

        {/* Section 6: Two Paths */}
        <SectionHeading number="6" title="The Two Paths: Build New or Enhance Existing" />

        <P>
          Organizations evaluating AI-powered manufacturing intelligence face a
          strategic choice that is actually a spectrum. There are two deployment
          models, and most successful implementations use both.
        </P>

        <SubHeading title="Path A: Purpose-Built Applications" />
        <P>
          Build standalone, tailored tools for specific use cases: a service
          intelligence application for technicians, an owner self-service portal
          for the dealer network, a fleet analytics dashboard for the OEM.
          These applications run on the same underlying intelligence platform
          but present purpose-built interfaces designed for each user&apos;s
          specific workflow and context.
        </P>
        <P>
          This path is faster to deploy (weeks, not months), requires no
          integration with existing vendor systems, and proves value before any
          significant commitment. A working prototype can be built from 2-3
          equipment manuals in under two weeks. It is the right starting point
          for organizations that want to validate the concept before engaging IT
          or negotiating vendor API access.
        </P>

        <SubHeading title="Path B: Embedded Intelligence" />
        <P>
          For organizations that want AI capabilities inside their existing DMS,
          service tools, or customer portals, the intelligence layer can be
          embedded via API. This requires vendor cooperation, API access, and
          deeper technical integration, but it means technicians and dealers do
          not need to learn a new tool. The intelligence surfaces inside the
          systems they already use.
        </P>
        <P>
          In practice, many manufacturers use vendor-licensed software that they
          cannot modify (CDK, Lightspeed, DealerSocket, etc.). Embedded
          intelligence is the longer-term play that follows after standalone
          tools have proven the value and justified the integration investment.
        </P>
        <P>
          <Bold>
            The key insight is that both paths run on the same platform
            underneath: the same documentation ingestion pipeline, the same
            telemetry connections, the same RAG architecture, the same citation
            tracking. Start with whichever path has the lowest friction. Add the
            other when the ROI justifies it.
          </Bold>
        </P>

        {/* Section 7: Framework */}
        <SectionHeading number="7" title="A Framework for Getting Started" />

        <P>
          Manufacturing intelligence is not an all-or-nothing transformation.
          The most successful implementations follow a phased approach that
          proves value incrementally and builds organizational confidence before
          scaling.
        </P>

        <SubHeading title="Phase 1: Prove the Value (1-2 weeks)" />
        <P>
          Start with 2-3 equipment manuals and one use case (service operations,
          owner self-service, or dealer support). Build a working prototype that
          demonstrates documentation intelligence with your actual content. No
          integrations, no IT project, no vendor approvals. The goal is to see
          what is possible with your own data and validate whether the output
          quality is sufficient for your use case.
        </P>

        <SubHeading title="Phase 2: Pilot with Real Users (4-8 weeks)" />
        <P>
          Deploy the prototype with real technicians, dealers, or customers.
          Ingest the full documentation library. Connect telemetry if available.
          Integrate with one or two downstream systems (parts lookup, service
          scheduling). Measure outcomes: time to answer, parts identification
          accuracy, service appointment conversion, user satisfaction.
        </P>

        <SubHeading title="Phase 3: Scale Across the Platform (Ongoing)" />
        <P>
          Expand to multiple equipment models, multiple dealer locations, and
          multiple user types. Add white-labeling for the dealer network.
          Connect additional integration points. Begin capturing fleet-wide
          analytics. Transition from project to platform.
        </P>
        <P>
          <Bold>
            The requirements to start are minimal: 2-3 equipment manuals (PDF is
            fine), one use case to focus on, and one point of contact who knows
            the product and can validate results. Everything else builds from
            there.
          </Bold>
        </P>

        {/* Section 8: Sources */}
        <SectionHeading number="8" title="Sources and References" />

        <div className="space-y-3 text-xs text-white/30 leading-relaxed font-mono">
          <p>[1] McKinsey &amp; Company, &apos;Industrial aftermarket services: Growing the core&apos; &mdash; EBIT margin analysis across 30 industries (25% aftermarket vs. 10% new equipment).</p>
          <p>[2] McKinsey &amp; Company &mdash; 55% of businesses have established formal knowledge-sharing systems between technicians.</p>
          <p>[3] Boston Consulting Group (BCG), &apos;Aftermarket Services Drive Growth and Higher Margins for Industrial Manufacturers,&apos; July 2025 &mdash; Service revenue growth (10% in 2023, 8% expected in 2024), gross margins double equipment sales.</p>
          <p>[4] Deloitte, &apos;Aftermarket services: Digital differentiator beyond COVID-19&apos; &mdash; 80%+ installed base under service contracts, dealer digital tool strategies.</p>
          <p>[5] Deloitte / Manufacturing Institute, &apos;Taking charge: Manufacturers support growth with active workforce strategies,&apos; 2024 &mdash; 3.8M new employees needed by 2033, 1.9M unfilled (50% gap).</p>
          <p>[6] PMMI, &apos;2025 Aftermarket Parts &amp; Service Report&apos; &mdash; 96% of OEMs expect parts growth, 94% expect service growth within three years.</p>
          <p>[7] IFS / Reliabilityweb, &apos;Liberating maintenance technicians,&apos; 2024 &mdash; Technicians spend 61% of day searching systems; wrench time averages 18-30%.</p>
          <p>[8] Heavy Vehicle Inspection (HVI), 2025 manufacturing survey &mdash; 72% of companies have &apos;hidden factories&apos; of undocumented fixes masking true downtime.</p>
          <p>[9] The Service Council &mdash; Global field service industry could lose up to 40% of 20M personnel to retirement within 3-4 years; half of operations experiencing staffing shortages.</p>
          <p>[10] Fortune Business Insights &mdash; IoT in manufacturing market valued at $141.18B (2025), projected $1.1T by 2034 (26.2% CAGR).</p>
          <p>[11] Grand View Research &mdash; Knowledge management software market valued at $20.15B (2024), projected $62.15B by 2033 (13.6% CAGR). Manufacturing holds 16% market share.</p>
          <p>[12] Bureau of Labor Statistics (BLS), January 2026 &mdash; ~415,000 open manufacturing jobs in late 2025; 245,000 employees left in December 2025.</p>
          <p>[13] Fiix Software / Industry benchmark &mdash; Typical wrench time 25-35%; world-class target 55%.</p>
          <p>[14] Future Market Insights &mdash; Automotive DMS market $4.96B (2024), projected $11.67B by 2034 (8.9% CAGR).</p>
          <p>[15] IntelMarket Research &mdash; Marine maintenance software market $1.28B (2025), projected $2.13B by 2032 (9.0% CAGR).</p>
          <p>[16] ABB &mdash; Predictive maintenance reduces spare parts needs by up to 40%; real-time monitoring reduces unplanned downtime by 25%.</p>
          <p>[17] Quickbase &mdash; Nearly one-third of manufacturing workers over age 55.</p>
          <p>[18] Auto Pro Solutions / Industry study &mdash; 68% of consumers prefer digital service scheduling.</p>
          <p>[19] Cox Automotive Consumer Buyer Journey Study, 2024 &mdash; Customer satisfaction reached all-time high (75%) with omnichannel dealer experiences.</p>
          <p>[20] Skilled trades survey (FMA, 2024) &mdash; 38% cite lack of job-enabling technology as top challenge; 31% cite lack of knowledge sharing; 46% plan to adopt more digital tools in 2025.</p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <DownloadBar />
          <p className="text-xs text-white/20 mt-6">
            This document was prepared by Planara Manufacturing Intelligence.
            For questions, to discuss applications for your equipment line, or
            to schedule a prototype demonstration, contact us at{" "}
            <a href="https://planara.com" className="text-planara-teal/60 hover:text-planara-teal">
              planara.com
            </a>
            .
          </p>
        </div>
      </article>
    </main>
  );
}
