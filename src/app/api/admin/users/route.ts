import { NextRequest } from "next/server";
import { getUsers, suspendUser, activateUser, deleteUser } from "@/lib/firebase-admin";

export async function GET() {
  return Response.json(await getUsers());
}

export async function PATCH(req: NextRequest) {
  const { id, action } = await req.json();
  if (action === "suspend") await suspendUser(id);
  if (action === "activate") await activateUser(id);
  return Response.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await deleteUser(id);
  return Response.json({ success: true });
}
