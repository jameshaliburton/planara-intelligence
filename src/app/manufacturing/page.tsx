import { Factory } from "@phosphor-icons/react/dist/ssr";
import {
  DesignPartnerLayout,
  type DesignPartnerVertical,
} from "@/components/DesignPartnerLayout";

export const metadata = {
  title: "Conduit for manufacturing — Planara",
  description:
    "Planara Conduit for plant maintenance and reliability teams. Production line uptime is the metric. Conduit gives the maintenance technician the answer before the line goes down.",
};

const vertical: DesignPartnerVertical = {
  slug: "manufacturing",
  label: "Manufacturing",
  icon: Factory,
  headline: "Conduit for the maintenance team that keeps the line running.",
  hookSentence:
    "Production line uptime is the metric. Conduit gives the maintenance technician the answer before the line goes down.",
  paragraphs: {
    standards:
      "Manufacturing has a hard standards stack: OSHA 1910 for lockout-tagout, machine guarding, and electrical safety; ANSI B11 for machine tool safety; NFPA 70E for energized-work boundaries; and the corporate safety SOPs that translate all of that into the language of your plant. Conduit treats those documents as authoritative. Every spec, every warning, every step in a procedure traces back to the page that authorized it.",
    density:
      "Plant maintenance runs on machine manuals from a long tail of OEMs, internal SOPs that diverge from the OEM book, technical service bulletins that update both, and the troubleshooting decision trees that live in the heads of senior techs nearing retirement. Conduit ingests the documentation you have and structures the decision trees you don't yet have written down — before they walk out the door.",
    workflow:
      "Shift handoff is where knowledge falls on the floor. The senior tech who's the only one who knows how to fix the bagger goes home at 3pm and the second-shift tech inherits the symptom without the diagnosis. Conduit is the layer that captures the first-shift tech's reasoning and hands it to the second-shift tech as a cited, ranked answer — not a sticky note on the panel.",
  },
  deploymentNotes:
    "A manufacturing Conduit deployment ingests the OEM equipment manuals, the corporate safety SOPs, and the troubleshooting bulletins. The technician asks in plain language; the answer cites the page. The reliability lead sees what's being asked, what's not being answered well, and where the documentation gap is.",
  applicationFormHints:
    "Tell us what plant, what equipment, and what you're losing to downtime or knowledge transfer. Five fields. We read every one. If we think there's a fit, we'll come back to you within a week.",
  dashboardMock: {
    hero: { eyebrow: "Last 7 days", primary: "Bagger 12 · 38h since last handoff fault" },
    chartLabel: "Queries by line · 14 days",
    metrics: [
      { label: "Lines covered", value: "4 / 6", delta: "+2", icon: "queries" as const },
      { label: "Shifts handed off", value: "21", delta: "+5", icon: "techs" as const },
      { label: "TSBs ingested", value: "28", delta: "live", icon: "citations" as const },
      { label: "First-fix rate", value: "0.78", delta: "vs 0.61", icon: "confidence" as const },
    ],
  },
  heroMock: {
    question: "What's the LOTO procedure on the 4-roller?",
    specs: [
      ["Standard", "OSHA 1910.147"],
      ["Energy isolation", "Electrical + pneumatic"],
      ["Lock count", "2"],
      ["Tag", "Red — line 4"],
    ],
    safetyText:
      "Verify zero-energy state before moving guards. Disconnect main + auxiliary.",
    citation: "Plant SOP · LOTO § 4.2 · p. 18",
    equipmentLabel: "Line 4 · Bagger 12",
  },
};

export default function ManufacturingPage() {
  return <DesignPartnerLayout vertical={vertical} />;
}
