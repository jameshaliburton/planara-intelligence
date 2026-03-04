import { FileText, ArrowRight } from "lucide-react";

export function WhitePaperCTA({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";

  return (
    <a
      href="/PLANARA_manufacturing_intelligence_whitepaper.pdf"
      download
      className={
        isDark
          ? "flex items-center gap-3 px-5 py-3 border border-white/10 rounded-sm bg-white/[0.03] hover:border-planara-teal/30 transition-colors group w-full md:w-auto"
          : "flex items-center gap-3 px-5 py-3 border border-planara-border rounded-sm bg-planara-light hover:border-planara-teal/30 transition-colors group w-full md:w-auto"
      }
    >
      <FileText
        className="w-5 h-5 text-planara-teal"
        strokeWidth={1.5}
      />
      <div className="text-left">
        <p className={isDark ? "text-sm font-medium text-white" : "text-sm font-medium text-planara-dark"}>
          Download White Paper
        </p>
        <p className={isDark ? "text-xs text-white/40" : "text-xs text-planara-muted"}>
          The $100B Documentation Problem (PDF)
        </p>
      </div>
      <ArrowRight
        className={
          isDark
            ? "w-4 h-4 text-white/20 group-hover:text-planara-teal ml-auto transition-colors"
            : "w-4 h-4 text-planara-muted/40 group-hover:text-planara-teal ml-auto transition-colors"
        }
        strokeWidth={1.5}
      />
    </a>
  );
}
