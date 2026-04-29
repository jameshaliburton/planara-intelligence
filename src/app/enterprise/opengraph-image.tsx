import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt =
  "Planara Conduit at OEM scale — multi-tenant, namespace-isolated, audit-trailed. Built for procurement and the dealer network at the same time.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "For OEMs & large-fleet operators",
    title: "Conduit at OEM scale.",
    tagline:
      "Multi-tenant, namespace-isolated, audit-trailed. SSO, RBAC, deployment options scoped to your operation.",
  });
}
