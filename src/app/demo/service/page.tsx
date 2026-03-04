import type { Metadata } from "next";
import { ServiceDemo } from "@/components/demos/service/ServiceDemo";

export const metadata: Metadata = {
  title: "Service Intelligence Demo — Planara",
  description:
    "Interactive demo: AI-powered service intelligence for certified marine technicians. Built from Yamaha F300 documentation.",
};

export default function ServiceDemoPage() {
  return (
    <main className="min-h-screen bg-planara-navy">
      <ServiceDemo standalone />
    </main>
  );
}
