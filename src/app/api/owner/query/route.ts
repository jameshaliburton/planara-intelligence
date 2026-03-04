import { NextRequest, NextResponse } from "next/server";
import { matchOwnerQuery } from "@/data/owner-queries";
import type { OwnerQueryRequest } from "@/types";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as OwnerQueryRequest;

  if (!body.query) {
    return NextResponse.json(
      { error: "Query is required" },
      { status: 400 }
    );
  }

  // In production: forward to RAG pipeline
  // POST https://api.planara.com/v1/owner/query
  const response = matchOwnerQuery(body.query);

  return NextResponse.json(response);
}
