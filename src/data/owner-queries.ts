import type { OwnerQueryResponse } from "@/types";

/**
 * Golden path responses for the Owner & Dealer Portal demo.
 * Completely different tone from service responses — warm,
 * conversational, consumer-friendly.
 */
export const ownerResponses: Record<string, OwnerQueryResponse> = {
  "next-service": {
    text: "Your Yamaha F300 engines have 847 hours — you're about 153 hours away from the 1,000-hour major service. This is a big one that includes valve clearance checks, timing belt inspection, and a full compression test. Newport Marine recommends scheduling 2-3 weeks in advance for major services.",
    citation: {
      source: "Yamaha F300 Maintenance Schedule",
      section: "1,000-Hour Service",
    },
    tip: "Pro tip: If you're planning to winterize this season, consider combining it with the 1,000-hour service to save a trip and reduce labor costs.",
    action: {
      type: "schedule",
      label: "Schedule Service at Newport Marine",
      /* Integration stub: DMS appointment booking */
      endpoint: "/api/integrations/dms/schedule",
    },
  },

  oil: {
    text: "Your F300 engines use YAMALUBE 4-M FC-W SAE 10W-30 — it's Yamaha's recommended four-stroke marine oil. Each engine takes about 6.5 liters for an oil change with filter. Your last oil change was November 15, 2025 at 847 hours, so you're all set for now.",
    citation: {
      source: "Yamaha F300 Owner's Manual",
      section: "Lubrication System",
    },
    action: {
      type: "order",
      label: "Order Oil & Filter Kit",
      /* Integration stub: Parts ordering */
      endpoint: "/api/integrations/parts/order",
    },
  },

  winterize: {
    text: "Winterizing your Canyon 326 with twin F300s involves treating fuel, changing oil and gear lube, flushing cooling systems, fogging the cylinders, and disconnecting batteries. It's a 3-4 hour job for a certified technician. Newport Marine typically starts booking winterization in October — scheduling early gets you the best availability.",
    citation: {
      source: "Yamaha F300 Owner's Manual",
      section: "Storage & Winterization",
    },
    tip: "Bundle tip: Winterization + 1,000-hour service together saves approximately $400-600 in combined labor vs. doing them separately.",
    action: {
      type: "schedule",
      label: "Schedule Winterization",
      /* Integration stub: DMS appointment booking */
      endpoint: "/api/integrations/dms/schedule",
    },
  },

  "warning-light": {
    text: "A warning light on your Yamaha F300 could indicate several conditions — overheating, low oil pressure, or an electrical issue. If the alarm is also sounding, reduce throttle immediately and head to port at idle speed. Do not continue running at full power with an active warning.",
    citation: {
      source: "Yamaha F300 Owner's Manual",
      section: "Warning Systems",
    },
    action: {
      type: "call",
      label: "Call Newport Marine: (401) 555-0142",
      /* Integration stub: Click-to-call */
      endpoint: "/api/integrations/dealer/call",
    },
  },
};

/**
 * Match a user query to a golden path response.
 * Simple keyword matching — in production this is the RAG pipeline.
 */
export function matchOwnerQuery(query: string): OwnerQueryResponse {
  const q = query.toLowerCase();

  if (q.includes("service") || q.includes("maintenance") || q.includes("due") || q.includes("next"))
    return ownerResponses["next-service"];
  if (q.includes("oil") && !q.includes("winteriz"))
    return ownerResponses["oil"];
  if (q.includes("winteriz") || q.includes("storage") || q.includes("store"))
    return ownerResponses["winterize"];
  if (q.includes("warning") || q.includes("light") || q.includes("alarm") || q.includes("beep"))
    return ownerResponses["warning-light"];

  // Fallback
  return {
    text: "I can help with that! Try asking about your next service, oil specifications, winterization, or what a warning light means. I'm here to keep your Canyon 326 running beautifully.",
  };
}
