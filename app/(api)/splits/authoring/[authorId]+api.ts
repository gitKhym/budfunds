import { PrismaClient } from "@prisma/client";
import { useLocalSearchParams } from "expo-router";

export async function GET(req: Request, { authorId }: Record<string, string>) {
  const prisma = new PrismaClient();

  const res = await prisma.split.findMany({
    where: {
      authorId,
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
