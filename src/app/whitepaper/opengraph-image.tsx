import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt =
  "The Intelligence Gap — Where Purpose-Built AI Creates Value in Equipment Manufacturing. Planara White Paper.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "White Paper",
    title: "The Intelligence Gap.",
    tagline:
      "Where purpose-built AI creates value in equipment manufacturing — a landscape overview.",
  });
}
