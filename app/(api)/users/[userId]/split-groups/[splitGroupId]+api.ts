import { PrismaClient } from "@prisma/client";
export async function GET(
  req: Request,
  { userId, splitGroupId }: Record<string, string>,
) {
  const prisma = new PrismaClient();

  try {
    const data = await prisma.splitGroup.findFirst({
      where: {
        AND: [
          {
            id: splitGroupId,
          },
          {
            members: {
              some: {
                userId,
              },
            },
          },
        ],
      },
      select: {
        id: true,
        createdAt: true,
        splitGroupName: true,
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
