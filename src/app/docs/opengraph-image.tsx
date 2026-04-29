import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt =
  "Planara Conduit documentation — concepts, onboarding, operations.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Documentation",
    title: "Conduit documentation for every role.",
    tagline:
      "Concepts, onboarding, evaluation, operations, and administration.",
  });
}
