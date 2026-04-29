import { FileDoc, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { WhitepaperGate } from "@/components/WhitepaperGate";

export function WhitePaperCTA({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      <Link
        href="/whitepaper"
        className={
          isDark
            ? "flex items-center gap-3 px-5 py-3 border border-white/10 rounded-sm bg-white/[0.03] hover:border-planara-teal/30 transition-colors group"
            : "flex items-center gap-3 px-5 py-3 border border-planara-border rounded-sm bg-planara-light hover:border-planara-teal/30 transition-colors group"
        }
      >
        <FileDoc
          className="w-5 h-5 text-planara-teal"
          weight="duotone"
        />
        <div className="text-left">
          <p className={isDark ? "text-sm font-medium text-white" : "text-sm font-medium text-planara-dark"}>
            White paper: aftermarket economics
          </p>
          <p className={isDark ? "text-xs text-white/40" : "text-xs text-planara-muted"}>
            Why aftermarket is 2.5× more profitable — and the gap holding it back
          </p>
        </div>
        <ArrowRight
          className={
            isDark
              ? "w-4 h-4 text-white/20 group-hover:text-planara-teal ml-auto transition-colors"
              : "w-4 h-4 text-planara-muted/40 group-hover:text-planara-teal ml-auto transition-colors"
          }
        />
      </Link>
      <WhitepaperGate theme={variant} ctaLabel="Email me the PDF" />
    </div>
  );
}
