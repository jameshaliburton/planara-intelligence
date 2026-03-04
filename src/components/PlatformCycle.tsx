"use client";

import { useEffect, useRef, useState } from "react";
import { Wrench, Anchor, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const NODES = [
  {
    id: "service",
    label: "Service Intelligence",
    icon: Wrench,
    description: "Generates field data from every service interaction",
    angle: 270, // top
  },
  {
    id: "oem",
    label: "OEM Intelligence",
    icon: BarChart3,
    description: "Improves documentation from real-world patterns",
    angle: 30, // bottom-right
  },
  {
    id: "owner",
    label: "Owner Intelligence",
    icon: Anchor,
    description: "Drives service engagement from better answers",
    angle: 150, // bottom-left
  },
];

const EDGES = [
  { from: "service", to: "oem", label: "generates field data" },
  { from: "oem", to: "owner", label: "improves documentation" },
  { from: "owner", to: "service", label: "drives service engagement" },
];

function getNodePosition(angle: number, radius: number, cx: number, cy: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

export function PlatformCycle() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cx = 200;
  const cy = 200;
  const radius = 140;

  const positions = NODES.map((n) => ({
    ...n,
    ...getNodePosition(n.angle, radius, cx, cy),
  }));

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      {/* SVG cycle diagram */}
      <div className="flex justify-center mb-8">
        <svg
          viewBox="0 0 400 400"
          className="w-full max-w-[360px] md:max-w-[400px]"
          fill="none"
        >
          {/* Animated connection arcs */}
          {EDGES.map((edge, i) => {
            const from = positions.find((p) => p.id === edge.from)!;
            const to = positions.find((p) => p.id === edge.to)!;

            // Curved path via center offset
            const midX = (from.x + to.x) / 2;
            const midY = (from.y + to.y) / 2;
            const offsetX = (cx - midX) * 0.35;
            const offsetY = (cy - midY) * 0.35;
            const ctrlX = midX + offsetX;
            const ctrlY = midY + offsetY;

            const path = `M ${from.x} ${from.y} Q ${ctrlX} ${ctrlY} ${to.x} ${to.y}`;
            const pathLength = 300;

            return (
              <g key={edge.from + edge.to}>
                {/* Track line (dim) */}
                <path
                  d={path}
                  stroke="rgba(67, 206, 214, 0.08)"
                  strokeWidth={2}
                  fill="none"
                />
                {/* Animated line */}
                <path
                  d={path}
                  stroke="rgba(67, 206, 214, 0.5)"
                  strokeWidth={2}
                  fill="none"
                  strokeDasharray={pathLength}
                  strokeDashoffset={visible ? 0 : pathLength}
                  className="transition-[stroke-dashoffset] ease-out"
                  style={{
                    transitionDuration: "1.2s",
                    transitionDelay: `${i * 0.4}s`,
                  }}
                />
                {/* Animated particle */}
                {visible && (
                  <circle r={3} fill="#43CED6" opacity={0.8}>
                    <animateMotion
                      path={path}
                      dur="3s"
                      repeatCount="indefinite"
                      begin={`${i * 1}s`}
                    />
                  </circle>
                )}
                {/* Arrowhead */}
                <circle
                  cx={to.x}
                  cy={to.y}
                  r={4}
                  fill="transparent"
                />
              </g>
            );
          })}

          {/* Nodes */}
          {positions.map((node, i) => (
            <g
              key={node.id}
              className={cn(
                "transition-opacity duration-500",
                visible ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              {/* Node circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r={32}
                fill="rgba(67, 206, 214, 0.06)"
                stroke="rgba(67, 206, 214, 0.3)"
                strokeWidth={1.5}
              />
              {/* Node icon placeholder — we render icons in HTML overlay */}
            </g>
          ))}
        </svg>

        {/* HTML icon overlays — positioned absolutely over the SVG */}
      </div>

      {/* Node labels below diagram */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {NODES.map((node, i) => (
          <div
            key={node.id}
            className={cn(
              "text-center transition-all duration-500",
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: `${0.6 + i * 0.15}s` }}
          >
            <node.icon
              className="w-5 h-5 text-planara-teal mx-auto mb-2"
              strokeWidth={1.5}
            />
            <p className="text-sm font-semibold text-white mb-1">
              {node.label}
            </p>
            <p className="text-xs text-white/40 leading-relaxed">
              {node.description}
            </p>
          </div>
        ))}
      </div>

      {/* Edge labels */}
      <div className="flex justify-center mt-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {EDGES.map((edge) => (
            <span
              key={edge.from + edge.to}
              className="text-[10px] font-mono text-white/20 uppercase tracking-wider"
            >
              {edge.label} →
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
