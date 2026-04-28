import {
  BookOpen,
  ChatText,
  ShieldWarning,
} from "@phosphor-icons/react/dist/ssr";

export type TechnicianChatMockProps = {
  question?: string;
  specs?: Array<[string, string]>;
  safetyText?: string;
  citation?: string;
  equipmentLabel?: string;
  /** Frame aspect ratio. portrait = iPad portrait, landscape = 16/10, square = 1/1. */
  aspect?: "portrait" | "landscape" | "square";
  theme?: "dark" | "light";
};

const DEFAULT_PROPS: Required<
  Omit<TechnicianChatMockProps, "aspect" | "theme">
> = {
  question: "What oil does the F300 require?",
  specs: [
    ["Type", "YAMALUBE 4-M FC-W"],
    ["Viscosity", "SAE 10W-30"],
    ["Capacity", "7.1L"],
    ["Filter", "69J-13440-04"],
    ["Interval", "100 hrs · annually"],
  ],
  safetyText:
    "Run engine to operating temperature before draining. Hot oil flows more completely. Use caution — surfaces will be hot.",
  citation: "F300 Owner's Manual · Lubrication · p.42",
  equipmentLabel: "F300 · 847 hrs",
};

const ASPECT_CLASS: Record<NonNullable<TechnicianChatMockProps["aspect"]>, string> = {
  portrait: "aspect-[834/1194]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
};

/**
 * Faithful skeleton of the Conduit technician chat surface.
 * Matches the iPad capture used as the marketing reference.
 */
export function TechnicianChatMock({
  question = DEFAULT_PROPS.question,
  specs = DEFAULT_PROPS.specs,
  safetyText = DEFAULT_PROPS.safetyText,
  citation = DEFAULT_PROPS.citation,
  equipmentLabel = DEFAULT_PROPS.equipmentLabel,
  aspect = "portrait",
  theme = "dark",
}: TechnicianChatMockProps) {
  const isDark = theme === "dark";
  const surfaceBg = isDark ? "bg-[#0B0E14]" : "bg-white";
  const frameBorder = isDark ? "border-white/15" : "border-planara-border";
  const fadeFrom = isDark ? "from-[#0B0E14]" : "from-white";
  const headerBorder = isDark ? "border-white/[0.06]" : "border-planara-border";
  const subtleBorder = isDark ? "border-white/10" : "border-planara-border";
  const labelText = isDark ? "text-white/80" : "text-planara-dark";
  const mutedText = isDark ? "text-white/30" : "text-planara-muted";
  const monoMuted = isDark ? "text-white/40" : "text-planara-muted";
  const bodyText = isDark ? "text-white/85" : "text-planara-dark";
  const valueText = isDark ? "text-white/85" : "text-planara-dark";
  const stripe = isDark ? "bg-white/[0.015]" : "bg-planara-light/40";
  const cardBg = isDark
    ? "bg-white/[0.03] border-white/10"
    : "bg-planara-light border-planara-border";
  const bubbleBg = isDark
    ? "bg-planara-teal/10 border-planara-teal/20"
    : "bg-planara-teal/[0.08] border-planara-teal/30";
  const inputBg = isDark
    ? "bg-white/[0.04] border-white/10"
    : "bg-planara-light border-planara-border";

  return (
    <div className="relative w-full">
      <div
        className={`relative ${ASPECT_CLASS[aspect]} ${
          aspect === "portrait" ? "rounded-[28px]" : "rounded-lg"
        } border ${frameBorder} ${surfaceBg} ${
          isDark
            ? "shadow-[0_30px_120px_-30px_rgba(67,206,214,0.25)]"
            : "shadow-sm"
        } overflow-hidden`}
      >
        {/* Status bar */}
        <div className={`absolute top-0 left-0 right-0 px-6 pt-3 pb-2 flex items-center justify-between text-[10px] font-mono ${monoMuted}`}>
          <span>9:41</span>
          <span>app.planara.com</span>
        </div>

        {/* Header */}
        <div className={`absolute top-9 left-0 right-0 px-5 py-3 border-b ${headerBorder} flex items-center gap-2`}>
          <div className="w-6 h-6 rounded-full bg-planara-teal/20 flex items-center justify-center">
            <BookOpen className="w-3.5 h-3.5 text-planara-teal" weight="duotone" />
          </div>
          <span className={`text-xs font-semibold ${labelText}`}>Conduit</span>
          <span className={`text-[10px] font-mono ${mutedText} ml-auto truncate max-w-[55%] text-right`}>
            {equipmentLabel}
          </span>
        </div>

        {/* Question bubble */}
        <div className="absolute top-24 left-5 right-5">
          <div className={`ml-auto max-w-[85%] ${bubbleBg} border rounded-2xl rounded-tr-sm px-4 py-2.5`}>
            <div className="flex items-start gap-1.5">
              <ChatText className="w-3 h-3 text-planara-teal/70 shrink-0 mt-1" weight="duotone" />
              <p className={`text-xs ${bodyText} leading-relaxed`}>{question}</p>
            </div>
          </div>
        </div>

        {/* Answer card */}
        <div className="absolute top-44 left-5 right-5">
          <div className={`${cardBg} border rounded-2xl rounded-tl-sm overflow-hidden`}>
            <div className="px-4 pt-4 pb-3">
              <p className={`text-[10px] font-mono uppercase tracking-wider ${mutedText} mb-2`}>
                Specifications
              </p>
              {specs.map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex items-center justify-between text-[11px] py-1 ${
                    i % 2 === 0 ? stripe : ""
                  } px-2 -mx-2 rounded-sm`}
                >
                  <span className={`font-mono ${monoMuted}`}>{k}</span>
                  <span className={`${valueText} font-medium`}>{v}</span>
                </div>
              ))}
            </div>

            {safetyText ? (
              <div className="px-4 pb-4">
                <div className="flex items-start gap-2 p-2.5 border border-amber-400/25 bg-amber-400/[0.04] rounded-sm">
                  <ShieldWarning
                    className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5"
                    weight="duotone"
                  />
                  <p className={`text-[10px] ${isDark ? "text-white/65" : "text-planara-dark/70"} leading-relaxed`}>
                    {safetyText}
                  </p>
                </div>
              </div>
            ) : null}

            {citation ? (
              <div className={`border-t ${headerBorder} px-4 py-2.5 flex items-center gap-1.5`}>
                <BookOpen className={`w-3 h-3 ${isDark ? "text-white/25" : "text-planara-muted/60"}`} weight="duotone" />
                <span className={`text-[10px] font-mono ${isDark ? "text-white/35" : "text-planara-muted"} truncate`}>
                  {citation}
                </span>
              </div>
            ) : null}
          </div>
        </div>

        {/* Bottom fade */}
        <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${fadeFrom} to-transparent`} />

        {/* Input bar */}
        <div className="absolute bottom-6 left-5 right-5">
          <div className={`flex items-center gap-2 ${inputBg} border rounded-full px-4 py-2.5`}>
            <ChatText className={`w-3.5 h-3.5 ${mutedText}`} weight="duotone" />
            <span className={`text-[11px] font-mono ${mutedText}`}>
              Ask about the equipment…
            </span>
          </div>
        </div>

        {/* Subtle border below input on light theme */}
        {!isDark && (
          <div className={`absolute bottom-0 left-0 right-0 h-px ${subtleBorder}`} />
        )}
      </div>
    </div>
  );
}
