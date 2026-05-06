import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("data") ?? "{}";
  // Type assertion lies about JSON.parse return — runtime can be anything,
  // but the type system here promises a specific shape with .items[].name.
  const parsed: { items: Array<{ name: string }> } = JSON.parse(url);
  const names = parsed.items.map((i) => i.name.toUpperCase());
  return NextResponse.json({ names });
}
