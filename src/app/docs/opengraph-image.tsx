import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt =
  "Planara Platform Documentation — Comprehensive guides for every role, from first login to network-wide deployment.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Documentation",
    title: "Platform documentation for every role.",
    tagline:
      "From first login to network-wide deployment. Concepts, onboarding, evaluation, operations, and administration.",
  });
}
