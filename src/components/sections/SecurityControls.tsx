import {
  LockKey,
  UserCircleCheck,
  EyeSlash,
  ShieldWarning,
  WebhooksLogo,
  ChartBar,
} from "@phosphor-icons/react/dist/ssr";

const controls = [
  {
    icon: LockKey,
    title: "Data isolation",
    description:
      "Each manufacturer's documentation, search indices, and telemetry are stored in isolated namespaces. No cross-tenant data access, no shared infrastructure.",
  },
  {
    icon: UserCircleCheck,
    title: "Authentication & access control",
    description:
      "Magic link authentication with three-tier access model: super admin, tenant admin, and user. Row-level security on all database tables.",
  },
  {
    icon: EyeSlash,
    title: "PII protection",
    description:
      "No customer PII stored in the knowledge base. Equipment telemetry is anonymized at ingestion. Personally identifiable fields are stripped before indexing.",
  },
  {
    icon: ShieldWarning,
    title: "Prompt injection prevention",
    description:
      "Multi-layer input sanitization. System prompts are hardened against extraction. Retrieved context is marked with source boundaries to prevent cross-contamination.",
  },
  {
    icon: WebhooksLogo,
    title: "Webhook verification",
    description:
      "All inbound webhooks are signature-verified. Outbound integrations use rotating API keys with scoped permissions. No shared secrets across tenants.",
  },
  {
    icon: ChartBar,
    title: "Full observability",
    description:
      "Every pipeline step is traced via a dedicated observability platform. Query latency, retrieval quality, and generation accuracy are monitored in real time. Anomalies trigger alerts.",
  },
];

export function SecurityControls() {
  return (
    <section className="py-16 md:py-22 bg-planara-navy">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-sm font-mono uppercase tracking-wider text-planara-teal mb-4">
          Security Controls
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 max-w-3xl">
          What we do, specifically.
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mb-16 leading-relaxed">
          Not vague promises. Specific architectural decisions you can verify.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {controls.map((control) => (
            <div
              key={control.title}
              className="border border-white/[0.08] rounded-sm p-6 bg-white/[0.02]"
            >
              <control.icon
                className="w-6 h-6 text-planara-teal mb-4"
                weight="duotone"
              />
              <h3 className="text-base font-semibold text-white mb-2">
                {control.title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                {control.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
