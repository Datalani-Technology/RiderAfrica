import { NextRequest } from "next/server";
import { getNotifications, sendNotification } from "@/lib/firebase-admin";

export async function GET() {
  return Response.json(await getNotifications());
}

export async function POST(req: NextRequest) {
  const { title, body, target } = await req.json();
  await sendNotification({ title, body, target });
  return Response.json({ success: true });
}
