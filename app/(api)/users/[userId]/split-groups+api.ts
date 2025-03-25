import { PrismaClient } from "@prisma/client";
export async function GET(req: Request, { userId }: Record<string, string>) {
  const prisma = new PrismaClient();

  try {
    const data = await prisma.splitGroup.findMany({
      where: {
        members: {
          some: {
            userId,
          },
        },
      },
      include: {
        members: {
          select: {
            user: {
              select: {
                id: true,
                profile: {
                  select: {
                    fname: true,
                    lname: true,
                    avatar: true,
                  },
                },
              },
            },
          },
        },
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
