import { db } from "@/server-side/db/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { MessageInputData } from "@/domains/messages/typing/enums-and-interfaces";

export async function POST(
  req: NextRequest,
  { params }: { params: { channelId: string } }
) {
  try {
    // TODO [PROJECT SPECIFIC FEATURE] : consider a middleware for this auth process
    const profile = getAuth(req);
    if (!profile.userId) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[MESSAGE_POST]: ", "UNAUTHORIZED");

      return new NextResponse("[UNAUTHORIZED] - [MESSAGE_POST]", {
        status: 401,
      });
    }

    const body: MessageInputData & { memberId: string } = await req.json();
    if (!body.content) {
      return new NextResponse("[Invalid payload] - [MESSAGE_POST]", {
        status: 400,
      });
    }

    const newMessage = await db.message.create({
      data: {
        content: body.content,
        channelId: params.channelId,
        memberId: body.memberId,
      },
    });

    return NextResponse.json(newMessage);
  } catch (error) {
    // TODO [BOILERPLATE] - apply app's logger
    console.log("[MESSAGE_POST]: ", error);
    return new NextResponse("[INTERNAL ERROR] - [MESSAGE_POST]", {
      status: 500,
    });
  }
}
