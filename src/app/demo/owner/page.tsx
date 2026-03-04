import type { Metadata } from "next";
import { OwnerDemo } from "@/components/demos/owner/OwnerDemo";

export const metadata: Metadata = {
  title: "Owner & Dealer Portal Demo — Planara",
  description:
    "Interactive demo: White-labeled owner portal for boat owners and marine dealers. Built from Yamaha F300 documentation.",
};

export default function OwnerDemoPage() {
  return (
    <main className="min-h-screen bg-planara-light">
      <OwnerDemo standalone />
    </main>
  );
}
