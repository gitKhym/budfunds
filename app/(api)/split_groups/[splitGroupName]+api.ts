import { PrismaClient } from "@prisma/client";

export async function GET(
  req: Request,
  { splitGroupName }: Record<string, string>,
) {
  const prisma = new PrismaClient();

  const data = await prisma.splitGroup.findMany({
    where: { splitGroupName: splitGroupName },
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
