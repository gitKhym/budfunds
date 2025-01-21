import { PrismaClient } from "@prisma/client";
import { useLocalSearchParams } from "expo-router";

export async function POST(req: Request) {
  const prisma = new PrismaClient();

  const { splitName, splitGroupId, userId } = await req.json();

  const splits = [
    {
      username: "kayyy",
      amountOwed: 4210,
    },
    {
      username: "shiyaohan",
      amountOwed: 4210,
    },
  ];

  const author = await prisma.author.create({
    data: {
      amountOwed: 100,
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
