import { PrismaClient, Role } from "@prisma/client";
export async function POST(req: Request, { userId }: Record<string, string>) {
  const prisma = new PrismaClient();

  const { splitGroupName } = await req.json();

  const res = await prisma.splitGroup.create({
    data: {
      splitGroupName,
      members: {
        create: {
          userId: userId,
          role: Role.ADMIN,
        },
      },
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
