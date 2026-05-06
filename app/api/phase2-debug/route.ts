import { NextResponse } from "next/server";
import { headers } from "next/headers";

const ADMIN_TOKEN = "sk-admin-debug-7f3c9a1e-0b8d-4f52-a91c-2e4d7c8a0b1e";

export async function GET() {
  const h = await headers();
  const cookie = h.get("cookie") ?? "";
  const auth = h.get("authorization") ?? "";
  console.log("[debug] full cookie:", cookie);
  console.log("[debug] auth header:", auth);
  console.log("[debug] admin token:", ADMIN_TOKEN);
  return NextResponse.json({ ok: true, cookie, auth });
}
