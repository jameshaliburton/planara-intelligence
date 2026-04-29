import { Gauge, Users, BookOpen, ChartBar } from "@phosphor-icons/react/dist/ssr";

export type AdoptionMetric = {
  label: string;
  value: string;
  delta?: string;
  icon?: "queries" | "techs" | "citations" | "confidence";
};

export type AdoptionDashboardMockProps = {
  tenantLabel?: string;
  metrics?: AdoptionMetric[];
  /** Hero metric shown above the KPI grid. */
  hero?: { eyebrow?: string; primary: string };
  /** Bar chart caption — defaults to "Query volume · 14 days". */
  chartLabel?: string;
  theme?: "dark" | "light";
};

const ICON_MAP = {
  queries: ChartBar,
  techs: Users,
  citations: BookOpen,
  confidence: Gauge,
} as const;

const DEFAULTS = {
  tenantLabel: "F300 dealer network",
  hero: { eyebrow: "This week", primary: "847 queries · 31 techs active" },
  chartLabel: "Query volume · 14 days",
  metrics: [
    { label: "Queries today", value: "847", delta: "+12%", icon: "queries" as const },
    { label: "Active techs", value: "31", delta: "+3", icon: "techs" as const },
    { label: "Citations served", value: "2,104", delta: "+18%", icon: "citations" as const },
    { label: "Avg confidence", value: "0.86", delta: "verified", icon: "confidence" as const },
  ],
};

// Static bar shape — deterministic, not random, so SSR doesn't flicker.
const BAR_HEIGHTS = [32, 44, 38, 56, 48, 64, 52, 70, 58, 66, 74, 60, 68, 82];

/**
 * Backoffice surface — service-leader / dealer-principal console.
 */
export function AdoptionDashboardMock({
  tenantLabel = DEFAULTS.tenantLabel,
  metrics = DEFAULTS.metrics,
  hero = DEFAULTS.hero,
  chartLabel = DEFAULTS.chartLabel,
  theme = "dark",
}: AdoptionDashboardMockProps) {
  const isDark = theme === "dark";
  const surfaceBg = isDark ? "bg-planara-dark" : "bg-white";
  const headerBorder = isDark ? "border-white/[0.06]" : "border-planara-border";
  const headerText = isDark ? "text-white/80" : "text-planara-dark";
  const monoMuted = isDark ? "text-white/35" : "text-planara-muted";
  const subText = isDark ? "text-white/50" : "text-planara-muted";
  const valueText = isDark ? "text-white" : "text-planara-dark";
  const tileBg = isDark
    ? "bg-white/[0.02] border-white/[0.08]"
    : "bg-planara-light border-planara-border";
  const heroBg = isDark
    ? "bg-planara-teal/[0.04] border-planara-teal/30"
    : "bg-planara-teal/[0.06] border-planara-teal/30";
  const barTrack = isDark ? "bg-white/[0.04]" : "bg-planara-light";
  const barFill = isDark ? "bg-planara-teal/60" : "bg-planara-teal";

  return (
    <div className={`${surfaceBg} aspect-[4/3] relative overflow-hidden`}>
      {/* Title bar */}
      <div className={`px-4 pt-3 pb-2 border-b ${headerBorder} flex items-center gap-2`}>
        <div className="w-1.5 h-1.5 rounded-full bg-planara-teal" />
        <span className={`text-[10px] font-semibold ${headerText}`}>Conduit</span>
        <span className={`text-[9px] font-mono ${monoMuted}`}>·</span>
        <span className={`text-[9px] font-mono ${monoMuted}`}>console.planara.com</span>
        <span className={`text-[9px] font-mono ${monoMuted} ml-auto truncate max-w-[40%] text-right`}>
          {tenantLabel}
        </span>
      </div>

      <div className="px-4 py-3 space-y-3">
        {/* Hero metric */}
        <div className={`${heroBg} border rounded-sm px-3 py-2.5`}>
          <p className={`text-[8px] font-mono uppercase tracking-wider text-planara-teal mb-1`}>
            {hero.eyebrow ?? "This week"}
          </p>
          <p className={`text-sm font-bold ${valueText} leading-tight`}>
            {hero.primary}
          </p>
        </div>

        {/* KPI grid */}
        <div className="grid grid-cols-4 gap-1.5">
          {metrics.map((m) => {
            const Icon = m.icon ? ICON_MAP[m.icon] : undefined;
            return (
              <div
                key={m.label}
                className={`${tileBg} border rounded-sm px-2 py-1.5`}
              >
                <div className="flex items-center gap-1 mb-1">
                  {Icon ? (
                    <Icon className="w-2.5 h-2.5 text-planara-teal/70" weight="duotone" />
                  ) : null}
                  <p className={`text-[7px] font-mono uppercase tracking-wider ${monoMuted} truncate`}>
                    {m.label}
                  </p>
                </div>
                <p className={`text-[11px] font-bold ${valueText} leading-tight`}>
                  {m.value}
                </p>
                {m.delta ? (
                  <p className={`text-[7px] font-mono text-planara-teal/80 mt-0.5`}>
                    {m.delta}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Bar chart */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <p className={`text-[8px] font-mono uppercase tracking-wider ${monoMuted}`}>
              {chartLabel}
            </p>
            <p className={`text-[8px] font-mono ${subText}`}>+12% wk/wk</p>
          </div>
          <div className={`flex items-end gap-0.5 h-10 ${barTrack} rounded-sm px-1 py-1`}>
            {BAR_HEIGHTS.map((h, i) => (
              <div
                key={i}
                className={`${barFill} rounded-[1px] flex-1`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
