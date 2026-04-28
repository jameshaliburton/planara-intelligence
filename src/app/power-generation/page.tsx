import { Lightning } from "@phosphor-icons/react/dist/ssr";
import {
  DesignPartnerLayout,
  type DesignPartnerVertical,
} from "@/components/DesignPartnerLayout";

export const metadata = {
  title: "Conduit for power generation — Planara",
  description:
    "Planara Conduit for power generation OEMs and their service networks. A genset is one part of a larger reliability promise. Conduit makes sure the technician shows up with the right manual before the customer's UPS runs out.",
};

const vertical: DesignPartnerVertical = {
  slug: "power-generation",
  label: "Power generation",
  icon: Lightning,
  headline: "Conduit for the gensets that can't fail.",
  hookSentence:
    "A genset is one part of a larger reliability promise. Conduit makes sure the technician shows up with the right manual before the customer's UPS runs out.",
  paragraphs: {
    standards:
      "Power generation lives inside a hard standards stack: NFPA 70 (NEC) for the wiring, NFPA 110 for emergency and standby power systems, NFPA 37 for engine installations, EPA Tier 4 for emissions, the corresponding state and regional codes, and the customer-specific reliability tier requirements (Tier III/IV data center, Joint Commission for hospitals, telecom uptime SLAs). Conduit cites the right standard for the right install — not a generic answer that the AHJ will reject at inspection.",
    density:
      "Genset service technicians work across OEMs (Generac, Cummins, Kohler, Caterpillar, MTU, GE Vernova) and across components: the prime mover, the alternator, the control panel, the ATS, the switchgear, and the paralleling logic if the install is multi-unit. Each layer has its own manual, its own bulletin stream, and its own commissioning procedure. Conduit ingests the whole stack so the tech doesn't carry a binder bag onto the customer's site.",
    workflow:
      "Power-gen service is distributed: regional teams covering customers from data centers to hospitals to telecom huts. Maintenance is runtime-based and load-bank scheduled, but the unplanned calls — the 2am hospital generator that didn't transfer — define the relationship. Conduit is the layer that gets the right manual into the technician's hands before the truck rolls, and captures what they learned on the call so the next 2am call is faster.",
  },
  deploymentNotes:
    "A power-generation Conduit deployment ingests the genset OEM manuals, the control panel and ATS documentation, the switchgear and paralleling configurations, and the relevant NFPA / NEC references. Field technicians ask before and during the call. Service ops sees uptime patterns, technician knowledge gaps, and where the documentation is failing the most critical customers.",
  applicationFormHints:
    "Tell us what platforms you service, what your customer mix looks like (data center, healthcare, telecom, commercial), and where reliability is being lost. Five fields. We read every one. If we think there's a fit, we'll come back to you within a week.",
  dashboardMock: {
    hero: { eyebrow: "Last 30 days", primary: "47 sites · 0 missed transfers" },
    chartLabel: "Site queries · 30 days",
    metrics: [
      { label: "Sites covered", value: "47", delta: "+6", icon: "queries" as const },
      { label: "Maintenance windows", value: "138", delta: "completed", icon: "techs" as const },
      { label: "After-hours calls", value: "9", delta: "−3 wk/wk", icon: "techs" as const },
      { label: "NFPA cites served", value: "284", delta: "70 / 110 / 37", icon: "citations" as const },
    ],
  },
  heroMock: {
    question: "ATS won't transfer — diagnostic ladder?",
    specs: [
      ["Genset", "Cummins QSK60"],
      ["ATS", "ASCO 7000"],
      ["Setting", "Re-transfer delay 5 s"],
      ["Last test", "12 days ago"],
    ],
    safetyText:
      "Verify utility is dead before manual transfer. Genset will start in 10 s — clear the cabinet.",
    citation: "ASCO 7000 IOM · § 7.2 · p. 88",
    equipmentLabel: "Hospital · Bldg 4 · 1.25 MW",
  },
};

export default function PowerGenerationPage() {
  return <DesignPartnerLayout vertical={vertical} />;
}
