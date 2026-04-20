import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt =
  "Planara Enterprise — Built for the compliance requirements your procurement team will ask about.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Enterprise",
    title: "Built for the compliance your procurement team will ask about.",
    tagline:
      "Data isolation. 195-check adversarial audit. SOC 2 Type II in preparation.",
  });
}
