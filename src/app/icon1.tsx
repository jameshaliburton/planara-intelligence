import { ImageResponse } from "next/og";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon192() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#00BFA5",
          color: "white",
          fontSize: 128,
          fontWeight: 700,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          letterSpacing: "-0.04em",
          border: "3px solid rgba(19, 24, 32, 0.28)",
        }}
      >
        P
      </div>
    ),
    { ...size },
  );
}
