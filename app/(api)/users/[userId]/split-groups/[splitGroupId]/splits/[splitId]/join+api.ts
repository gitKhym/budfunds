import { PrismaClient } from "@prisma/client";
import { Role } from "@prisma/client";
export async function POST(
  req: Request,
  { userId, splitGroupId, splitId }: Record<string, string>,
) {
  const prisma = new PrismaClient();

  const { amountToPay } = await req.json();

  try {
    const data = await prisma.participant.create({
      data: {
        userId,
        splits: {
          create: {
            splitId,
            amountToPay,
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
