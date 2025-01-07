import { PrismaClient } from "@prisma/client";
import { useLocalSearchParams } from "expo-router";

export async function GET(req: Request) {
  const prisma = new PrismaClient();

  try {
    const url = new URL(req.url);
    const username = url.searchParams.get("username");

    if (!username) {
      return new Response(JSON.stringify({ error: "Username is required" }), {
        status: 400,
      });
    }

    const data = await prisma.user.findUnique({
      where: { username },
      select: {
        id: true,
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
