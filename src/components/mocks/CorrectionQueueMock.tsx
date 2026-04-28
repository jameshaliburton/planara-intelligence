import { GitBranch, User } from "@phosphor-icons/react/dist/ssr";

export type CorrectionStatus = "submitted" | "validated" | "live";

export type CorrectionItem = {
  status: CorrectionStatus;
  submittedBy: string;
  snippet: string;
  source?: string;
};

export type CorrectionQueueMockProps = {
  corrections?: CorrectionItem[];
  theme?: "dark" | "light";
};

const STATUS_PILL: Record<
  CorrectionStatus,
  { label: string; cls: string }
> = {
  submitted: {
    label: "submitted",
    cls: "bg-amber-400/[0.1] text-amber-300 border-amber-400/30",
  },
  validated: {
    label: "validated",
    cls: "bg-planara-teal/[0.1] text-planara-teal border-planara-teal/30",
  },
  live: {
    label: "live",
    cls: "bg-emerald-400/[0.1] text-emerald-300 border-emerald-400/30",
  },
};

const DEFAULTS: Required<Omit<CorrectionQueueMockProps, "theme">> = {
  corrections: [
    {
      status: "submitted",
      submittedBy: "M. Reyes",
      snippet:
        "TSB 2024-07 supersedes OM torque. Replace 38 N·m with 42 N·m on flywheel bolt.",
      source: "F300 OM · p.184",
    },
    {
      status: "validated",
      submittedBy: "K. Tanaka",
      snippet:
        "Anode kit number changed for 2024 production: 6BG-11325-00 not 6CB-11325-01.",
      source: "Parts catalog · 2024",
    },
    {
      status: "live",
      submittedBy: "D. Okafor",
      snippet:
        "Tell-tale water passage clears overheating in ~30% of cases — surface before thermostat replacement.",
      source: "F300 SM · Cooling",
    },
    {
      status: "submitted",
      submittedBy: "S. Patel",
      snippet:
        "ECU pairing requires key cycle off/on after firmware push — OM omits this step.",
      source: "TSB 2024-07",
    },
  ],
};

/**
 * Backoffice surface — technician correction review queue.
 */
export function CorrectionQueueMock({
  corrections = DEFAULTS.corrections,
  theme = "dark",
}: CorrectionQueueMockProps) {
  const isDark = theme === "dark";
  const surfaceBg = isDark ? "bg-planara-dark" : "bg-white";
  const headerBorder = isDark ? "border-white/[0.06]" : "border-planara-border";
  const headerText = isDark ? "text-white/80" : "text-planara-dark";
  const monoMuted = isDark ? "text-white/35" : "text-planara-muted";
  const monoFaint = isDark ? "text-white/30" : "text-planara-muted/70";
  const rowBg = isDark
    ? "bg-white/[0.02] border-white/[0.06]"
    : "bg-planara-light border-planara-border";
  const bodyText = isDark ? "text-white/75" : "text-planara-dark/85";

  return (
    <div className={`${surfaceBg} aspect-[4/3] relative overflow-hidden`}>
      <div className={`px-4 pt-3 pb-2 border-b ${headerBorder} flex items-center gap-2`}>
        <GitBranch className="w-3.5 h-3.5 text-planara-teal" weight="duotone" />
        <span className={`text-[10px] font-semibold ${headerText}`}>
          Correction queue
        </span>
        <span className={`text-[9px] font-mono ${monoFaint} ml-auto`}>
          {corrections.length} pending review
        </span>
      </div>

      <div className="px-3 py-2.5 space-y-1.5">
        {corrections.map((c, i) => {
          const pill = STATUS_PILL[c.status];
          return (
            <div
              key={`${c.submittedBy}-${i}`}
              className={`${rowBg} border rounded-sm px-2.5 py-1.5`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-[7px] font-mono uppercase tracking-wider px-1.5 py-0.5 border rounded-sm ${pill.cls}`}
                >
                  {pill.label}
                </span>
                <div className="flex items-center gap-1 ml-auto">
                  <User className={`w-2.5 h-2.5 ${monoFaint}`} weight="duotone" />
                  <span className={`text-[8px] font-mono ${monoMuted}`}>
                    {c.submittedBy}
                  </span>
                </div>
              </div>
              <p className={`text-[9px] ${bodyText} leading-snug mb-1`}>
                {c.snippet}
              </p>
              {c.source ? (
                <p className={`text-[8px] font-mono ${monoMuted} truncate`}>
                  {c.source}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
