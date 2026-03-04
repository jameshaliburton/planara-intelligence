import { NextRequest, NextResponse } from "next/server";
import { serviceHistory } from "@/data/service-history";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ vesselId: string }> }
) {
  const { vesselId } = await params;

  // In production: forward to Dealer Management System
  // GET https://api.planara.com/v1/service-history/{vesselId}
  const data = serviceHistory[vesselId];

  if (!data) {
    return NextResponse.json(
      { error: "Vessel not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}
