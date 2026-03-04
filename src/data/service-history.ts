import type { ServiceRecord } from "@/types";

export const serviceHistory: Record<string, ServiceRecord[]> = {
  "vessel-001": [
    {
      date: "2025-11-15",
      hours: 847,
      type: "Annual Service",
      items: [
        "Engine oil & filter change (both engines)",
        "Gear oil change (both lower units)",
        "Spark plug inspection",
        "Fuel filter replacement",
        "Impeller inspection",
        "Zinc anode inspection & replacement",
        "Battery load test",
        "Belts & hoses inspection",
      ],
      cost: 2850,
      technician: "Mike Torres",
    },
    {
      date: "2025-06-02",
      hours: 623,
      type: "500-Hour Service",
      items: [
        "Engine oil & filter change (both engines)",
        "Gear oil change (both lower units)",
        "Thermostat inspection",
        "Fuel system inspection",
        "Prop inspection & torque check",
      ],
      cost: 1650,
      technician: "Mike Torres",
    },
    {
      date: "2024-11-20",
      hours: 412,
      type: "Winterization",
      items: [
        "Engine oil & filter change (both engines)",
        "Fuel stabilizer treatment",
        "Cooling system flush & antifreeze",
        "Battery disconnect & trickle charger setup",
        "Gear oil change",
        "Fog engine cylinders",
        "Shrink wrap",
      ],
      cost: 3200,
      technician: "Dave Callahan",
    },
    {
      date: "2024-05-10",
      hours: 198,
      type: "Spring Commissioning",
      items: [
        "De-winterize & fluid check",
        "Battery reinstall & test",
        "Impeller replacement (both engines)",
        "Sea trial & systems check",
      ],
      cost: 1200,
      technician: "Mike Torres",
    },
    {
      date: "2023-09-15",
      hours: 87,
      type: "100-Hour Service",
      items: [
        "Engine oil & filter change (both engines)",
        "Gear oil change (both lower units)",
        "General inspection",
        "Torque check on all fasteners",
      ],
      cost: 950,
      technician: "Dave Callahan",
    },
  ],
};
