import { PrismaClient } from "@prisma/client";

export async function GET(req: Request) {
  const prisma = new PrismaClient();

  try {
    const data = await prisma.splitGroup.findMany({
      include: {
        splits: {
          include: {
            participants: true,
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
