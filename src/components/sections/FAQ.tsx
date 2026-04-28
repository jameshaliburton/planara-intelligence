"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const questions = [
  {
    q: "Why can't we just use ChatGPT or Copilot with our documentation?",
    a: "Generic AI assistants are built for general knowledge work — summaries, drafts, open-ended questions. Equipment service requires structured, safety-critical output: spec tables, procedural steps with mandatory sequences, parts lists with real SKUs, and verifiable citations to specific manual pages. A wrong answer about lubrication specs means a seized engine, not a bad email. Conduit is built for that context.",
  },
  {
    q: "What makes this different from a knowledge base or search tool?",
    a: "Knowledge bases require users to know what to search for. Conduit understands the question in context — cross-referencing documentation with available service history, equipment configuration, and (where connected) live telemetry. Ask \"why is my engine overheating?\" and get a diagnostic procedure that takes your equipment into account, not a generic article.",
  },
  {
    q: "What about data security and proprietary documentation?",
    a: "Your documentation stays yours. Conduit processes documents through a private, isolated pipeline. No training on your data, no sharing across tenants, no third-party access. Each manufacturer's knowledge base is fully separate.",
  },
  {
    q: "How long does it take to see results?",
    a: "A working prototype from 2–3 manuals takes 1–2 weeks. You'll see your own documentation returning structured, citation-backed answers before committing any budget. The pilot phase (4–8 weeks) layers in telemetry where available, surface integrations, and real user testing.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id="faq" className="py-16 md:py-22 bg-planara-navy">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          Common questions
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
