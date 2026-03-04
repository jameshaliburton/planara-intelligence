import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Platform } from "@/components/sections/Platform";
import { ServiceDemo } from "@/components/demos/service/ServiceDemo";
import { OwnerDemo } from "@/components/demos/owner/OwnerDemo";
import { Integration } from "@/components/sections/Integration";
import { ValueProp } from "@/components/sections/ValueProp";
import { Engagement } from "@/components/sections/Engagement";
import { TheAsk } from "@/components/sections/TheAsk";
import { FAQ } from "@/components/sections/FAQ";
import { Credentials } from "@/components/sections/Credentials";
import { IntegrationToastProvider } from "@/components/IntegrationToast";

export default function Home() {
  return (
    <IntegrationToastProvider>
      <main className="min-h-screen">
        <Hero />
        <Problem />
        <Platform />
        <ServiceDemo />
        <OwnerDemo />
        <Integration />
        <ValueProp />
        <Engagement />
        <TheAsk />
        <FAQ />
        <Credentials />
      </main>
    </IntegrationToastProvider>
  );
}
