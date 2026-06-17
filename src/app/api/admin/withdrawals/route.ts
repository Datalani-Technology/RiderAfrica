import { NextRequest } from "next/server";
import { getWithdrawals } from "@/lib/firebase-admin";

export async function GET() {
  return Response.json(await getWithdrawals());
}

export async function PATCH(req: NextRequest) {
  const { id, action } = await req.json();
  console.log(`Withdrawal ${id}: ${action}`);
  return Response.json({ success: true });
}
