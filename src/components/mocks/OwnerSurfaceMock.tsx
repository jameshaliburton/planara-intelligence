import { Anchor } from "@phosphor-icons/react/dist/ssr";

export type OwnerSurfaceMockProps = {
  dealerName?: string;
  vesselOrAssetName?: string;
  assetSubtitle?: string;
  queries?: string[];
  theme?: "dark" | "light";
};

const DEFAULTS: Required<Omit<OwnerSurfaceMockProps, "theme">> = {
  dealerName: "Newport Marine",
  vesselOrAssetName: "Reel Therapy",
  assetSubtitle: "2023 Grady-White Canyon 326",
  queries: [
    "When is my next service due?",
    "What does the warning light mean?",
    "How do I winterize?",
    "Book service",
  ],
};

/**
 * Faithful skeleton of the dealer-branded owner surface.
 * Light theme by default; dealer chrome on top, query chips below.
 */
export function OwnerSurfaceMock({
  dealerName = DEFAULTS.dealerName,
  vesselOrAssetName = DEFAULTS.vesselOrAssetName,
  assetSubtitle = DEFAULTS.assetSubtitle,
  queries = DEFAULTS.queries,
  theme = "light",
}: OwnerSurfaceMockProps) {
  const isDark = theme === "dark";
  const surfaceBg = isDark ? "bg-[#0B0E14]" : "bg-white";
  const headerBorder = isDark ? "border-white/[0.06]" : "border-planara-border";
  const headerText = isDark ? "text-white" : "text-planara-dark";
  const subText = isDark ? "text-white/55" : "text-planara-muted";
  const fadeFrom = isDark ? "from-[#0B0E14]" : "from-white";
  const chipBg = isDark
    ? "bg-white/[0.04] border-white/10 text-white/70"
    : "bg-planara-light border-planara-border text-planara-muted";

  return (
    <div className={`relative ${surfaceBg} aspect-[4/3] overflow-hidden border-b ${headerBorder}`}>
      {/* Dealer header */}
      <div className={`px-4 pt-3 pb-2 border-b ${headerBorder} flex items-center gap-2`}>
        <div className="w-5 h-5 rounded-full bg-planara-navy flex items-center justify-center">
          <Anchor className="w-3 h-3 text-white" weight="duotone" />
        </div>
        <div>
          <p className={`text-[10px] font-semibold ${headerText} leading-tight`}>
            {dealerName}
          </p>
          <p className={`text-[8px] ${subText} leading-tight`}>
            Your certified dealer
          </p>
        </div>
      </div>

      {/* Vessel/asset row */}
      <div className="px-4 py-3">
        <div className="mb-2">
          <p className={`text-[10px] font-semibold ${headerText}`}>
            {vesselOrAssetName}
          </p>
          <p className={`text-[8px] ${subText}`}>{assetSubtitle}</p>
        </div>

        {/* Query chips */}
        <div className="grid grid-cols-2 gap-1">
          {queries.map((q) => (
            <span
              key={q}
              className={`text-[9px] px-2 py-1.5 ${chipBg} border rounded-md leading-snug`}
            >
              {q}
            </span>
          ))}
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t ${fadeFrom} to-transparent`} />
    </div>
  );
}
