import { SignJWT, jwtVerify } from "jose";

const getSecret = () =>
  new TextEncoder().encode(process.env.ADMIN_JWT_SECRET || "fallback-secret");

export async function signAdminToken(email: string): Promise<string> {
  return new SignJWT({ email, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(await getSecret());
}

export async function verifyAdminToken(token: string) {
  const { payload } = await jwtVerify(token, await getSecret());
  return payload;
}
