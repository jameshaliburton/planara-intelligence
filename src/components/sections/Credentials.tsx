const stats = [
  { value: "1B+", label: "Users reached" },
  { value: "25+", label: "Fortune 100 clients" },
  { value: "Multiple", label: "Exits" },
];

export function Credentials() {
  return (
    <section id="credentials" className="py-16 md:py-22 bg-planara-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          Why Planara
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-16 max-w-3xl">
          We&apos;ve shipped products used by billions.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-planara-teal pl-6">
              <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-base text-white/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Logo wall placeholder */}
        <div className="border border-white/10 rounded-sm p-8 bg-white/[0.02]">
          <p className="text-xs font-mono uppercase tracking-wider text-white/30 mb-6">
            Leadership experience includes
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {["Google", "Apple", "Uber", "Disney", "Goldman Sachs", "Samsung"].map(
              (name) => (
                <div
                  key={name}
                  className="text-center text-sm font-medium text-white/20 py-4"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-white">Planara</p>
            <p className="text-xs text-white/30 mt-1">
              Manufacturing Intelligence
            </p>
          </div>
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Planara. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
