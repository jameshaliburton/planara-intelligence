import type { VesselData } from "@/types";

export const vessels: Record<string, VesselData> = {
  "vessel-001": {
    id: "vessel-001",
    name: "Reel Therapy",
    builder: "Grady-White",
    model: "Canyon 326",
    year: 2023,
    engines: [
      {
        model: "Yamaha F300CA",
        serial: "6DK-1042851",
        year: 2023,
        hours: 847,
      },
      {
        model: "Yamaha F300CA",
        serial: "6DK-1042852",
        year: 2023,
        hours: 847,
      },
    ],
    location: "Newport Shipyard, Newport, RI",
    dealer: {
      name: "Newport Marine",
      phone: "(401) 555-0142",
      email: "service@newportmarine.com",
      address: "1 Commercial Wharf, Newport, RI 02840",
      hours: "Mon-Fri 7:30 AM - 5:00 PM, Sat 8:00 AM - 12:00 PM",
    },
  },
};
