import { SignJWT } from "jose";

function secret() {
  return new TextEncoder().encode(
    process.env.ADMIN_JWT_SECRET || "rider-africa-captcha-secret"
  );
}

export async function GET() {
  const ops = ["+", "-", "×"] as const;
  const op = ops[Math.floor(Math.random() * ops.length)];
  let a = Math.floor(Math.random() * 12) + 1;
  let b = Math.floor(Math.random() * 12) + 1;

  let answer: number;
  let question: string;

  if (op === "+") {
    answer = a + b;
    question = `${a} + ${b}`;
  } else if (op === "-") {
    if (b > a) [a, b] = [b, a];
    answer = a - b;
    question = `${a} − ${b}`;
  } else {
    a = Math.floor(Math.random() * 9) + 1;
    b = Math.floor(Math.random() * 9) + 1;
    answer = a * b;
    question = `${a} × ${b}`;
  }

  const token = await new SignJWT({ answer })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("10m")
    .sign(secret());

  return Response.json({ question: `What is ${question}?`, token });
}
