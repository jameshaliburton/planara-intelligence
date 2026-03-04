import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Platform } from "@/components/sections/Platform";
import { ServiceDemo } from "@/components/demos/service/ServiceDemo";
import { OwnerDemo } from "@/components/demos/owner/OwnerDemo";
import { Integration } from "@/components/sections/Integration";
import { Engagement } from "@/components/sections/Engagement";
import { TheAsk } from "@/components/sections/TheAsk";
import { Credentials } from "@/components/sections/Credentials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Platform />
      <ServiceDemo />
      <OwnerDemo />
      <Integration />
      <Engagement />
      <TheAsk />
      <Credentials />
    </main>
  );
}
