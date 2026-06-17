import { getSubscribers } from "@/lib/firebase-admin";

export async function GET() {
  return Response.json(await getSubscribers());
}
