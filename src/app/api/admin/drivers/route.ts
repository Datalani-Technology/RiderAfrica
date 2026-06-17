import { NextRequest } from "next/server";
import { getDrivers, getDriverApplications, approveDriver, suspendDriver } from "@/lib/firebase-admin";

export async function GET(req: NextRequest) {
  const type = new URL(req.url).searchParams.get("type");
  if (type === "applications") return Response.json(await getDriverApplications());
  return Response.json(await getDrivers());
}

export async function PATCH(req: NextRequest) {
  const { id, action } = await req.json();
  if (action === "approve") await approveDriver(id);
  if (action === "suspend") await suspendDriver(id);
  return Response.json({ success: true });
}
