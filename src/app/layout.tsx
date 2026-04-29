import type { Metadata, Viewport } from "next";
import { PlanaraFonts } from "@planara/design-system";
import "./globals.css";
import { IntegrationToastProvider } from "@/components/IntegrationToast";
import { Nav } from "@/components/Nav";
import {
  SITE_URL,
  organizationJsonLd,
  websiteJsonLd,
  jsonLdScriptProps,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Planara Conduit — Technical Service Intelligence",
    template: "%s — Planara Conduit",
  },
  description:
    "Planara Conduit turns manufacturer manuals, standards, and service bulletins into cited, safety-validated answers for the people who service the equipment.",
  applicationName: "Planara Conduit",
  keywords: [
    "technical service intelligence",
    "TSI",
    "service documentation",
    "equipment service",
    "OEM service technician",
    "service manual AI",
    "cited service answers",
    "safety-validated answers",
    "dealer service network",
    "manufacturer service bulletins",
  ],
  authors: [{ name: "Planara" }],
  creator: "Planara",
  publisher: "Planara",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Planara Conduit",
    title: "Planara Conduit — Technical Service Intelligence",
    description:
      "Cited, safety-validated answers for the people who service the equipment.",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planara Conduit — Technical Service Intelligence",
    description:
      "Cited, safety-validated answers for the people who service the equipment.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#131820",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlanaraFonts />
        <script {...jsonLdScriptProps(organizationJsonLd)} />
        <script {...jsonLdScriptProps(websiteJsonLd)} />
      </head>
      <body className="antialiased">
        <IntegrationToastProvider>
          <Nav />
          {children}
        </IntegrationToastProvider>
      </body>
    </html>
  );
}
