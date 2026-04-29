import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt =
  "Planara Conduit for marine — the reference deployment, built on the Yamaha F300 corpus.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Planara Conduit · Marine",
    title: "Conduit for marine OEMs and their dealer networks.",
    tagline:
      "Owner's manual, service manual, ABYC and ANSI Z535 standards, and the technical service bulletins that update them.",
  });
}
