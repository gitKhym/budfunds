import { PrismaClient } from "@prisma/client";
import { Role } from "@prisma/client";
export async function POST(
  req: Request,
  { userId, splitGroupId }: Record<string, string>,
) {
  const prisma = new PrismaClient();

  try {
    const data = await prisma.member.create({
      data: {
        userId,
        splitGroupId,
        role: Role.PARTICIPANT,
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
