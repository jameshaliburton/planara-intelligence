export function TheAsk() {
  return (
    <section id="the-ask" className="py-24 md:py-32 bg-white border-b border-planara-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            The Ask
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6">
            Working prototype in 1-2 weeks.
          </h2>
          <p className="text-lg text-planara-muted leading-relaxed mb-10">
            We need three things to build a working proof of concept with your
            actual equipment documentation:
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex gap-4">
              <span className="text-2xl font-bold text-planara-teal shrink-0 w-8">
                1
              </span>
              <div>
                <p className="text-base font-semibold text-planara-dark">
                  2-3 equipment manuals
                </p>
                <p className="text-sm text-planara-muted mt-1">
                  Owner&apos;s manual, service manual, or technical bulletins.
                  PDF is fine.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl font-bold text-planara-teal shrink-0 w-8">
                2
              </span>
              <div>
                <p className="text-base font-semibold text-planara-dark">
                  One use case
                </p>
                <p className="text-sm text-planara-muted mt-1">
                  Service operations, dealer support, owner self-service — pick
                  the one that matters most.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl font-bold text-planara-teal shrink-0 w-8">
                3
              </span>
              <div>
                <p className="text-base font-semibold text-planara-dark">
                  One point of contact
                </p>
                <p className="text-sm text-planara-muted mt-1">
                  Someone who knows the product and can validate results.
                  30 minutes a week.
                </p>
              </div>
            </div>
          </div>

          <a
            href="mailto:eric@planara.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-planara-dark text-white font-semibold rounded-sm hover:bg-planara-dark/90 transition-colors"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </section>
  );
}
