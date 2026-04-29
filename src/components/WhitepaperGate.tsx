"use client";

import { useState, useCallback } from "react";
import { ArrowRight, CheckCircle, DownloadSimple } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Turnstile } from "@/components/Turnstile";

type Theme = "dark" | "light";
type Status = "idle" | "expanded" | "submitting" | "success" | "error";

interface Props {
  theme?: Theme;
  /** Initial CTA label. Default: "Send me the PDF" */
  ctaLabel?: string;
}

export function WhitepaperGate({ theme = "dark", ctaLabel = "Send me the PDF" }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [cfToken, setCfToken] = useState<string | null>(null);
  const onVerifyTurnstile = useCallback((t: string) => setCfToken(t), []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setErrorMsg(null);
    setStatus("submitting");
    try {
      const res = await fetch("/api/whitepaper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, cfToken }),
      });
      if (res.ok) {
        setStatus("success");
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (res.status === 503) {
        // Email service not configured — fall back to direct download.
        window.location.href = "/planara-conduit-whitepaper.pdf";
        setStatus("idle");
        return;
      }
      setErrorMsg(data.error ?? "Something went wrong. Try again.");
      setStatus("error");
    } catch {
      setErrorMsg("Network error. Try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2.5 px-5 py-3 rounded-sm border",
          theme === "dark"
            ? "border-planara-teal/30 bg-planara-teal/[0.06] text-white/80"
            : "border-planara-teal/30 bg-planara-teal/[0.06] text-planara-dark"
        )}
      >
        <CheckCircle
          className="w-4 h-4 text-planara-teal shrink-0"
          weight="duotone"
        />
        <p className="text-sm">
          Sent to <span className="font-mono text-xs">{email}</span>. Check your inbox.
        </p>
      </div>
    );
  }

  if (status === "idle") {
    return (
      <button
        type="button"
        onClick={() => setStatus("expanded")}
        className={cn(
          "inline-flex items-center gap-2 px-5 py-2.5 rounded-sm transition-colors text-sm",
          theme === "dark"
            ? "border border-white/10 bg-white/[0.03] hover:border-planara-teal/40 text-white/55 hover:text-white"
            : "border border-planara-border bg-planara-light hover:border-planara-teal/40 text-planara-muted hover:text-planara-dark"
        )}
      >
        <DownloadSimple className="w-4 h-4 text-planara-teal" />
        {ctaLabel}
      </button>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-2 max-w-md">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          autoFocus
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cn(
            "flex-1 px-4 py-2.5 text-sm rounded-sm focus:outline-none transition-colors",
            theme === "dark"
              ? "bg-white/[0.04] border border-white/15 text-white placeholder:text-white/30 focus:border-planara-teal/60 focus:bg-white/[0.06]"
              : "bg-white border border-planara-border text-planara-dark placeholder:text-planara-muted/60 focus:border-planara-teal/60"
          )}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-sm transition-colors",
            "bg-planara-teal text-planara-dark hover:bg-planara-teal/90",
            "disabled:opacity-60 disabled:cursor-not-allowed"
          )}
        >
          {status === "submitting" ? "Sending…" : "Send"}
          {status !== "submitting" && <ArrowRight className="w-3.5 h-3.5" />}
        </button>
      </div>
      <Turnstile onVerify={onVerifyTurnstile} theme={theme} />
      {errorMsg && (
        <p
          className={cn(
            "text-xs",
            theme === "dark" ? "text-amber-300/80" : "text-amber-700"
          )}
        >
          {errorMsg}
        </p>
      )}
    </form>
  );
}
