import { NextRequest, NextResponse } from "next/server";
import { matchServiceQuery } from "@/data/service-queries";
import type { ServiceQueryRequest } from "@/types";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as ServiceQueryRequest;

  if (!body.query) {
    return NextResponse.json(
      { error: "Query is required" },
      { status: 400 }
    );
  }

  // In production: forward to RAG pipeline
  // POST https://api.planara.com/v1/service/query
  const response = matchServiceQuery(body.query);

  return NextResponse.json(response);
}
