import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { IntegrationToastProvider } from "@/components/IntegrationToast";
import { Nav } from "@/components/Nav";

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
  title: "Planara Intelligence Layer",
  description:
    "The field intelligence layer for equipment service. Structured, cited responses that learn from every repair across your service network.",
  openGraph: {
    title: "Planara Intelligence Layer",
    description:
      "Every repair makes the next one faster. Planara turns manufacturer documentation into field intelligence that compounds across your service network.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <IntegrationToastProvider>
          <Nav />
          {children}
        </IntegrationToastProvider>
      </body>
    </html>
  );
}
