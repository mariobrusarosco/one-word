import { ChannelInputData } from "@/domains/channels/typing/enums-and-interfaces";
import { db } from "@/server-side/db/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { channelId: string } }
) {
  try {
    // TODO [PROJECT SPECIFIC FEATURE] : consider a middleware for this auth process
    const profile = getAuth(req);
    if (!profile.userId) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[CHANNEL_DELETE]: ", "UNAUTHORIZED");

      return new NextResponse("[UNAUTHORIZED] - [CHANNEL_DELETE]", {
        status: 401,
      });
    }

    const body: ChannelInputData = await req.json();
    const updatedChannel = await db.channel.update({
      where: { id: params.channelId },
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(updatedChannel);
  } catch (error) {
    // TODO [BOILERPLATE] - apply app's logger
    console.log("[CHANNEL_DELETE]: ", error);
    return new NextResponse("[INTERNAL ERROR] - [CHANNEL_DELETE]", {
      status: 500,
    });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { channelId: string } }
) {
  try {
    // TODO [PROJECT SPECIFIC FEATURE] : consider a middleware for this auth process
    const profile = getAuth(req);
    if (!profile.userId) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[CHANNEL_DELETE]: ", "UNAUTHORIZED");

      return new NextResponse("[UNAUTHORIZED] - [CHANNEL_DELETE]", {
        status: 401,
      });
    }

    await db.channel.delete({
      where: { id: params.channelId },
    });

    return NextResponse.json({ status: "success" });
  } catch (error) {
    // TODO [BOILERPLATE] - apply app's logger
    console.log("[CHANNEL_DELETE]: ", error);
    return new NextResponse("[INTERNAL ERROR] - [CHANNEL_DELETE]", {
      status: 500,
    });
  }
}
