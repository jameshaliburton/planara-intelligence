export interface FAQItem {
  q: string;
  a: string;
}

/**
 * Mirrors the four questions rendered by `src/components/sections/FAQ.tsx`
 * so the FAQPage JSON-LD on the homepage matches the visible content.
 */
export const homepageFAQ: FAQItem[] = [
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
