import type { ServiceQueryResponse } from "@/types";

/**
 * Golden path responses for the Service Intelligence demo.
 * Keyed by normalized query pattern. In production these come from
 * the RAG pipeline — here they're hardcoded in the exact response shape.
 */
export const serviceResponses: Record<string, ServiceQueryResponse> = {
  oil: {
    citations: [
      {
        source: "Yamaha F300 Owner's Manual",
        section: "Lubrication System",
        page: 72,
      },
      {
        source: "LIT-18626-12-51",
        section: "Periodic Maintenance Schedule",
        page: 45,
      },
    ],
    content: [
      {
        type: "text",
        text: "The Yamaha F300 requires YAMALUBE 4-M FC-W SAE 10W-30 four-stroke marine engine oil. This is a fully-synthetic formulation designed for the high-RPM, high-load marine environment.",
      },
      {
        type: "spec-table",
        specs: [
          { label: "Oil Type", value: "YAMALUBE 4-M FC-W", unit: "" },
          { label: "Viscosity", value: "SAE 10W-30", unit: "" },
          { label: "Total Capacity", value: "7.1", unit: "L" },
          {
            label: "Oil Change Capacity (with filter)",
            value: "6.5",
            unit: "L",
          },
          { label: "Oil Change Interval", value: "100 hours or annually" },
          { label: "Oil Filter", value: "69J-13440-04", unit: "" },
        ],
      },
      {
        type: "diagram",
        diagram: { type: "lubrication", label: "F300 Lubrication System" },
      },
      {
        type: "parts",
        parts: [
          {
            partNumber: "LUB-10W30-FC",
            name: "YAMALUBE 4-M FC-W SAE 10W-30 (1 Qt)",
            price: 12.99,
            inStock: true,
            qty: 24,
          },
          {
            partNumber: "69J-13440-04",
            name: "Oil Filter Element (F300)",
            price: 18.95,
            inStock: true,
            qty: 12,
          },
        ],
      },
    ],
  },

  overheating: {
    safety: {
      level: "warning",
      message:
        "Engine overheating can cause severe damage. Do not operate engine above 203°F (95°C) coolant temperature. If warning alarm sounds, reduce throttle immediately and check cooling system.",
    },
    citations: [
      {
        source: "Yamaha F300 Owner's Manual",
        section: "Cooling System",
        page: 58,
      },
      {
        source: "Yamaha F300 Service Manual",
        section: "Troubleshooting — Overheating",
        page: 112,
      },
    ],
    content: [
      {
        type: "text",
        text: "Engine overheating at low RPM is typically caused by restricted water flow through the cooling system. The F300 thermostat opens at 143°F (61.5°C). Current telemetry shows coolant at 172°F — within normal operating range but worth monitoring.",
      },
      {
        type: "diagram",
        diagram: { type: "cooling", label: "F300 Cooling System Flow" },
      },
      {
        type: "procedure",
        steps: [
          {
            step: 1,
            instruction:
              "Check water intake screens on lower unit for debris or marine growth blockage.",
          },
          {
            step: 2,
            instruction:
              "Inspect tell-tale (pilot water) outlet for steady flow at idle. Weak or intermittent stream indicates impeller or blockage issue.",
          },
          {
            step: 3,
            instruction:
              "Remove and inspect water pump impeller (6CE-12457-00). Replace if vanes are worn, cracked, or deformed.",
            warning:
              "Impeller replacement requires lower unit removal. Follow torque specs on reassembly.",
          },
          {
            step: 4,
            instruction:
              "Test thermostat operation. Submerge in water and heat to 143°F (61.5°C) — valve should begin to open. Replace if stuck.",
          },
          {
            step: 5,
            instruction:
              "Inspect all cooling passages and hoses for salt/mineral buildup. Flush with descaling solution if restricted.",
          },
          {
            step: 6,
            instruction:
              "Check head gasket for signs of exhaust gas intrusion into cooling passages (bubbles in coolant, milky oil).",
          },
          {
            step: 7,
            instruction:
              "After repair, run engine at idle for 10 minutes and verify thermostat opening and stable temperature below 185°F.",
          },
        ],
      },
      {
        type: "parts",
        parts: [
          {
            partNumber: "6CE-12457-00",
            name: "Water Pump Impeller (F300)",
            price: 67.95,
            inStock: true,
            qty: 6,
          },
          {
            partNumber: "6AW-12411-00",
            name: "Thermostat Assembly (F300)",
            price: 42.5,
            inStock: true,
            qty: 4,
          },
        ],
      },
      {
        type: "work-order-cta",
        text: "Create a work order for cooling system diagnosis and repair.",
      },
    ],
  },

  winterization: {
    safety: {
      level: "caution",
      message:
        "Perform winterization in a well-ventilated area. Fogging oil produces visible exhaust smoke. Ensure fuel system is fully treated before extended storage.",
    },
    citations: [
      {
        source: "Yamaha F300 Owner's Manual",
        section: "Storage & Winterization",
        page: 88,
      },
      {
        source: "LIT-18626-12-51",
        section: "Extended Storage Procedures",
        page: 92,
      },
    ],
    content: [
      {
        type: "text",
        text: "Complete winterization procedure for the Yamaha F300CA. Current engine hours: 847. Based on telemetry, engines are approaching 1,000-hour major service — consider combining winterization with the 1,000-hour service interval to reduce downtime.",
      },
      {
        type: "procedure",
        steps: [
          {
            step: 1,
            instruction:
              "Add fuel stabilizer (ACC-FSTAB-PL-32) to fuel tank. Run engines for 10 minutes to circulate treated fuel through the system.",
          },
          {
            step: 2,
            instruction:
              "Change engine oil and filter on both engines. Use YAMALUBE 4-M FC-W SAE 10W-30. Capacity: 6.5L per engine with filter.",
            warning:
              "Run engine briefly to warm oil before draining. Hot oil flows more completely.",
          },
          {
            step: 3,
            instruction:
              "Flush cooling system with fresh water using flush port. Run for 15 minutes minimum per engine.",
          },
          {
            step: 4,
            instruction:
              "Change gear oil in both lower units. Inspect drain plug gaskets. Use API GL-5 SAE 80W-90. Capacity: 1.04L per unit.",
            warning:
              "Check drained gear oil for water (milky color) — indicates seal failure requiring immediate repair before storage.",
          },
          {
            step: 5,
            instruction:
              "Fog engine cylinders. With engine running at idle, spray fogging oil (ACC-STORFO-GG-01) into each throttle body until engine stalls from excess oil.",
          },
          {
            step: 6,
            instruction:
              "Disconnect batteries and connect trickle charger / battery maintainer. Verify battery voltage is 12.4V or above.",
          },
          {
            step: 7,
            instruction:
              "Apply corrosion inhibitor to all exposed metal surfaces, electrical connections, and prop shafts. Cover engine cowlings.",
          },
        ],
      },
      {
        type: "parts",
        parts: [
          {
            partNumber: "LUB-10W30-FC",
            name: "YAMALUBE 4-M FC-W SAE 10W-30 (1 Qt)",
            price: 12.99,
            inStock: true,
            qty: 24,
          },
          {
            partNumber: "69J-13440-04",
            name: "Oil Filter Element (F300)",
            price: 18.95,
            inStock: true,
            qty: 12,
          },
          {
            partNumber: "ACC-GEARL-UB-QT",
            name: "YAMALUBE Gear Oil API GL-5 SAE 80W-90 (1 Qt)",
            price: 14.99,
            inStock: true,
            qty: 18,
          },
          {
            partNumber: "ACC-FSTAB-PL-32",
            name: "Fuel Stabilizer & Conditioner Plus (32 oz)",
            price: 19.99,
            inStock: true,
            qty: 15,
          },
          {
            partNumber: "ACC-STORFO-GG-01",
            name: "Storage Fogging Oil (12 oz)",
            price: 11.99,
            inStock: true,
            qty: 20,
          },
        ],
      },
    ],
  },

  "next-service": {
    citations: [
      {
        source: "Yamaha F300 Owner's Manual",
        section: "Periodic Maintenance Schedule",
        page: 45,
      },
    ],
    content: [
      {
        type: "text",
        text: "Based on current engine hours (847) and service history, the next scheduled service is the 1,000-hour major service interval — due in approximately 153 engine hours.",
      },
      {
        type: "service-checklist",
        checklist: [
          {
            item: "Engine oil & filter change",
            interval: "Every 100 hrs",
            lastCompleted: "2025-11-15 (847 hrs)",
            due: false,
          },
          {
            item: "Gear oil change",
            interval: "Every 100 hrs",
            lastCompleted: "2025-11-15 (847 hrs)",
            due: false,
          },
          {
            item: "Spark plug replacement",
            interval: "Every 300 hrs",
            lastCompleted: "2025-06-02 (623 hrs)",
            due: true,
          },
          {
            item: "Fuel filter replacement",
            interval: "Every 500 hrs",
            lastCompleted: "2025-11-15 (847 hrs)",
            due: false,
          },
          {
            item: "Water pump impeller",
            interval: "Every 500 hrs or 3 years",
            lastCompleted: "2024-05-10 (198 hrs)",
            due: true,
          },
          {
            item: "Valve clearance check",
            interval: "Every 1,000 hrs",
            lastCompleted: "Never",
            due: true,
          },
          {
            item: "Timing belt inspection",
            interval: "Every 1,000 hrs",
            lastCompleted: "Never",
            due: true,
          },
          {
            item: "Full compression test",
            interval: "Every 1,000 hrs",
            lastCompleted: "Never",
            due: true,
          },
        ],
      },
      {
        type: "parts",
        parts: [
          {
            partNumber: "LFR6A-11",
            name: "NGK Spark Plug LFR6A-11",
            price: 6.49,
            inStock: true,
            qty: 48,
          },
          {
            partNumber: "6CE-12457-00",
            name: "Water Pump Impeller (F300)",
            price: 67.95,
            inStock: true,
            qty: 6,
          },
          {
            partNumber: "LUB-10W30-FC",
            name: "YAMALUBE 4-M FC-W SAE 10W-30 (1 Qt)",
            price: 12.99,
            inStock: true,
            qty: 24,
          },
          {
            partNumber: "69J-13440-04",
            name: "Oil Filter Element (F300)",
            price: 18.95,
            inStock: true,
            qty: 12,
          },
        ],
      },
      {
        type: "work-order-cta",
        text: "Schedule 1,000-hour major service.",
      },
    ],
  },
};

/**
 * Match a user query to a golden path response.
 * Simple keyword matching — in production this is the RAG pipeline.
 */
export function matchServiceQuery(query: string): ServiceQueryResponse {
  const q = query.toLowerCase();

  if (q.includes("oil") && !q.includes("overheat") && !q.includes("winteriz"))
    return serviceResponses["oil"];
  if (q.includes("overheat") || q.includes("temperature") || q.includes("cooling"))
    return serviceResponses["overheating"];
  if (q.includes("winteriz") || q.includes("storage") || q.includes("store"))
    return serviceResponses["winterization"];
  if (q.includes("service") || q.includes("maintenance") || q.includes("due") || q.includes("next"))
    return serviceResponses["next-service"];

  // Fallback
  return {
    citations: [
      {
        source: "Yamaha F300 Owner's Manual",
        section: "General",
        page: 1,
      },
    ],
    content: [
      {
        type: "text",
        text: `I can help with that. Try asking about oil specifications, engine overheating diagnostics, winterization procedures, or service schedules for the Yamaha F300.`,
      },
    ],
  };
}
