import { PrismaClient } from "@prisma/client";
import { Record } from "@prisma/client/runtime/library";

export async function POST(
  req: Request,
  { userId, splitGroupId, splitId }: Record<string, string>,
) {
  const prisma = new PrismaClient();

  const { splitName } = await req.json();

  const author = await prisma.author.create({
    data: {
      amountOwed: 50,
      userId,
    },
  });
  const authorId = author.id;

  const res = await prisma.split.create({
    data: {
      authorId,
      splitName,
      splitGroupId,
    },
  });

  try {
    return new Response(JSON.stringify({ res }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return Response.json({ error: err }, { status: 500 });
  }
}
