"use client";

import { useState, useEffect, useRef } from "react";
import { X, FileText, ArrowRight } from "lucide-react";

export function WhitePaperCTA({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);

  const isDark = variant === "dark";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={
          isDark
            ? "flex items-center gap-3 px-5 py-3 border border-white/10 rounded-sm bg-white/[0.03] hover:border-planara-teal/30 transition-colors group w-full md:w-auto"
            : "flex items-center gap-3 px-5 py-3 border border-planara-border rounded-sm bg-planara-light hover:border-planara-teal/30 transition-colors group w-full md:w-auto"
        }
      >
        <FileText
          className={isDark ? "w-5 h-5 text-planara-teal" : "w-5 h-5 text-planara-teal"}
          strokeWidth={1.5}
        />
        <div className="text-left">
          <p className={isDark ? "text-sm font-medium text-white" : "text-sm font-medium text-planara-dark"}>
            The $100B Documentation Problem
          </p>
          <p className={isDark ? "text-xs text-white/40" : "text-xs text-planara-muted"}>
            Download white paper (PDF)
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
      </button>

      {open && <WhitePaperModal onClose={() => setOpen(false)} />}
    </>
  );
}

function WhitePaperModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // Integration stub: email capture → CRM / email marketing
    // POST /api/integrations/whitepaper/download
    // { email, name, company, asset: "100b-documentation-problem" }
    console.log("White paper download:", { email, name, company });
    setSubmitted(true);
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      <div className="bg-white rounded-sm max-w-md w-full shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-planara-light rounded-sm flex items-center justify-center">
              <FileText className="w-5 h-5 text-planara-teal" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-base font-semibold text-planara-dark">
                White Paper
              </p>
              <p className="text-xs text-planara-muted">PDF download</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-planara-muted hover:text-planara-dark transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="p-6">
          {!submitted ? (
            <>
              <h3 className="text-lg font-bold text-planara-dark mb-2">
                The $100B Documentation Problem in Equipment Manufacturing
              </h3>
              <p className="text-sm text-planara-muted mb-6 leading-relaxed">
                How manufacturers lose billions in downtime, wasted labor, and
                missed revenue because their documentation never reaches the
                people who need it — and how intelligence changes that.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work email *"
                  required
                  className="w-full border border-planara-border rounded-sm px-4 py-2.5 text-sm text-planara-dark placeholder:text-planara-muted/50 focus:outline-none focus:border-planara-teal/50"
                />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full border border-planara-border rounded-sm px-4 py-2.5 text-sm text-planara-dark placeholder:text-planara-muted/50 focus:outline-none focus:border-planara-teal/50"
                />
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company"
                  className="w-full border border-planara-border rounded-sm px-4 py-2.5 text-sm text-planara-dark placeholder:text-planara-muted/50 focus:outline-none focus:border-planara-teal/50"
                />

                {error && (
                  <p className="text-xs text-red-500">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full px-4 py-2.5 bg-planara-dark text-white text-sm font-medium rounded-sm hover:bg-planara-dark/90 transition-colors"
                >
                  Download White Paper
                </button>
              </form>

              <p className="text-[11px] text-planara-muted/50 mt-4">
                We&apos;ll send the PDF to your email. No spam, no sequences.
              </p>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-12 h-12 bg-planara-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-planara-teal" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-planara-dark mb-2">
                Check your inbox
              </h3>
              <p className="text-sm text-planara-muted leading-relaxed">
                We&apos;re sending the white paper to{" "}
                <span className="font-medium text-planara-dark">{email}</span>.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-4 py-2 text-sm text-planara-muted hover:text-planara-dark transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
