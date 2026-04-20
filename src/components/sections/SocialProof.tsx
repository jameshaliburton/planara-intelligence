"use client";

import Image from "next/image";

const stats = [
  { value: "1B+", label: "Users reached by our team" },
  { value: "25+", label: "Fortune 100 clients served" },
  { value: "Multiple", label: "Exits" },
];

const prominentLogos = ["Ford", "Airbus"];
const otherLogos = ["Google", "Apple", "Uber", "Disney", "Goldman Sachs", "Samsung"];

export function SocialProof() {
  return (
    <section id="social-proof" className="py-16 md:py-22 bg-planara-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          Our Team&apos;s Track Record
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 max-w-3xl">
          Leadership from Ford, Airbus,
          <br />
          Google, Apple, and beyond.
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mb-16 leading-relaxed">
          Our team has shipped products used by billions at the world&apos;s
          largest companies. Now we apply that to manufacturing intelligence.
        </p>

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

        {/* Logo wall */}
        <div className="border border-white/10 rounded-sm p-8 bg-white/[0.02]">
          <p className="text-xs font-mono uppercase tracking-wider text-white/30 mb-8">
            Leadership experience includes
          </p>
          {/* Prominent logos */}
          <div className="flex justify-center gap-12 mb-8">
            {prominentLogos.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center"
              >
                <Image
                  src={`/logos/${name.toLowerCase()}.svg`}
                  alt={name}
                  width={120}
                  height={40}
                  className="opacity-50"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling;
                    if (fallback) (fallback as HTMLElement).style.display = "block";
                  }}
                />
                <span
                  className="text-lg font-bold text-white/50 tracking-wide hidden"
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
          {/* Other logos */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {otherLogos.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center py-4"
              >
                <Image
                  src={`/logos/${name.toLowerCase().replace(/\s+/g, "-")}.svg`}
                  alt={name}
                  width={80}
                  height={28}
                  className="opacity-20"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling;
                    if (fallback) (fallback as HTMLElement).style.display = "block";
                  }}
                />
                <span
                  className="text-sm font-medium text-white/20 hidden"
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
