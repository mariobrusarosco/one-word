import { db } from "@/server-side/db/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { channelId: string } }
) {
  const { searchParams } = new URL(req.url);

  try {
    // TODO [PROJECT SPECIFIC FEATURE] : consider a middleware for this auth process
    const profile = getAuth(req);
    if (!profile.userId) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[CHANNEL/MESSAGES_GET]: ", "UNAUTHORIZED");

      return new NextResponse("[UNAUTHORIZED] - [CHANNEL/MESSAGES_GET]", {
        status: 401,
      });
    }

    let messages = null;
    const cursor = searchParams.get("cursor");
    const take = Number(searchParams.get("take")) || 6;

    if (cursor === "0") {
      console.log("----------- first call, cursor 0 ------");

      messages = await db.message.findMany({
        where: { channelId: params.channelId },
        take: -take,
        orderBy: { createdAt: "asc" },
        include: { member: { select: { firstName: true } } },
      });
    } else {
      messages = await db.message.findMany({
        where: { channelId: params.channelId },
        take: -take,
        skip: 1,
        cursor: {
          id: cursor as string,
        },
        orderBy: { createdAt: "asc" },
        include: { member: { select: { firstName: true } } },
      });
    }

    const lastPostInResults = messages[0];
    const lastCursor = messages.length === take ? lastPostInResults?.id : null;

    console.log("messages ", messages.length, lastCursor);

    return NextResponse.json({ messages, lastCursor });
  } catch (error) {
    // TODO [BOILERPLATE] - apply app's logger
    console.log("[CHANNEL/MESSAGES_GET]: ", error);
    return new NextResponse("[INTERNAL ERROR] - [CHANNEL/MESSAGES_GET]", {
      status: 500,
    });
  }
}
