"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

/**
 * Animates numeric portions of a stat string.
 * Handles formats like "72%", "$0", "61%", "1B+", "25+", "Multiple"
 */
export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
          animate();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated]);

  function animate() {
    // Extract leading non-numeric prefix (like "$")
    const prefixMatch = value.match(/^([^0-9]*)/);
    const prefix = prefixMatch ? prefixMatch[1] : "";
    const rest = value.slice(prefix.length);

    // Extract numeric part
    const numMatch = rest.match(/^(\d+)/);
    if (!numMatch) {
      setDisplayed(value);
      return;
    }

    const target = parseInt(numMatch[1], 10);
    const suffix = rest.slice(numMatch[1].length);

    const duration = 1200;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplayed(`${prefix}${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
}
