import { NextRequest } from "next/server";
import { signAdminToken } from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }
  const token = await signAdminToken(email);
  const res = Response.json({ success: true });
  res.headers.set(
    "Set-Cookie",
    `admin_token=${token}; HttpOnly; Path=/; Max-Age=28800; SameSite=Strict`
  );
  return res;
}
