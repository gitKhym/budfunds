import { PrismaClient } from "@prisma/client";
export async function GET(req: Request, { username }: Record<string, string>) {
  const prisma = new PrismaClient();

  try {
    if (!username) {
      return new Response("No user found", {
        status: 404,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
    const res = await prisma.user.findUnique({
      where: { username },
    });
    return new Response(JSON.stringify({ data: res }, null, 2), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
