import { ChatText, BookOpen } from "@phosphor-icons/react/dist/ssr";

export type KnowledgeGapItem = {
  q: string;
  count: number;
  confidence: "low" | "medium" | "high";
  section: string;
};

export type KnowledgeGapMockProps = {
  topQuestions?: KnowledgeGapItem[];
  theme?: "dark" | "light";
};

const DEFAULTS: Required<Omit<KnowledgeGapMockProps, "theme">> = {
  topQuestions: [
    {
      q: "Idle hunting at warm start",
      count: 47,
      confidence: "low",
      section: "F300 SM · Fuel Injection",
    },
    {
      q: "Trim sensor calibration after replacement",
      count: 31,
      confidence: "medium",
      section: "F300 SM · Power Trim",
    },
    {
      q: "ECU update procedure (2024 firmware)",
      count: 22,
      confidence: "low",
      section: "TSB 2024-07",
    },
    {
      q: "Smart Craft pairing failure recovery",
      count: 18,
      confidence: "medium",
      section: "F300 OM · Networking",
    },
    {
      q: "Anode replacement torque",
      count: 14,
      confidence: "high",
      section: "F300 OM · Lubrication",
    },
  ],
};

const CONFIDENCE_BADGE: Record<
  KnowledgeGapItem["confidence"],
  { label: string; cls: string }
> = {
  low: {
    label: "low conf",
    cls: "bg-amber-400/[0.08] text-amber-300 border-amber-400/30",
  },
  medium: {
    label: "med conf",
    cls: "bg-planara-teal/[0.08] text-planara-teal border-planara-teal/30",
  },
  high: {
    label: "high conf",
    cls: "bg-emerald-400/[0.08] text-emerald-300 border-emerald-400/30",
  },
};

/**
 * Backoffice surface — knowledge-gap detection list.
 */
export function KnowledgeGapMock({
  topQuestions = DEFAULTS.topQuestions,
  theme = "dark",
}: KnowledgeGapMockProps) {
  const isDark = theme === "dark";
  const surfaceBg = isDark ? "bg-planara-dark" : "bg-white";
  const headerBorder = isDark ? "border-white/[0.06]" : "border-planara-border";
  const headerText = isDark ? "text-white/80" : "text-planara-dark";
  const monoMuted = isDark ? "text-white/35" : "text-planara-muted";
  const monoFaint = isDark ? "text-white/30" : "text-planara-muted/70";
  const rowBg = isDark
    ? "bg-white/[0.02] border-white/[0.06]"
    : "bg-planara-light border-planara-border";
  const rowText = isDark ? "text-white/80" : "text-planara-dark";

  return (
    <div className={`${surfaceBg} aspect-[4/3] relative overflow-hidden`}>
      <div className={`px-4 pt-3 pb-2 border-b ${headerBorder} flex items-center gap-2`}>
        <ChatText className="w-3.5 h-3.5 text-planara-teal" weight="duotone" />
        <span className={`text-[10px] font-semibold ${headerText}`}>
          Unanswered questions · last 30 days
        </span>
        <span className={`text-[9px] font-mono ${monoFaint} ml-auto`}>
          {topQuestions.length} open
        </span>
      </div>

      <div className="px-3 py-2.5 space-y-1.5">
        {topQuestions.map((row) => {
          const badge = CONFIDENCE_BADGE[row.confidence];
          return (
            <div
              key={row.q}
              className={`${rowBg} border rounded-sm px-2.5 py-1.5`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-medium ${rowText} flex-1 truncate`}>
                  {row.q}
                </span>
                <span className={`text-[8px] font-mono ${monoMuted} shrink-0`}>
                  {row.count}×
                </span>
                <span
                  className={`text-[7px] font-mono uppercase tracking-wider px-1.5 py-0.5 border rounded-sm shrink-0 ${badge.cls}`}
                >
                  {badge.label}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className={`w-2.5 h-2.5 ${monoFaint}`} weight="duotone" />
                <span className={`text-[8px] font-mono ${monoMuted} truncate`}>
                  {row.section}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
