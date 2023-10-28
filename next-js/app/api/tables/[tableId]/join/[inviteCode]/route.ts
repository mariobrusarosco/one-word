import { TableInputData } from "@/domains/tables/typing/enums-and-interfaces";
import { db } from "@/server-side/db/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { TableRole } from "@prisma/client";

export async function POST(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      inviteCode: string;
    };
  }
) {
  try {
    // TODO [PROJECT SPECIFIC FEATURE] : consider a middleware for this auth process
    const authenticatedMember = getAuth(req);

    if (!authenticatedMember.userId) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[TABLES/JOIN_POST]: ", "UNAUTHORIZED");

      return new NextResponse("[UNAUTHORIZED] - [TABLES/JOIN_POST]", {
        status: 401,
      });
    }

    // TODO [PROJECT SPECIFIC FEATURE] : consider a middleware for this auth process
    const table = await db.table.update({
      where: {
        inviteCode: params.inviteCode,
        profiles: { none: { memberId: authenticatedMember.userId } },
      },
      data: {
        profiles: {
          create: {
            memberId: authenticatedMember.userId,
            role: TableRole.GUEST,
          },
        },
      },
      include: { profiles: true },
    });

    return NextResponse.json(table);
  } catch (error) {
    // TODO [BOILERPLATE] - apply app's logger
    console.log("[TABLES/JOIN_POST]: ", error);
    return new NextResponse("[INTERNAL ERROR] - [TABLES/JOIN_POST]", {
      status: 500,
    });
  }
}
