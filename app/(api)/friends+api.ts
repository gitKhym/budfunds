import { PrismaClient } from "@prisma/client";

// FRIEND USER
export async function POST(req: Request) {
  const prisma = new PrismaClient();

  try {
    const { userLeft, userRight } = await req.json();

    if (!userLeft || !userRight) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    await prisma.friends.create({
      data: {
        left: { connect: { id: userLeft } },
        right: { connect: { id: userRight } },
      },
    });

    return new Response(JSON.stringify({ message: "Friendship successful" }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}

// REMOVE FRIEND
export async function DELETE(req: Request) {
  const prisma = new PrismaClient();

  try {
    // User, User to be removed
    const { userIdA, userIdB } = await req.json();

    if (!userIdA || !userIdB) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    await prisma.friends.delete({
      where: {
        leftId_rightId: {
          leftId: userIdA,
          rightId: userIdB,
        },
      },
    });

    return new Response(JSON.stringify({ message: "Unfriend Successful" }));
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
