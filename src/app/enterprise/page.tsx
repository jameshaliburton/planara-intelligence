import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Buildings,
  CheckCircle,
  Cloud,
  Code,
  Database,
  FileText,
  Gauge,
  Globe,
  Key,
  Lock,
  ShieldCheck,
  Stack,
  UserCircle,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { Footer } from "@/components/sections/Footer";

// ──────────────────────────────────────────────────────────────────────────────
// /enterprise — for OEM execs, manufacturer ops directors, large-fleet buyers.
// Voice: J's. Procurement-grade. No vendor names. No unshipped capabilities.
// Stats audit: "195 checks across 14 dimensions" does not appear on the site
// per audit. Reframed as illustrative — "multi-dimensional eval framework that
// validates retrieval, citation, and safety on every release". No customer
// counts. No DMS auto-write. No cross-tenant learning.
// ──────────────────────────────────────────────────────────────────────────────

type IconWeight =
  | "thin"
  | "light"
  | "regular"
  | "bold"
  | "fill"
  | "duotone";

type IconType = React.ComponentType<{
  className?: string;
  weight?: IconWeight;
}>;

const ENTERPRISE_GETS: Array<{
  title: string;
  body: string;
  icon: IconType;
}> = [
  {
    icon: Key,
    title: "SSO and SAML",
    body: "SAML 2.0 / OIDC against your identity provider. SCIM provisioning where supported. No separate Conduit credentials to manage.",
  },
  {
    icon: UsersThree,
    title: "Role-based access control",
    body: "Roles for technician, service writer, dealer manager, OEM admin. Scoped by region, dealer, equipment family. Permissioned at the document level.",
  },
  {
    icon: FileText,
    title: "Audit logs",
    body: "Every query, every answer, every citation, every correction is logged with user, timestamp, and source documents. Exportable.",
  },
  {
    icon: Stack,
    title: "Namespace isolation",
    body: "Each tenant&apos;s documents, embeddings, conversations, and corrections live in a dedicated namespace. No shared retrieval, no cross-tenant learning, no shared model fine-tunes.",
  },
  {
    icon: Buildings,
    title: "Custom standards integration",
    body: "Your internal service standards, regional regulations, and brand-specific TSBs ingested alongside the OEM corpus and weighted in retrieval.",
  },
  {
    icon: Cloud,
    title: "Flexible deployment",
    body: "Managed by default. Isolated and customer-cloud options scoped per enterprise contract.",
  },
  {
    icon: Globe,
    title: "Data residency options",
    body: "Storage and processing region scoped per contract for tenants with residency requirements.",
  },
  {
    icon: UserCircle,
    title: "Named technical account manager",
    body: "A single point of contact for ingestion, eval review, corrections triage, and roadmap. Weekly syncs during pilot, monthly thereafter.",
  },
];

const PROCUREMENT_ROWS: Array<{ title: string; body: string }> = [
  {
    title: "Data ownership",
    body: "Your documentation stays yours. Your tenant&apos;s embeddings, conversations, and corrections stay yours. We hold a license to operate the service against them. You can export and walk at any time.",
  },
  {
    title: "Training posture",
    body: "We do not train, fine-tune, or improve any model on your data. Each tenant is isolated. There is no cross-tenant transfer, no shared model state, no shared retrieval index.",
  },
  {
    title: "Model and provider transparency",
    body: "Conduit uses purpose-selected language and embedding models with documented latency, cost, and quality characteristics. Provider choices, failover behavior, and bake-off methodology are disclosed under NDA. Models can be swapped without re-ingestion.",
  },
  {
    title: "Tenancy model",
    body: "Logical multi-tenancy by default with namespace isolation at the storage and retrieval layer. Single-tenant and customer-cloud deployments scoped per enterprise contract.",
  },
  {
    title: "Security posture",
    body: "TLS in transit, encryption at rest, scoped credentials per tenant, principle-of-least-privilege for service accounts. SOC 2 process is in motion — stage and timeline disclosed under NDA.",
  },
  {
    title: "Service level",
    body: "Enterprise SLAs — uptime targets, response times, dedicated capacity, residency — negotiated against the contract. We don&apos;t publish a one-size-fits-all number; the right answer depends on your tier and your operation.",
  },
  {
    title: "IP ownership",
    body: "Your documentation, your tenant&apos;s configurations, your tenant&apos;s corrections — yours. The Conduit platform, retrieval pipeline, eval framework, and prompt engineering — ours. Licensed, not transferred.",
  },
];

