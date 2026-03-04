export function Problem() {
  const stats = [
    {
      value: "70%",
      label: "of equipment downtime",
      detail: "caused by incomplete or inaccessible knowledge",
    },
    {
      value: "30%",
      label: "of technician time",
      detail: "spent searching for the right information",
    },
    {
      value: "$0",
      label: "value captured",
      detail: "from connected equipment telemetry today",
    },
  ];

  return (
    <section id="problem" className="py-24 md:py-32 bg-white border-b border-planara-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
          The Problem
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-16 max-w-3xl">
          Billions in documentation. Zero intelligence.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.value} className="border-l-2 border-planara-teal pl-6">
              <p className="text-5xl md:text-6xl font-bold text-planara-dark tracking-tight">
                {stat.value}
              </p>
              <p className="text-lg font-semibold text-planara-dark mt-2">
                {stat.label}
              </p>
              <p className="text-base text-planara-muted mt-1 leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
