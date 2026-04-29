"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

/**
 * Cloudflare Turnstile widget — invisible bot challenge.
 *
 * Renders a managed Turnstile widget when NEXT_PUBLIC_TURNSTILE_SITE_KEY is
 * configured. When the widget completes its check it calls onVerify with the
 * resulting token; the form must POST that token alongside its payload, and
 * the server must validate via /lib/verify-turnstile.
 *
 * If the env var is not set (local dev without keys) this renders nothing —
 * the form proceeds without the challenge. The server skip path means the
 * full path still works end-to-end without keys.
 */

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "compact" | "invisible";
        }
      ) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
  }
}

interface Props {
  onVerify: (token: string) => void;
  theme?: "light" | "dark" | "auto";
}

export function Turnstile({ onVerify, theme = "auto" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey) return;
    const tryRender = () => {
      if (
        containerRef.current &&
        window.turnstile &&
        widgetIdRef.current === null
      ) {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: onVerify,
          theme,
        });
        return true;
      }
      return false;
    };

    if (tryRender()) return;

    // Script may not be ready yet; poll briefly.
    const interval = setInterval(() => {
      if (tryRender()) clearInterval(interval);
    }, 200);

    return () => {
      clearInterval(interval);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, theme, onVerify]);

  if (!siteKey) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <div ref={containerRef} className="my-2" />
    </>
  );
}
