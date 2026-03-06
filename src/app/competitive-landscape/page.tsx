"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, Lock } from "@phosphor-icons/react";

export default function CompetitiveLandscapePage() {
  const [password, setPassword] = useState("");
  const [html, setHtml] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(false);
    setLoading(true);

    try {
      const res = await fetch("/api/competitive-landscape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError(true);
        setLoading(false);
        return;
      }

      const data = await res.json();
      setHtml(data.html);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (html) {
    return (
      <div className="min-h-screen bg-[#0c0f14]">
        <div className="border-b border-white/[0.06] bg-[#0c0f14]">
          <div className="max-w-[1100px] mx-auto px-6 py-3 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-white/40 hover:text-[#43CED6] transition-colors"
            >
              <ArrowLeft className="w-3 h-3" />
              Back to overview
            </Link>
            <span className="text-xs font-mono text-white/20">
              Planara &middot; Confidential
            </span>
          </div>
        </div>
        <iframe
          srcDoc={html}
          className="w-full border-0"
          style={{ height: "calc(100vh - 45px)" }}
          title="Competitive Landscape"
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-planara-dark flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Lock className="w-8 h-8 text-white/15 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-white mb-1">
            Competitive Landscape
          </h1>
          <p className="text-sm text-white/30">
            This document is password-protected.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Enter password"
              autoFocus
              className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-sm text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-planara-teal/40 transition-colors"
            />
            {error && (
              <p className="text-xs text-red-400/70 mt-2">
                Incorrect password. Try again.
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full px-4 py-3 bg-planara-teal/10 border border-planara-teal/20 rounded-sm text-sm font-semibold text-planara-teal hover:bg-planara-teal/15 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {loading ? "Verifying..." : "View Document"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-xs text-white/20 hover:text-white/40 transition-colors"
          >
            &larr; Back to Planara
          </Link>
        </div>
      </div>
    </main>
  );
}
