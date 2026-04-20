"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface FAQItem {
  q: string;
  a: string;
}

const defaultQuestions: FAQItem[] = [
  {
    q: "How long does deployment take?",
    a: "A working prototype from 2-3 of your manuals takes 1-2 weeks. Pilot deployment with your full documentation library, DMS integration, and real technicians runs 4-8 weeks. You see it working with your own data before committing budget.",
  },
  {
    q: "How does Planara integrate with our existing DMS?",
    a: "Adapter architecture connects to existing service management systems — DMS, ERP, CMMS, or custom platforms. Work orders flow in, parts are identified with live inventory, and service scheduling triggers automatically. No rip-and-replace required.",
  },
  {
    q: "What happens when a technician corrects a wrong answer?",
    a: "Corrections follow a draft-to-active lifecycle. The technician flags the issue, a reviewer validates it, and the correction updates the knowledge base for all future queries. Every correction is tracked with a full audit trail.",
  },
  {
    q: "Is our documentation secure?",
    a: "Multi-tenant isolation with per-dealer data separation. Your documentation is never used to train any model. PII is hashed, authentication is enforced at every layer, and on-premises deployment is available for organizations with data residency requirements.",
  },
  {
    q: "What happens when documentation has gaps?",
    a: "The platform detects knowledge gaps automatically. When technicians ask questions the documentation cannot answer with high confidence, those gaps are surfaced to your content team with frequency data and topic clustering. Confidence scoring ensures technicians always know how much to trust a response.",
  },
];

export function SlimFAQ({ questions = defaultQuestions }: { questions?: FAQItem[] }) {
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
