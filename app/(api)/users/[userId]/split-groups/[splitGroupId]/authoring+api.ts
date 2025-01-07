import { PrismaClient } from "@prisma/client";
import { useLocalSearchParams } from "expo-router";

export async function GET(
  req: Request,
  { userId, splitGroupId }: Record<string, string>,
) {
  const prisma = new PrismaClient();

  const author = await prisma.author.findMany({
    where: { userId },
  });

  const authorIdList = author.map((a) => a.id);

  const data = await prisma.split.findMany({
    where: {
      authorId: {
        in: authorIdList,
      },
      splitGroupId,
    },
    include: { participants: true },
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
