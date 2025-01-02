import { PrismaClient } from "@prisma/client";

export async function GET(req: Request, { username }: Record<string, string>) {
  const prisma = new PrismaClient();

  try {
    const user = await prisma.users.findUnique({
      where: { username },
      include: {
        friendsAsLeft: {
          include: {
            right: true,
          },
        },
        friendsAsRight: {
          include: {
            left: true,
          },
        },
      },
    });

    if (!user) {
      return new Response("User not found", {
        status: 404,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }

    const friends = [
      ...user.friendsAsLeft.map((friend) => friend.right),
      ...user.friendsAsRight.map((friend) => friend.left),
    ];

    // Exclude 'friendsAsLeft' and 'friendsAsRight'
    const { friendsAsLeft, friendsAsRight, ...userWithoutFriendsRelations } =
      user;

    return new Response(
      JSON.stringify({
        ...userWithoutFriendsRelations,
        friends,
      }),
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);
    return Response.json({ error: error }, { status: 500 });
  }
}
