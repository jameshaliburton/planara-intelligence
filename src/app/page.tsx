import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Platform } from "@/components/sections/Platform";
import { DemoPreview } from "@/components/sections/DemoPreview";
import { Integration } from "@/components/sections/Integration";
import { SocialProof } from "@/components/sections/SocialProof";
import { Engagement } from "@/components/sections/Engagement";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Platform />
      <DemoPreview />
      <Integration />
      <SocialProof />
      <Engagement />
      <FAQ />
    </main>
  );
}
