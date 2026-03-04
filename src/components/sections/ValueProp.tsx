import { MapPin } from "lucide-react";

export function ValueProp() {
  return (
    <section id="value-prop" className="py-24 md:py-32 bg-planara-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          Two Paths, One Platform
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          Build what you need. Integrate when you can.
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mb-16 leading-relaxed">
          Not every organization can modify their vendor software — and they
          shouldn&apos;t have to. Planara supports both purpose-built tools and
          embedded intelligence, running on the same platform.
        </p>

        {/* Diagram */}
        <div className="max-w-4xl mx-auto">
          {/* Two tracks side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Track A */}
            <div className="relative border-2 border-planara-teal/40 bg-planara-teal/[0.04] rounded-sm p-6">
              {/* You are here */}
              <div className="flex items-center gap-1.5 mb-5">
                <MapPin className="w-3.5 h-3.5 text-planara-teal" strokeWidth={2} />
                <span className="text-[10px] font-mono uppercase tracking-wider text-planara-teal font-medium">
                  You are here
                </span>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-wider text-planara-teal/50 block mb-2">
                Track A
              </span>
              <h3 className="text-lg font-semibold text-white mb-3">
                Purpose-Built Tools
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5">
                Planara builds tailored applications for your specific use cases.
                The two demos on this page are examples. Standalone, branded to
                your dealer network, runs on your documentation and telemetry.
              </p>

              <div className="space-y-2.5">
                <TrackItem text="No vendor negotiation" />
                <TrackItem text="No IT approval needed" />
                <TrackItem text="Deployed in weeks, not months" />
                <TrackItem text="White-labeled per dealer" />
              </div>

              <div className="mt-5 pt-4 border-t border-planara-teal/15">
                <p className="text-xs font-mono text-planara-teal/50">
                  Most clients start here
                </p>
              </div>
            </div>

            {/* Track B */}
            <div className="border border-white/10 bg-white/[0.02] rounded-sm p-6">
              <div className="h-[26px] mb-5" /> {/* Spacer to align with Track A marker */}

              <span className="text-[10px] font-mono uppercase tracking-wider text-white/25 block mb-2">
                Track B
              </span>
              <h3 className="text-lg font-semibold text-white/60 mb-3">
                Embedded Intelligence
              </h3>
              <p className="text-sm text-white/35 leading-relaxed mb-5">
                For organizations that want AI capabilities inside their existing
                DMS, service tools, or customer portals. Requires API access and
                vendor cooperation.
              </p>

              <div className="space-y-2.5">
                <TrackItem text="Lives inside existing software" muted />
                <TrackItem text="Requires vendor API access" muted />
                <TrackItem text="Deeper integration, longer timeline" muted />
                <TrackItem text="Add when ROI justifies the effort" muted />
              </div>

              <div className="mt-5 pt-4 border-t border-white/5">
                <p className="text-xs font-mono text-white/20">
                  Add later when proven
                </p>
              </div>
            </div>
          </div>

          {/* Connector lines — vertical pipes into shared platform */}
          <div className="hidden md:flex justify-center gap-6 mb-0">
            <div className="w-[calc(50%-12px)] flex justify-center">
              <div className="w-px h-6 bg-planara-teal/30" />
            </div>
            <div className="w-[calc(50%-12px)] flex justify-center">
              <div className="w-px h-6 bg-white/10" />
            </div>
          </div>

          {/* Shared platform block */}
          <div className="border border-white/10 bg-white/[0.02] rounded-sm px-6 py-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-planara-teal/60" />
                <span className="text-sm font-mono text-white/50">
                  Planara Intelligence Platform
                </span>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                <span className="text-xs font-mono text-white/20">RAG Pipeline</span>
                <span className="text-xs font-mono text-white/20">Doc Ingestion</span>
                <span className="text-xs font-mono text-white/20">Telemetry</span>
                <span className="text-xs font-mono text-white/20">Multi-model</span>
              </div>
            </div>
          </div>

          {/* Annotation */}
          <div className="mt-8 flex items-start gap-3">
            <MapPin className="w-4 h-4 text-planara-teal shrink-0 mt-0.5" strokeWidth={1.5} />
            <p className="text-sm text-white/50 leading-relaxed">
              <span className="text-white/80 font-medium">
                This demo was built in under 2 weeks from a single owner&apos;s manual.
              </span>{" "}
              No integrations, no IT project, no vendor approvals. A working
              prototype that proves the value before you commit to anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrackItem({ text, muted = false }: { text: string; muted?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className={`w-1 h-1 rounded-full shrink-0 ${muted ? "bg-white/15" : "bg-planara-teal/50"}`} />
      <span className={`text-sm ${muted ? "text-white/30" : "text-white/60"}`}>
        {text}
      </span>
    </div>
  );
}
