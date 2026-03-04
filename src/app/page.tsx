import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Platform } from "@/components/sections/Platform";
import { DemoPreview } from "@/components/sections/DemoPreview";
import { SocialProof } from "@/components/sections/SocialProof";
import { Integration } from "@/components/sections/Integration";
import { ValueProp } from "@/components/sections/ValueProp";
import { Engagement } from "@/components/sections/Engagement";
import { TheAsk } from "@/components/sections/TheAsk";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Platform />
      <DemoPreview />
      <SocialProof />
      <Integration />
      <ValueProp />
      <Engagement />
      <TheAsk />
      <FAQ />
    </main>
  );
}
