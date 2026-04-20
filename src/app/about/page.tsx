import { Engagement } from "@/components/sections/Engagement";
import { SocialProof } from "@/components/sections/SocialProof";
import { WhitePaperCTA } from "@/components/WhitePaperModal";
import { Footer } from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-14">
      {/* Hero */}
      <section className="py-16 md:py-22 bg-planara-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-8">
            About
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[0.95] mb-6">
            Built by operators,
            <br />
            not consultants.
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-6">
            We&apos;ve shipped products used by billions of people at Google, Apple,
            Uber, Disney, Ford, and Airbus. Now we apply that to the
            $100 billion equipment documentation problem.
          </p>
          <p className="text-lg text-white/40 max-w-2xl leading-relaxed">
            Three things converged: connected equipment generating real-time
            telemetry, an aging workforce taking institutional knowledge with
            them, and AI mature enough to handle safety-critical documentation.
            The window is now.
          </p>
        </div>
      </section>

      <Engagement />

      {/* Onboarding Timeline */}
      <section className="py-12 bg-planara-dark border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="border border-planara-teal/20 rounded-sm p-8 bg-planara-teal/[0.03]">
            <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-3">
              Time to Production
            </p>
            <p className="text-base text-white/70 leading-relaxed max-w-3xl">
              2-4 week path to production with self-serve configuration and
              automated quality checks. Upload documentation, the platform
              auto-generates configuration artifacts in 27 seconds, and your
              team validates results before going live.
            </p>
          </div>
        </div>
      </section>

      <SocialProof />

      {/* Deployment flexibility */}
      <section className="py-12 bg-planara-dark border-t border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm text-white/50 leading-relaxed max-w-3xl">
            Deploy as standalone tools or embed via API into your existing DMS and service platforms.
            Planara doesn&apos;t replace your existing software — it makes it intelligent.
          </p>
        </div>
      </section>

      {/* White paper */}
      <section className="bg-planara-navy px-6 py-16 md:py-22">
        <div className="container mx-auto max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
            Deep Dive
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8 max-w-3xl">
            The $100B documentation problem.
          </h2>
          <WhitePaperCTA variant="dark" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
