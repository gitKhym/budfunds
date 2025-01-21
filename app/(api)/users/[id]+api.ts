import { PrismaClient } from "@prisma/client";

export async function GET(req: Request, { id }: Record<string, string>) {
  const prisma = new PrismaClient();

  try {
    const data = await prisma.user.findUnique({
      where: { id },
      include: {
        profile: {
          select: {
            fname: true,
            lname: true,
            avatar: true,
          },
        },
        authoring: {
          include: {
            split: true,
          },
        },
        participating: true,
      },
    });

    return new Response(JSON.stringify({ data }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error }, { status: 500 });
  }
}

export async function POST(req: Request, { id }: Record<string, string>) {
  const prisma = new PrismaClient();

  const { fname, lname, avatar } = await req.json();

  try {
    const user = await prisma.user.findUnique({
      where: { username },
      select: { id: true },
    });

    if (!user) {
      throw new Error("User not Found");
    }

    const data = await prisma.profile.create({
      data: {
        fname: fname || null,
        lname: lname || null,
        avatar: avatar || null,
        userId: user.id,
      },
    });

    return new Response(JSON.stringify({ data }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return Response.json({ error: err }, { status: 500 });
  }
}