const DEPLOY_OPTIONS = [
  {
    icon: Gauge,
    title: "Reference app",
    body: "Our white-label technician chat surface, configured for your equipment, your branding, your roles. Fastest path from contract to a tech using it on the bay floor.",
    detail: "Best for: shipping a working surface to dealers without building one.",
  },
  {
    icon: Code,
    title: "Widget &amp; API",
    body: "Embed Conduit&apos;s answer surface inside your existing dealer portal, service tools, or technician app. Authenticated API for query, retrieval, citation, and correction submission.",
    detail: "Best for: OEMs with existing dealer-facing software they want to keep.",
  },
  {
    icon: Stack,
    title: "Custom build",
    body: "Co-development against your spec. Your team owns the surface, our team owns the retrieval and eval layer. Suited to large enterprises with internal product teams.",
    detail: "Best for: enterprises with a product team and a defined dealer-network surface.",
  },
];

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-planara-dark">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-6 max-w-5xl pt-28 pb-20 md:pt-32 md:pb-24">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-6">
            For OEMs &amp; large-fleet operators
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-8 max-w-4xl">
            Conduit at OEM scale.
          </h1>
          <p className="text-xl text-white/65 leading-relaxed max-w-2xl mb-10">
            Multi-tenant by design. Namespace-isolated. Audit-trailed. SSO,
            RBAC, deployment options scoped to your operation. Built for the
            procurement desk and the dealer network at the same time.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@planara.com?subject=Enterprise%20deployment%20%E2%80%94%20Conduit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
            >
              Talk to us about an enterprise deployment
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#what-you-get"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
            >
              What enterprise gets
            </a>
          </div>
        </div>
      </section>

      {/* ── What enterprise gets ── */}
      <section
        id="what-you-get"
        className="py-20 md:py-24 bg-planara-dark border-b border-white/[0.06]"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
            What enterprise gets
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
            The capabilities your security and platform teams will ask for first.
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mb-14 leading-relaxed">
            Most of these aren&apos;t differentiators — they&apos;re table stakes
            for getting through enterprise procurement. They are present.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {ENTERPRISE_GETS.map((g) => (
              <div key={g.title} className="flex gap-4">
                <g.icon
                  className="w-6 h-6 text-planara-teal shrink-0 mt-1"
                  weight="duotone"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {g.title}
                  </h3>
                  <p
                    className="text-base text-white/55 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: g.body }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance & validation ── */}
      <section className="py-20 md:py-24 bg-white border-b border-planara-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            Compliance &amp; validation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
            Every release is graded before it ships.
          </h2>
          <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
            Conduit ships with a multi-dimensional eval framework that
            validates retrieval quality, citation correctness, and safety
            behavior on every release. The same framework is what we run
            against your corpus during pilot before any tech sees an answer.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <EvalCard
              title="Retrieval"
              body="The right chunk reached the model. Measured against a per-tenant golden set. Recall, precedence, ranking."
              icon={Database}
            />
            <EvalCard
              title="Citation"
              body="The cited page actually contains the claim. No fabricated sources, no fabricated page numbers, no fabricated specs."
              icon={FileText}
            />
            <EvalCard
              title="Safety"
              body="Warnings, cautions, and notices from the manual surface alongside the procedure they apply to. Severity preserved."
              icon={ShieldCheck}
            />
          </div>

          <div className="border-l-2 border-planara-teal pl-6 max-w-3xl">
            <p className="text-base text-planara-dark leading-relaxed">
              Per-tenant eval results — your corpus, your queries — are part of
              every release report. You see what the framework measured, what
              passed, what failed, and what changed since last release.
            </p>
          </div>
        </div>
      </section>

      {/* ── Deployment & integration ── */}
      <section className="py-20 md:py-24 bg-planara-dark border-b border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
            Deployment &amp; integration
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
            How Conduit lands inside your operation.
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mb-12 leading-relaxed">
            Pick the one that matches your team&apos;s shape and your dealer
            network&apos;s existing software. The retrieval and eval layer is
            the same in all three.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {DEPLOY_OPTIONS.map((d) => (
              <div
                key={d.title}
                className="border border-white/[0.08] rounded-sm p-7 bg-white/[0.02] flex flex-col"
              >
                <d.icon
                  className="w-7 h-7 text-planara-teal mb-5"
                  weight="duotone"
                />
                <h3
                  className="text-xl font-semibold text-white mb-3"
                  dangerouslySetInnerHTML={{ __html: d.title }}
                />
                <p
                  className="text-sm text-white/60 leading-relaxed mb-5 flex-1"
                  dangerouslySetInnerHTML={{ __html: d.body }}
                />
                <p className="text-xs font-mono uppercase tracking-wider text-planara-teal/70 leading-relaxed">
                  {d.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Procurement ── */}
      <section className="py-20 md:py-24 bg-white border-b border-planara-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-muted mb-4">
            Procurement-friendly
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-planara-dark mb-6 max-w-3xl">
            The questions your security and legal teams will ask.
          </h2>
          <p className="text-lg text-planara-muted max-w-2xl mb-12 leading-relaxed">
            Answered up front. Detail lives under NDA — these are the postures
            we hold to.
          </p>

          <div className="border border-planara-border rounded-sm overflow-hidden">
            {PROCUREMENT_ROWS.map((r, i) => (
              <div
                key={r.title}
                className={`grid grid-cols-1 md:grid-cols-[260px_1fr] ${
                  i > 0 ? "border-t border-planara-border" : ""
                }`}
              >
                <div className="px-6 py-5 bg-planara-light/40 md:bg-planara-light/30">
                  <div className="flex items-center gap-2">
                    <Lock
                      className="w-4 h-4 text-planara-teal"
                      weight="duotone"
                    />
                    <p className="text-sm font-semibold text-planara-dark">
                      {r.title}
                    </p>
                  </div>
                </div>
                <div className="px-6 py-5 border-t md:border-t-0 md:border-l border-planara-border">
                  <p
                    className="text-sm text-planara-muted leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: r.body }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-3 text-sm text-planara-muted max-w-2xl">
            <CheckCircle
              className="w-5 h-5 text-planara-teal shrink-0 mt-0.5"
              weight="duotone"
            />
            <p className="leading-relaxed">
              SOC 2, full security questionnaire, model and provider list, and
              architecture diagrams are available under NDA. Ask and we&apos;ll
              send the package.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-planara-dark border-b border-white/[0.06]">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
            Get started
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-3xl leading-tight">
            Talk to us about an enterprise deployment.
          </h2>
          <p className="text-xl text-white/65 leading-relaxed max-w-2xl mb-10">
            First conversation: 30 minutes. Your equipment, your dealer
            network, your security posture, your timeline. We&apos;ll tell you
            what&apos;s realistic and what isn&apos;t before you spend an hour
            on a security questionnaire.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@planara.com?subject=Enterprise%20deployment%20%E2%80%94%20Conduit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-planara-teal text-planara-dark font-semibold rounded-sm hover:bg-planara-teal/90 transition-colors"
            >
              hello@planara.com
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/service-leaders"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-sm hover:border-white/40 hover:bg-white/[0.04] transition-colors"
            >
              For service leaders
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ─── Subcomponents ──────────────────────────────────────────────────────────

function EvalCard({
  title,
  body,
  icon: Icon,
}: {
  title: string;
  body: string;
  icon: IconType;
}) {
  return (
    <div className="border border-planara-border rounded-sm p-6 bg-planara-light/40">
      <Icon className="w-6 h-6 text-planara-teal mb-4" weight="duotone" />
      <h3 className="text-base font-semibold text-planara-dark mb-2">
        {title}
      </h3>
      <p className="text-sm text-planara-muted leading-relaxed">{body}</p>
    </div>
  );
}
