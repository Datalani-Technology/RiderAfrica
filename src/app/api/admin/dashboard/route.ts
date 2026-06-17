import { getDashboardStats } from "@/lib/firebase-admin";

export async function GET() {
  const stats = await getDashboardStats();
  return Response.json(stats);
}
