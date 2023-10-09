import { db } from "@/server-side/db/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextApiResponse) {
  try {
    // TODO [PROJECT SPECIFIC FEATURE] : consider a middleware for this auth process
    const profile = getAuth(req);

    if (!profile.userId) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[INVITE_POST]: ", "NOT AUTHORIZED");

      return new NextResponse("[UNAUTHORIZED] - [INVITE_POST]", {
        status: 401,
      });
    }
    // TODO [PROJECT SPECIFIC FEATURE]: consider a middleware for this auth process
    const { inviteCode } = await req.json();

    const updatedTable = await db.table.update({
      where: { inviteCode: inviteCode },
      data: {},
    });

    return NextResponse.json(updatedTable);
  } catch (error) {
    // TODO [BOILERPLATE] - apply app's logger
    console.log("[INVITE_POST]: ", error);
  }
}
