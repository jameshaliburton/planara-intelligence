import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { AIComparison } from "@/components/sections/AIComparison";
import { Platform } from "@/components/sections/Platform";
import { DemoPreview } from "@/components/sections/DemoPreview";
import { Integration } from "@/components/sections/Integration";
import { ValueProp } from "@/components/sections/ValueProp";
import { SocialProof } from "@/components/sections/SocialProof";
import { Engagement } from "@/components/sections/Engagement";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <AIComparison />
      <Platform />
      <DemoPreview />
      <Integration />
      <ValueProp />
      <SocialProof />
      <Engagement />
      <FAQ />
    </main>
  );
}
