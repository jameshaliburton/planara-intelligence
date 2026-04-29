import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt =
  "The Intelligence Gap — a Planara white paper on aftermarket service economics in equipment manufacturing.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "White paper",
    title: "Aftermarket: where the value is.",
    tagline:
      "Why aftermarket service is 2.5× more profitable than new equipment — and the documentation gap holding it back.",
  });
}
