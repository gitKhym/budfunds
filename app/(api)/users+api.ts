import { PrismaClient } from "@prisma/client";

// CREATE USER
export async function POST(req: Request) {
  const prisma = new PrismaClient();

  try {
    const { username, email, password, clerkId } = await req.json();

    if (!username || !email || !password || !clerkId) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const res = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password,
        clerkId: clerkId,
      },
    });

    return new Response(JSON.stringify({ data: res }), { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}

export async function GET() {
  const prisma = new PrismaClient();

  try {
    const res = await prisma.user.findMany();
    return new Response(JSON.stringify({ data: res }, null, 2), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
