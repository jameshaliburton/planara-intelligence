import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { AIComparison } from "@/components/sections/AIComparison";
import { Integration } from "@/components/sections/Integration";
import { DemoPreview } from "@/components/sections/DemoPreview";
import { Platform } from "@/components/sections/Platform";
import { ValueProp } from "@/components/sections/ValueProp";
import { SocialProof } from "@/components/sections/SocialProof";
import { Engagement } from "@/components/sections/Engagement";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <AIComparison />
      <Integration />
      <DemoPreview />
      <Platform />
      <ValueProp />
      <SocialProof />
      <Engagement />
      <FAQ />
      <Footer />
    </main>
  );
}
