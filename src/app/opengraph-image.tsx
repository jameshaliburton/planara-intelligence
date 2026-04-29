import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt =
  "Planara Conduit — Technical Service Intelligence. Cited, safety-validated answers for the people who service the equipment.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Planara Conduit",
    title: "Technical Service Intelligence.",
    tagline:
      "Manufacturer manuals, standards, and service bulletins → cited, safety-validated answers.",
  });
}
