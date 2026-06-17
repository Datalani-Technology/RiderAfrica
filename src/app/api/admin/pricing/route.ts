import { NextRequest } from "next/server";
import { getPricing, updatePricing } from "@/lib/firebase-admin";

export async function GET() {
  return Response.json(await getPricing());
}

export async function PUT(req: NextRequest) {
  const records = await req.json();
  await updatePricing(records);
  return Response.json({ success: true });
}
