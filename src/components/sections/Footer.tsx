import { Footer as SharedFooter } from "@planara/design-system";

const NAV_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "See the demo", href: "https://demo.planara.com/demo", external: true },
      { label: "White paper", href: "/whitepaper" },
    ],
  },
  {
    title: "Verticals",
    links: [
      { label: "Marine", href: "/marine" },
      { label: "Manufacturing", href: "/manufacturing" },
      { label: "HVAC", href: "/hvac" },
      { label: "Heavy & agricultural equipment", href: "/heavy-equipment" },
      { label: "Power generation", href: "/power-generation" },
    ],
  },
  {
    title: "For",
    links: [
      { label: "Service leaders", href: "/service-leaders" },
      { label: "Enterprise", href: "/enterprise" },
    ],
  },
];

const CONTACT_ITEMS = [
  { email: "hello@planara.com", caption: "General inquiries" },
  { email: "pilots@planara.com", caption: "Pilot applications" },
];

export function Footer() {
  return (
    <SharedFooter
      propertyName="Conduit"
      tagline="Technical Service Intelligence: cited, safety-validated answers for the people who service the equipment."
      navColumns={NAV_COLUMNS}
      contact={{ title: "Talk to us", items: CONTACT_ITEMS }}
      legalAttribution="Planara Conduit · Technical Service Intelligence"
    />
  );
}
