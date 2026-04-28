import { Wind } from "@phosphor-icons/react/dist/ssr";
import {
  DesignPartnerLayout,
  type DesignPartnerVertical,
} from "@/components/DesignPartnerLayout";

export const metadata = {
  title: "Conduit for HVAC — Planara",
  description:
    "Planara Conduit for HVAC service companies and mechanical contractors. The right answer needs to be in the cab before the technician climbs onto the roof.",
};

const vertical: DesignPartnerVertical = {
  slug: "hvac",
  label: "HVAC",
  icon: Wind,
  headline: "Conduit for HVAC service operations.",
  hookSentence:
    "Service trucks roll. The right answer needs to be in the cab before the tech climbs onto the roof.",
  paragraphs: {
    standards:
      "HVAC has a layered standards stack: EPA 608 for refrigerant handling, ASHRAE for system design and commissioning, ASE certifications for the technicians themselves, and a long tail of state and local codes that change at the city line. Conduit cites the right code for the equipment, the location, and the work being done — not a generic answer that the inspector will reject.",
    density:
      "An HVAC service company is multi-OEM by definition: Carrier, Trane, Daikin, Lennox, Mitsubishi, Goodman, plus the controls vendors layered on top. Equipment manuals, refrigerant charts, control wiring diagrams, commissioning procedures, and the bulletins that update them. Conduit ingests the whole library, keyed to model and serial, so the tech doesn't have to know which manual the answer lives in.",
    workflow:
      "Dispatch sends the truck. The clock is running from the moment the technician arrives. Callbacks are expensive, parts trips kill margin, and the difference between a one-visit fix and a three-visit fix is whether the tech had the right diagnostic ladder in front of them. Conduit is the layer that puts the answer in the cab before the climb — and captures what the tech learned on the roof for the next call.",
  },
  deploymentNotes:
    "An HVAC Conduit deployment ingests the equipment libraries you actually service, your internal SOPs, and the regional code references your inspectors use. Technicians ask from the truck. Service managers see callback patterns, parts-trip patterns, and where the documentation is failing the field. Buyer is typically a regional service company or commercial mechanical contractor — not just an OEM.",
  applicationFormHints:
    "Tell us what brands you service, how many technicians you dispatch, and what's costing you the most callbacks. Five fields. We read every one. If we think there's a fit, we'll come back to you within a week.",
  heroMock: {
    question: "Refrigerant charge for the 5-ton on the rooftop?",
    specs: [
      ["Refrigerant", "R-410A"],
      ["Charge", "8 lb 4 oz"],
      ["Subcooling target", "10°F"],
      ["EPA cert", "608 Type II"],
    ],
    safetyText:
      "Recover existing refrigerant. Vent to atmosphere is a violation. Tag the cylinder before transport.",
    citation: "Carrier 50TC OM · § 6.3 · p. 41",
    equipmentLabel: "Rooftop · 50TC-A12",
  },
};

export default function HvacPage() {
  return <DesignPartnerLayout vertical={vertical} />;
}
