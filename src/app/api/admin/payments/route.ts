import { NextRequest } from "next/server";
import { getPayments } from "@/lib/firebase-admin";

export async function GET() {
  return Response.json(await getPayments());
}

export async function PATCH(req: NextRequest) {
  const { id, action } = await req.json();
  console.log(`Payment ${id}: ${action}`);
  return Response.json({ success: true });
}
