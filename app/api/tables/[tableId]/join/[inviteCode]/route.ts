import { TableInputData } from "@/domains/tables/typing/enums-and-interfaces";
import { db } from "@/server-side/db/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { v4 as uuidV4 } from "uuid";
import { NextApiResponse } from "next";
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

    console.log("params.inviteCode", params);
    // TODO [PROJECT SPECIFIC FEATURE] : consider a middleware for this auth process
    const table = await db.table.update({
      where: {
        inviteCode: params.inviteCode,
      },
      data: {
        profiles: {
          create: {
            memberId: authenticatedMember.userId,
            role: TableRole.GUEST,
          },
        },
      },
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
