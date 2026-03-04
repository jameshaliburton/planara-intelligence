import type { TelemetryData } from "@/types";

export const telemetry: Record<string, TelemetryData> = {
  "vessel-001": {
    engineHours: 847,
    oilPressure: 58,
    coolantTemp: 172,
    batteryVoltage: 12.4,
    fuelLevel: 68,
    timestamp: new Date().toISOString(),
  },
};
