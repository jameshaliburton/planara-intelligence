import { NextRequest, NextResponse } from "next/server";
import { vessels } from "@/data/vessel";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ vesselId: string }> }
) {
  const { vesselId } = await params;

  // In production: forward to Dealer Management System
  // GET https://api.planara.com/v1/vessels/{vesselId}
  const data = vessels[vesselId];

  if (!data) {
    return NextResponse.json(
      { error: "Vessel not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}
