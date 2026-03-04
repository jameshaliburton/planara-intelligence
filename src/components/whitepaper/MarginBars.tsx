"use client";

import { useEffect, useRef, useState } from "react";

export function MarginBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="my-12 py-8 px-6 border border-white/[0.06] rounded-lg bg-white/[0.015]"
    >
      <div className="flex justify-center gap-16 md:gap-24">
        {/* New Equipment */}
        <div className="flex flex-col items-center">
          <p
            className={`text-3xl md:text-4xl font-bold text-white/40 mb-4 transition-opacity duration-500 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            10%
          </p>
          <div className="h-44 flex items-end justify-center">
            <div
              className="w-16 md:w-20 bg-white/[0.08] rounded-t-sm transition-all duration-1000 ease-out"
              style={{ height: visible ? 70 : 0 }}
            />
          </div>
          <p className="text-xs text-white/40 mt-4 text-center">
            New Equipment
            <br />
            Sales
          </p>
        </div>

        {/* Aftermarket */}
        <div className="flex flex-col items-center">
          <p
            className={`text-3xl md:text-4xl font-bold text-planara-teal mb-4 transition-opacity duration-500 delay-200 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            25%
          </p>
          <div className="h-44 flex items-end justify-center">
            <div
              className="w-16 md:w-20 bg-planara-teal/20 border border-planara-teal/25 rounded-t-sm transition-all duration-1000 ease-out"
              style={{
                height: visible ? 176 : 0,
                transitionDelay: "200ms",
              }}
            />
          </div>
          <p className="text-xs text-white/40 mt-4 text-center">
            Aftermarket
            <br />
            Services
          </p>
        </div>
      </div>

      <p className="text-[10px] text-white/20 text-center mt-6 font-mono">
        Average EBIT margin &mdash; McKinsey 30-industry analysis
      </p>
    </div>
  );
}
