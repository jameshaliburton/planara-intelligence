import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Platform } from "@/components/sections/Platform";
import { ServiceDemo } from "@/components/demos/service/ServiceDemo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Platform />
      <ServiceDemo />
    </main>
  );
}
