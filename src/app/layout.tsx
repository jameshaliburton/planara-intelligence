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
  title: "Planara Conduit — Technical Service Intelligence",
  description:
    "Planara Conduit turns manufacturer manuals, standards, and service bulletins into cited, safety-validated answers for the people who service the equipment.",
  openGraph: {
    title: "Planara Conduit — Technical Service Intelligence",
    description:
      "Cited, safety-validated answers for the people who service the equipment.",
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
