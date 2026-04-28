import {
  ListChecks,
  Wrench,
  ShieldWarning,
} from "@phosphor-icons/react/dist/ssr";

export type ProcedureStep = {
  title: string;
  detail?: string;
  torque?: string;
  tool?: string;
  warning?: string;
};

export type ProcedureMockProps = {
  procedureTitle?: string;
  steps?: ProcedureStep[];
  citation?: string;
  theme?: "dark" | "light";
};

const DEFAULTS: Required<Omit<ProcedureMockProps, "theme">> = {
  procedureTitle: "Anode inspection & replacement · F300",
  steps: [
    {
      title: "Park engine vertical and remove cowling",
      detail: "Engine off, ignition disconnected. Surfaces cool.",
    },
    {
      title: "Remove anode retainer bolt",
      torque: "11 N·m (8 ft-lb)",
      tool: "10 mm hex socket",
    },
    {
      title: "Inspect anode — replace if <50% remaining",
      warning:
        "Do NOT paint anodes. Paint insulates the anode and disables corrosion protection.",
    },
    {
      title: "Install new anode and torque to spec",
      torque: "11 N·m (8 ft-lb)",
      tool: "Torque wrench · 10 mm hex",
    },
  ],
  citation: "F300 OM · Lubrication · p.42",
};

/**
 * Faithful skeleton of the procedure card surface — numbered steps with
 * torque/tool callouts and an inline safety warning chip.
 */
export function ProcedureMock({
  procedureTitle = DEFAULTS.procedureTitle,
  steps = DEFAULTS.steps,
  citation = DEFAULTS.citation,
  theme = "dark",
}: ProcedureMockProps) {
  const isDark = theme === "dark";
  const surfaceBg = isDark ? "bg-[#0B0E14]" : "bg-white";
  const headerBorder = isDark ? "border-white/[0.06]" : "border-planara-border";
  const headerText = isDark ? "text-white/80" : "text-planara-dark";
  const monoMuted = isDark ? "text-white/35" : "text-planara-muted";
  const stepBg = isDark
    ? "bg-white/[0.02] border-white/[0.06]"
    : "bg-planara-light border-planara-border";
  const stepText = isDark ? "text-white/85" : "text-planara-dark";
  const detailText = isDark ? "text-white/55" : "text-planara-muted";
  const chipBg = isDark
    ? "bg-planara-teal/[0.08] border-planara-teal/30 text-planara-teal"
    : "bg-planara-teal/[0.06] border-planara-teal/30 text-planara-teal";

  return (
    <div className={`${surfaceBg} aspect-[4/3] relative overflow-hidden border ${headerBorder} rounded-lg`}>
      <div className={`px-4 pt-3 pb-2 border-b ${headerBorder} flex items-center gap-2`}>
        <ListChecks className="w-3.5 h-3.5 text-planara-teal" weight="duotone" />
        <span className={`text-[10px] font-semibold ${headerText} truncate`}>
          {procedureTitle}
        </span>
      </div>

      <div className="px-3 py-3 space-y-1.5">
        {steps.map((s, i) => (
          <div key={i} className={`${stepBg} border rounded-sm px-2.5 py-1.5`}>
            <div className="flex items-start gap-2">
              <span className="text-[9px] font-mono text-planara-teal shrink-0 mt-0.5 w-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <p className={`text-[10px] font-medium ${stepText} leading-snug`}>
                  {s.title}
                </p>
                {s.detail ? (
                  <p className={`text-[9px] ${detailText} leading-snug mt-0.5`}>
                    {s.detail}
                  </p>
                ) : null}
                <div className="flex flex-wrap gap-1 mt-1">
                  {s.torque ? (
                    <span className={`text-[7px] font-mono px-1.5 py-0.5 border rounded-sm ${chipBg}`}>
                      {s.torque}
                    </span>
                  ) : null}
                  {s.tool ? (
                    <span
                      className={`text-[7px] font-mono px-1.5 py-0.5 border rounded-sm ${
                        isDark
                          ? "bg-white/[0.04] border-white/10 text-white/60"
                          : "bg-planara-light border-planara-border text-planara-muted"
                      } inline-flex items-center gap-1`}
                    >
                      <Wrench className="w-2 h-2" weight="duotone" />
                      {s.tool}
                    </span>
                  ) : null}
                </div>
                {s.warning ? (
                  <div className="flex items-start gap-1.5 mt-1.5 px-1.5 py-1 border border-amber-400/25 bg-amber-400/[0.04] rounded-sm">
                    <ShieldWarning
                      className="w-2.5 h-2.5 text-amber-400/80 shrink-0 mt-0.5"
                      weight="duotone"
                    />
                    <p className={`text-[8px] ${isDark ? "text-white/65" : "text-planara-dark/70"} leading-snug`}>
                      {s.warning}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>

      {citation ? (
        <div className={`absolute bottom-0 left-0 right-0 px-4 py-2 border-t ${headerBorder} ${surfaceBg}`}>
          <span className={`text-[9px] font-mono ${monoMuted} truncate block`}>
            {citation}
          </span>
        </div>
      ) : null}
    </div>
  );
}
