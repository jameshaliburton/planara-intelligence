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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px max-w-4xl">
          {/* Track A */}
          <div className="relative pr-0 md:pr-8">
            <p className="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-1.5">
              Track A
            </p>
            <h3 className="text-base font-semibold text-white mb-3">
              Purpose-Built Tools
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              Planara builds tailored applications for your specific use
              cases — the two demos on this page are examples. Standalone,
              branded to your dealer network, running on your documentation
              and telemetry. No vendor negotiation, no IT approval needed,
              deployed in weeks.
            </p>

            {/* Divider */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-white/[0.06]" />
          </div>

          {/* Track B */}
          <div className="pl-0 md:pl-8 mt-8 md:mt-0">
            <p className="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-1.5">
              Track B
            </p>
            <h3 className="text-base font-semibold text-white mb-3">
              Embedded Intelligence
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              For organizations that want AI capabilities inside their
              existing DMS, service tools, or customer portals. Requires
              API access and vendor cooperation. Deeper integration,
              longer timeline — add when the ROI justifies the effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
