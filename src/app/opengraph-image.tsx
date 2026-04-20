import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt =
  "Planara — Every repair makes the next one faster. The field intelligence layer for equipment service.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Planara Intelligence Layer",
    title: "Every repair makes the next one faster.",
    tagline:
      "The field intelligence layer between manufacturer documentation and service execution.",
  });
}
