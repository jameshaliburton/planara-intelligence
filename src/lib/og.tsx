import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 } as const;
export const ogContentType = "image/png" as const;

type OgContent = {
  eyebrow: string;
  title: string;
  tagline: string;
};

export function renderOgImage({ eyebrow, title, tagline }: OgContent) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#131820",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#43CED6",
              fontSize: 20,
              fontFamily: "ui-monospace, SFMono-Regular, monospace",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              color: "white",
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 980,
              letterSpacing: "-0.025em",
              marginBottom: 28,
              display: "flex",
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: 30,
              lineHeight: 1.4,
              maxWidth: 880,
              display: "flex",
            }}
          >
            {tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(67,206,214,0.2)",
            paddingTop: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#00BFA5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              P
            </div>
            <div
              style={{
                color: "white",
                fontSize: 26,
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              Planara
            </div>
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: 20,
              fontFamily: "ui-monospace, SFMono-Regular, monospace",
            }}
          >
            intelligence.planara.com
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
