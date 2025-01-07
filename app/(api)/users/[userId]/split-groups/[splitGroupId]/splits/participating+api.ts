import { PrismaClient } from "@prisma/client";

export async function GET(
  req: Request,
  { userId, splitGroupId }: Record<string, string>,
) {
  const prisma = new PrismaClient();

  const data = await prisma.participantsOnSplits.findMany({
    where: {
      participant: {
        userId,
      },
    },
  });

  try {
    return new Response(JSON.stringify({ data }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return Response.json({ error: err }, { status: 500 });
  }
}
