"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
  {
    q: "Why can't we just use ChatGPT / Copilot with our documentation?",
    a: "Generic AI assistants are designed for general knowledge work — summarizing documents, drafting emails, answering questions. Manufacturing documentation requires structured, safety-critical output: spec tables, procedural steps with mandatory sequences, parts lists with real SKUs, system diagrams, and verifiable citations to specific manual pages. A wrong answer about lubrication specs means a seized engine, not a bad email. Planara is built for this context.",
  },
  {
    q: "What makes this different from a knowledge base or search tool?",
    a: "Knowledge bases require users to know what to search for. Planara understands the question in context — cross-referencing documentation with live equipment telemetry, service history, and parts availability. Ask \"why is my engine overheating?\" and get a diagnostic procedure informed by your actual coolant temperature, not a generic article.",
  },
  {
    q: "How does this connect to our existing dealer software?",
    a: "Two ways. Planara can run as a standalone application alongside your existing tools — no integration required to start. When you're ready, it connects via API to dealer management systems (CDK, Lightspeed, DealerSocket), parts ordering, service scheduling, and work order systems. Every CTA in the demos above maps to a real integration point.",
  },
  {
    q: "What about data security and proprietary documentation?",
    a: "Your documentation stays yours. Planara processes documents through a private, isolated pipeline. No training on your data, no sharing across customers, no third-party access. Each manufacturer's knowledge base is completely separate.",
  },
  {
    q: "How long does it take to see results?",
    a: "A working prototype from 2-3 manuals takes 1-2 weeks. You'll see your own documentation returning structured, citation-backed responses before committing any budget. The pilot phase (4-8 weeks) adds telemetry, integrations, and real user testing.",
  },
  {
    q: "Does this work for equipment beyond marine?",
    a: "Yes. The platform works with any complex equipment that has technical documentation — powersports, HVAC, industrial machinery, agricultural equipment, medical devices. The marine demo on this page is one example built from Yamaha outboard documentation. The architecture is equipment-agnostic.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id="faq" className="py-24 md:py-32 bg-planara-navy">
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
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-planara-teal/60 shrink-0 mt-0.5 transition-transform duration-200",
                    openIndex === i && "rotate-180"
                  )}
                  strokeWidth={1.5}
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
