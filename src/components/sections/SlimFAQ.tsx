"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { homepageFAQ, type FAQItem } from "@/lib/faqs";

export function SlimFAQ({ questions = homepageFAQ }: { questions?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="py-16 md:py-22 bg-planara-navy">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          Common Questions
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-16 max-w-2xl">
          What buyers ask us.
        </h2>

        <div className="divide-y divide-white/[0.06]">
          {questions.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left group"
              >
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors leading-relaxed">
                  {item.q}
                </span>
                <CaretDown
                  className={cn(
                    "w-4 h-4 text-planara-teal/60 shrink-0 mt-0.5 transition-transform duration-200",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-200 ease-out",
                  openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-white/45 leading-relaxed pb-5">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
