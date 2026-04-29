import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt =
  "Planara Conduit for service leaders — three problems you deal with every week. Each one has a labor-rate number behind it.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "For service leaders",
    title: "Three problems you deal with every week.",
    tagline:
      "Each one has a labor-rate number behind it. Conduit is the layer that moves them.",
  });
}
