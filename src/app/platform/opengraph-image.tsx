import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt =
  "How Planara Conduit works — manuals, standards, bulletins in; cited, safety-validated answers out.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "How Conduit works",
    title: "Manuals, standards, bulletins. One output. No invention.",
    tagline:
      "Documentation in. Role-specific surfaces out. A correction loop in between.",
  });
}
