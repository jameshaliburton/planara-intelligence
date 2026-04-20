import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt =
  "Planara Marine — Marine service intelligence. Every repair across your service network makes the next one faster.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Marine Service Intelligence",
    title: "Your service network is sitting on a knowledge goldmine.",
    tagline:
      "Upload your service manuals. Deploy to your network. Start capturing field intelligence.",
  });
}
