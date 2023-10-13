import { db } from "@/server-side/db/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { ChannelInputData } from "@/domains/channels/typing/enums-and-interfaces";

export async function POST(req: NextRequest) {
  try {
    const profile = getAuth(req);
    if (!profile.userId) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[CHANNEL_POST]: ", "UNAUTHORIZED");

      return new NextResponse("[UNAUTHORIZED] - [CHANNEL_POST]", {
        status: 401,
      });
    }

    const body: ChannelInputData & { tableId: string } = await req.json();
    const newChannel = await db.channel.create({
      data: {
        name: body.name,
        tableId: body.tableId,
      },
    });

    return NextResponse.json(newChannel);
  } catch (error) {
    // TODO [BOILERPLATE] - apply app's logger
    console.log("[CHANNEL_POST]: ", error);
    return new NextResponse("[INTERNAL ERROR] - [CHANNEL_POST]", {
      status: 500,
    });
  }
}
