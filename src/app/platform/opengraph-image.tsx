import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt =
  "Planara Platform — Manufacturing intelligence that compounds. Documentation and telemetry in. Structured intelligence out.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "The Platform",
    title: "Manufacturing intelligence that compounds.",
    tagline:
      "Documentation and telemetry in. Structured, cited, safety-critical intelligence out.",
  });
}
