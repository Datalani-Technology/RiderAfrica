import { NextRequest } from "next/server";
import { getSettings, updateSettings } from "@/lib/firebase-admin";

export async function GET() {
  return Response.json(await getSettings());
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  await updateSettings(data);
  return Response.json({ success: true });
}
