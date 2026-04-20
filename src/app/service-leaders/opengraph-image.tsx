import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt =
  "Planara for Service Leaders — Your best tech's knowledge, available to everyone. Reduce diagnostic time, improve first-time fix rate.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "For Service Leaders",
    title: "Your best tech's knowledge. Available to everyone.",
    tagline:
      "Reduce diagnostic time. Improve first-time fix rate. Capture field knowledge before it walks out the door.",
  });
}
