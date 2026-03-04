"use client";

import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Lock,
  MessageSquare,
  Package,
  ShieldAlert,
} from "lucide-react";
import { cn } from "@/lib/utils";

const GENERIC_RESPONSE = `Based on my training data, Yamaha outboard motors typically use a 4-stroke marine engine oil. For the F300 model specifically, you should consult your owner's manual for the exact specifications, but generally Yamaha outboards use SAE 10W-30 or 10W-40 marine-grade oil. I'd recommend checking with your local Yamaha dealer or the official Yamaha website for the most up-to-date information, as requirements can vary by model year and operating conditions. It's important to use oil that meets the appropriate API and NMMA certifications for marine use.`;

const SPECS = [
  { label: "Type", value: "YAMALUBE 4-M FC-W" },
  { label: "Viscosity", value: "SAE 10W-30" },
  { label: "Capacity", value: "7.1L (7.5 US qt)" },
  { label: "Filter", value: "Yamaha 69J-13440-04" },
  { label: "Change interval", value: "Every 100 hours or annually" },
];

const PARTS = [
  { name: "YAMALUBE 4-M 10W-30 (4L)", part: "LUB-10W30-FC-04", price: "$32.95", inStock: true },
  { name: "Oil Filter", part: "69J-13440-04-00", price: "$12.95", inStock: true },
  { name: "Drain Gasket", part: "90430-08020-00", price: "$2.15", inStock: true },
];

export function AIComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [typedLength, setTypedLength] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Typing animation for generic AI response
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setTypedLength((prev) => {
        if (prev >= GENERIC_RESPONSE.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 3;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [visible]);

  const typingDone = typedLength >= GENERIC_RESPONSE.length;

  return (
    <section id="comparison" className="py-24 md:py-32 bg-planara-dark">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          Not Another Chatbot
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          Generic AI vs. Manufacturing Intelligence
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mb-12 leading-relaxed">
          Same question. Radically different output.
        </p>

        {/* Query bar */}
        <div className="flex items-center gap-2 mb-6 px-4 py-2.5 bg-white/[0.04] border border-white/10 rounded-sm max-w-xl">
          <MessageSquare className="w-4 h-4 text-white/30" strokeWidth={1.5} />
          <span className="text-sm font-mono text-white/60">
            &quot;What oil does the F300 require?&quot;
          </span>
        </div>

        {/* Side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Left: Generic AI */}
          <div className="rounded-lg overflow-hidden border border-white/10">
            <div className="bg-white/[0.04] border-b border-white/[0.06] px-4 py-2.5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <span className="text-[11px] font-mono text-white/30">
                Generic AI Assistant
              </span>
            </div>
            <div className="bg-[#0B0E14] px-5 py-5 min-h-[320px]">
              <p className="text-sm text-white/50 leading-relaxed font-mono">
                {GENERIC_RESPONSE.slice(0, typedLength)}
                {!typingDone && (
                  <span className="inline-block w-2 h-4 bg-white/40 ml-0.5 animate-pulse" />
                )}
              </p>
              {typingDone && (
                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-[11px] font-mono text-white/20">
                    No citations. No parts. No safety warnings. No structure.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Planara */}
          <div className="rounded-lg overflow-hidden border border-planara-teal/30">
            <div className="bg-planara-teal/[0.06] border-b border-planara-teal/20 px-4 py-2.5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-planara-teal/40" />
              <span className="text-[11px] font-mono text-planara-teal/70">
                Planara Service Intelligence
              </span>
            </div>
            <div className="bg-[#0B0E14] px-5 py-5 min-h-[320px]">
              {/* Spec table */}
              <div
                className={cn(
                  "transition-all duration-500 delay-[800ms]",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                )}
              >
                <p className="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-2">
                  Specifications
                </p>
                <div className="border border-white/10 rounded-sm overflow-hidden mb-4">
                  {SPECS.map((spec, i) => (
                    <div
                      key={spec.label}
                      className={cn(
                        "flex items-center justify-between px-3 py-1.5 text-xs",
                        i % 2 === 0 ? "bg-white/[0.02]" : ""
                      )}
                    >
                      <span className="font-mono text-white/40">{spec.label}</span>
                      <span className="text-white/80 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety */}
              <div
                className={cn(
                  "transition-all duration-500 delay-[1200ms]",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                )}
              >
                <div className="flex items-start gap-2 p-3 border border-safety-caution/30 bg-safety-caution/5 rounded-sm mb-4">
                  <ShieldAlert className="w-3.5 h-3.5 text-safety-caution shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-[11px] text-white/60 leading-relaxed">
                    Run engine to operating temperature before draining oil. Hot oil flows more completely. Use caution — oil and surfaces will be hot.
                  </p>
                </div>
              </div>

              {/* Parts */}
              <div
                className={cn(
                  "transition-all duration-500 delay-[1600ms]",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                )}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <Package className="w-3 h-3 text-planara-teal" strokeWidth={1.5} />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/30">
                    Parts
                  </span>
                </div>
                <div className="space-y-1 mb-4">
                  {PARTS.map((part) => (
                    <div key={part.part} className="flex items-center justify-between px-3 py-1.5 bg-white/[0.02] rounded-sm text-xs">
                      <div>
                        <span className="text-white/70">{part.name}</span>
                        <span className="text-white/25 ml-2 font-mono text-[10px]">{part.part}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-white/50">{part.price}</span>
                        <span className="text-[10px] font-mono text-emerald-400">In Stock</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Citation */}
              <div
                className={cn(
                  "transition-all duration-500 delay-[2000ms]",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                )}
              >
                <div className="flex items-center gap-1.5 pt-3 border-t border-white/5">
                  <BookOpen className="w-3 h-3 text-white/20" strokeWidth={1.5} />
                  <span className="text-[10px] font-mono text-white/25">
                    Yamaha F300 Owner&apos;s Manual — Lubrication System, p.42
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Differentiator statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-planara-teal shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-semibold text-white mb-1">
                Full context, not general knowledge.
              </p>
              <p className="text-sm text-white/40 leading-relaxed">
                Planara queries your actual documentation library, cross-referenced
                with live telemetry and service history. Generic AI draws from
                public training data.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-planara-teal shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-semibold text-white mb-1">
                Your IP stays yours.
              </p>
              <p className="text-sm text-white/40 leading-relaxed">
                Private isolated pipeline. No training on your data. No sharing
                across customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
