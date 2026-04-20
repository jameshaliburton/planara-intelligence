export interface FAQItem {
  q: string;
  a: string;
}

export const homepageFAQ: FAQItem[] = [
  {
    q: "How long does deployment take?",
    a: "A working prototype from 2-3 of your manuals takes 1-2 weeks. Pilot deployment with your full documentation library, service-system integration, and real technicians runs 4-8 weeks. You see it working with your own data before committing budget.",
  },
  {
    q: "How does Planara integrate with our existing service-management system?",
    a: "Adapter architecture connects to existing service management systems — DMS, ERP, CMMS, or custom platforms. Work orders flow in, parts are identified with live inventory, and service scheduling triggers automatically. No rip-and-replace required.",
  },
  {
    q: "What happens when a technician corrects a wrong answer?",
    a: "Corrections follow a draft-to-active lifecycle. The technician flags the issue, a reviewer validates it, and the correction updates the knowledge base for all future queries. Every correction is tracked with a full audit trail.",
  },
  {
    q: "Is our documentation secure?",
    a: "Multi-tenant isolation with per-location data separation. Your documentation is never used to train any model. PII is hashed, authentication is enforced at every layer, and on-premises deployment is available for organizations with data residency requirements.",
  },
  {
    q: "What happens when documentation has gaps?",
    a: "The platform detects knowledge gaps automatically. When technicians ask questions the documentation cannot answer with high confidence, those gaps are surfaced to your content team with frequency data and topic clustering. Confidence scoring ensures technicians always know how much to trust a response.",
  },
];
