import type { PartInfo } from "@/types";

export const partsCatalog: Record<string, PartInfo> = {
  // Oil & Filters
  "LUB-10W30-FC": {
    partNumber: "LUB-10W30-FC",
    name: "YAMALUBE 4-M FC-W SAE 10W-30 (1 Qt)",
    price: 12.99,
    inStock: true,
    qty: 24,
  },
  "69J-13440-04": {
    partNumber: "69J-13440-04",
    name: "Oil Filter Element (F300)",
    price: 18.95,
    inStock: true,
    qty: 12,
  },

  // Spark Plugs
  "LFR6A-11": {
    partNumber: "LFR6A-11",
    name: "NGK Spark Plug LFR6A-11",
    price: 6.49,
    inStock: true,
    qty: 48,
  },

  // Gear Oil
  "ACC-GEARL-UB-QT": {
    partNumber: "ACC-GEARL-UB-QT",
    name: "YAMALUBE Gear Oil API GL-5 SAE 80W-90 (1 Qt)",
    price: 14.99,
    inStock: true,
    qty: 18,
  },

  // Cooling System
  "6AW-12411-00": {
    partNumber: "6AW-12411-00",
    name: "Thermostat Assembly (F300)",
    price: 42.50,
    inStock: true,
    qty: 4,
  },
  "6CE-12457-00": {
    partNumber: "6CE-12457-00",
    name: "Water Pump Impeller (F300)",
    price: 67.95,
    inStock: true,
    qty: 6,
  },

  // Fuel System
  "6P3-24563-01": {
    partNumber: "6P3-24563-01",
    name: "Fuel Filter Element (F300)",
    price: 24.50,
    inStock: true,
    qty: 8,
  },

  // Anodes
  "6CE-45251-01": {
    partNumber: "6CE-45251-01",
    name: "Lower Unit Zinc Anode (F300)",
    price: 28.00,
    inStock: true,
    qty: 10,
  },
  "6CE-11325-00": {
    partNumber: "6CE-11325-00",
    name: "Internal Engine Anode (F300)",
    price: 15.50,
    inStock: false,
    qty: 0,
  },

  // Winterization
  "ACC-FSTAB-PL-32": {
    partNumber: "ACC-FSTAB-PL-32",
    name: "Fuel Stabilizer & Conditioner Plus (32 oz)",
    price: 19.99,
    inStock: true,
    qty: 15,
  },
  "ACC-STORFO-GG-01": {
    partNumber: "ACC-STORFO-GG-01",
    name: "Storage Fogging Oil (12 oz)",
    price: 11.99,
    inStock: true,
    qty: 20,
  },
};

/** Lookup parts by keyword or part number */
export function lookupParts(query: string): PartInfo[] {
  const q = query.toLowerCase();
  return Object.values(partsCatalog).filter(
    (p) =>
      p.partNumber.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q)
  );
}
