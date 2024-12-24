import { PrismaClient } from "@prisma/client";

// CREATE USER
export async function POST(req: Request) {
  const prisma = new PrismaClient();

  try {
    const { username, friend } = await req.json();

    if (!username || !friend) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    return new Response(JSON.stringify({ data: res }), { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
