import { Tractor } from "@phosphor-icons/react/dist/ssr";
import {
  DesignPartnerLayout,
  type DesignPartnerVertical,
} from "@/components/DesignPartnerLayout";

export const metadata = {
  title: "Conduit for heavy & agricultural equipment — Planara",
  description:
    "Planara Conduit for heavy and agricultural equipment OEMs and their dealer networks. Equipment in the field, hours on the meter, service window in the off-season — Conduit makes every dealer answer the same question the same way.",
};

const vertical: DesignPartnerVertical = {
  slug: "heavy-equipment",
  label: "Heavy & agricultural equipment",
  icon: Tractor,
  headline: "Conduit for dealer-network OEMs and the bays they answer to.",
  hookSentence:
    "Equipment in the field. Hours on the meter. Service window in the off-season. Conduit makes every dealer answer the same question the same way.",
  paragraphs: {
    standards:
      "Heavy and ag equipment runs on a stack of standards that vary by platform: hours-based service intervals defined by the OEM (Caterpillar, Komatsu, John Deere, Kubota, AGCO, CNH each have their own), Tier 4 / Stage V emissions, ANSI/ASABE for ag implements, and ROPS/FOPS for operator structural protection. Conduit cites the right standard for the right machine — not a generic interval that the warranty department will dispute.",
    density:
      "A heavy-equipment service manual is a small library: thousands of pages per platform, technical service bulletins issued continuously, warranty bulletins that change reimbursement rules, parts books with thousands of SKUs, and hydraulic and electrical schematics that span fold-out pages. Conduit ingests the whole platform corpus, keyed to model, serial, and configuration — so the dealer technician finds the right page on the right machine on the first try.",
    workflow:
      "Dealer-network OEMs live or die by how consistently their dealers answer the same question. Multi-engine vehicles (main + auxiliary + transmission), seasonal demand peaks at planting and harvest, the operator-versus-tech information split, and the customer-pay versus warranty-work mix all conspire to fragment the answer. Conduit is the layer that gives every dealer the same cited answer — and gives the OEM service ops director a read on where the network is drifting.",
  },
  deploymentNotes:
    "A heavy-equipment Conduit deployment ingests the platform service manuals, the live TSB and warranty bulletin feed, and the parts catalog. Dealer technicians ask in plain language. The OEM service ops director sees what dealers are asking, where the answers are weak, and which bulletins are landing — across the dealer network. Buyer is typically a dealer principal at a multi-store group or an OEM service ops director.",
  applicationFormHints:
    "Tell us what platforms, how many dealers, and what's breaking down — warranty consistency, dealer answer quality, or technician onboarding. Five fields. We read every one. If we think there's a fit, we'll come back to you within a week.",
  heroMock: {
    question: "Service interval at 2,000 hours on the D6T?",
    specs: [
      ["Engine oil", "Cat DEO 15W-40"],
      ["Capacity", "30 L"],
      ["Filter", "1R-1808"],
      ["Hydraulic fluid", "Cat HYDO Advanced 10"],
    ],
    safetyText:
      "Park on level ground. Lower implements. Engage parking brake. Wait for oil to cool.",
    citation: "D6T SEBU · 2000-hr · p. 312",
    equipmentLabel: "D6T · 14,847 hrs",
  },
};

export default function HeavyEquipmentPage() {
  return <DesignPartnerLayout vertical={vertical} />;
}
