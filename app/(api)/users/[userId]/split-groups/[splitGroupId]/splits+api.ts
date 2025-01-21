import { SplitInvolvement } from "@/enums";
import { PrismaClient } from "@prisma/client";

export async function GET(
  req: Request,
  { userId, splitGroupId }: Record<string, string>,
) {
  try {
    const url = new URL(req.url);
    const userInvolvement = url.searchParams.get("userInvolvement");

    let data = null;

    const prisma = new PrismaClient().$extends({
      model: {
        split: {
          async findSplitsAuthoring(userId: string, splitGroupId: string) {
            return prisma.split.findMany({
              where: {
                AND: [
                  {
                    splitGroupId,
                  },
                  {
                    author: {
                      userId,
                    },
                  },
                ],
              },
              select: {
                id: true,
                createdAt: true,
                splitName: true,
                isSettled: true,
                author: {
                  select: {
                    isSettled: true,
                    amountOwed: true,
                  },
                },
                participants: {
                  select: {
                    amountToPay: true,
                    amountPaid: true,
                    isSettled: true,
                    status: true,
                    participant: {
                      select: {
                        user: {
                          select: {
                            profile: {
                              select: {
                                fname: true,
                                lname: true,
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            });
          },
          async findSplitsParticipating(userId: string, splitGroupId: string) {
            return prisma.split.findMany({
              where: {
                AND: [
                  {
                    splitGroupId,
                  },
                  {
                    participants: {
                      some: {
                        participant: {
                          userId,
                        },
                      },
                    },
                  },
                ],
              },
              select: {
                id: true,
                createdAt: true,
                splitName: true,
                isSettled: true,
                participants: {
                  select: {
                    amountToPay: true,
                    amountPaid: true,
                    isSettled: true,
                    status: true,
                  },
                  where: {
                    participant: {
                      userId,
                    },
                  },
                },
                author: {
                  select: {
                    user: {
                      select: {
                        profile: {
                          select: {
                            fname: true,
                            lname: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            });
          },
        },
      },
    });

    switch (userInvolvement) {
      case SplitInvolvement.PARTICIPATING:
        data = await prisma.split.findSplitsParticipating(userId, splitGroupId);
        break;
      case SplitInvolvement.AUTHORING:
        data = await prisma.split.findSplitsAuthoring(userId, splitGroupId);
        break;
      default:
        return Response.json(
          {
            error:
              "Provide a SplitInvolvement, but change this later tho to have default behaviour",
          },
          { status: 500 },
        );
    }

    return new Response(JSON.stringify({ data }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return Response.json({ error: err }, { status: 500 });
  }
}
