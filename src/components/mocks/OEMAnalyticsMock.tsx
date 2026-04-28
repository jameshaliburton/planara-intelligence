import { ChartLineUp, ChatText } from "@phosphor-icons/react/dist/ssr";

export type OEMAnalyticsMockProps = {
  equipmentLabel?: string;
  topQuestions?: Array<{ q: string; count: number }>;
  theme?: "dark" | "light";
};

const DEFAULTS: Required<Omit<OEMAnalyticsMockProps, "theme">> = {
  equipmentLabel: "F300",
  topQuestions: [
    { q: "Idle hunting at warm start", count: 47 },
    { q: "Trim sensor calibration", count: 31 },
    { q: "ECU update procedure (2024)", count: 22 },
    { q: "Smart Craft pairing failure", count: 18 },
  ],
};

/**
 * Faithful skeleton of the OEM fleet analytics surface.
 * Dark theme by default — feels like an internal console.
 */
export function OEMAnalyticsMock({
  equipmentLabel = DEFAULTS.equipmentLabel,
  topQuestions = DEFAULTS.topQuestions,
  theme = "dark",
}: OEMAnalyticsMockProps) {
  const isDark = theme === "dark";
  const surfaceBg = isDark ? "bg-planara-dark" : "bg-white";
  const headerBorder = isDark ? "border-white/[0.06]" : "border-planara-border";
  const headerText = isDark ? "text-white/80" : "text-planara-dark";
  const monoMuted = isDark ? "text-white/35" : "text-planara-muted";
  const monoFaint = isDark ? "text-white/30" : "text-planara-muted/70";
  const rowBg = isDark
    ? "bg-white/[0.02] border-white/[0.06]"
    : "bg-planara-light border-planara-border";
  const rowText = isDark ? "text-white/70" : "text-planara-dark/85";
  const fadeFrom = isDark ? "from-planara-dark" : "from-white";

  return (
    <div className={`${surfaceBg} aspect-[4/3] relative overflow-hidden`}>
      <div className={`px-4 pt-3 pb-2 border-b ${headerBorder} flex items-center gap-2`}>
        <ChartLineUp className="w-3.5 h-3.5 text-planara-teal" weight="duotone" />
        <span className={`text-[10px] font-semibold ${headerText}`}>
          Fleet analytics · {equipmentLabel}
        </span>
        <span className={`text-[9px] font-mono ${monoFaint} ml-auto`}>
          last 30d
        </span>
      </div>
      <div className="px-4 py-3">
        <p className={`text-[9px] font-mono uppercase tracking-wider ${monoMuted} mb-2`}>
          Top unanswered questions
        </p>
        <div className="space-y-1.5">
          {topQuestions.map((row) => (
            <div
              key={row.q}
              className={`flex items-center gap-2 px-2 py-1 ${rowBg} border rounded-sm`}
            >
              <ChatText className="w-2.5 h-2.5 text-planara-teal/60 shrink-0" weight="duotone" />
              <span className={`text-[9px] ${rowText} flex-1 truncate`}>
                {row.q}
              </span>
              <span className={`text-[9px] font-mono ${monoMuted}`}>
                {row.count}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t ${fadeFrom} to-transparent`} />
    </div>
  );
}
