import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Platform } from "@/components/sections/Platform";
import { Integration } from "@/components/sections/Integration";
import { AIComparison } from "@/components/sections/AIComparison";
import { Differentiators } from "@/components/sections/Differentiators";
import { Verticals } from "@/components/sections/Verticals";
import { Proof } from "@/components/sections/Proof";
import { TheAsk } from "@/components/sections/TheAsk";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Platform />
      <Integration />
      <AIComparison />
      <Differentiators />
      <Verticals />
      <Proof />
      <TheAsk />
      <FAQ />
      <Footer />
    </main>
  );
}
