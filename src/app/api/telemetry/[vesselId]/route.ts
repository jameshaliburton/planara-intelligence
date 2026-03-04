import { NextRequest, NextResponse } from "next/server";
import { telemetry } from "@/data/telemetry";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ vesselId: string }> }
) {
  const { vesselId } = await params;

  // In production: forward to Siren Marine API
  // GET https://api.sirenmarine.com/v2/devices/{deviceId}/telemetry
  const data = telemetry[vesselId];

  if (!data) {
    return NextResponse.json(
      { error: "Vessel not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}
