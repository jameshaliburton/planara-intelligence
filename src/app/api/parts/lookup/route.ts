import { NextRequest, NextResponse } from "next/server";
import { lookupParts } from "@/data/parts";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q") ?? "";

  if (!query) {
    return NextResponse.json(
      { error: "Search query (q) is required" },
      { status: 400 }
    );
  }

  // In production: forward to parts supplier API
  // GET https://api.planara.com/v1/parts/search?q={query}
  const results = lookupParts(query);

  return NextResponse.json(results);
}
