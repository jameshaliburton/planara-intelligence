import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { IntegrationToastProvider } from "@/components/IntegrationToast";
import { Nav } from "@/components/Nav";
import {
  SITE_URL,
  organizationJsonLd,
  websiteJsonLd,
  jsonLdScriptProps,
} from "@/lib/jsonld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Planara Intelligence Layer",
    template: "%s — Planara",
  },
  description:
    "The field intelligence layer for equipment service. Structured, cited responses that learn from every repair across your service network.",
  applicationName: "Planara",
  keywords: [
    "field intelligence",
    "equipment service",
    "service documentation",
    "manufacturing intelligence",
    "service technician software",
    "OEM documentation",
    "dealer service network",
    "predictive maintenance",
    "RAG equipment manuals",
  ],
  authors: [{ name: "Planara" }],
  creator: "Planara",
  publisher: "Planara",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Planara Intelligence Layer",
    title: "Planara Intelligence Layer",
    description:
      "Every repair makes the next one faster. Planara turns manufacturer documentation into field intelligence that compounds across your service network.",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planara Intelligence Layer",
    description:
      "Every repair makes the next one faster. The field intelligence layer for equipment service.",
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
        <script {...jsonLdScriptProps(organizationJsonLd)} />
        <script {...jsonLdScriptProps(websiteJsonLd)} />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <IntegrationToastProvider>
          <Nav />
          {children}
        </IntegrationToastProvider>
      </body>
    </html>
  );
}
