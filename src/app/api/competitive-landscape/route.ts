import { readFileSync } from "fs";
import { join } from "path";
import { NextRequest, NextResponse } from "next/server";

const PASSWORD = process.env.COMPETITIVE_LANDSCAPE_PASSWORD || "planara2026";

let cachedHtml: string | null = null;

function getHtml() {
  if (!cachedHtml) {
    cachedHtml = readFileSync(
      join(process.cwd(), "src/data/competitive-landscape.html"),
      "utf-8"
    );
  }
  return cachedHtml;
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (body.password !== PASSWORD) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  return NextResponse.json({ html: getHtml() });
}
