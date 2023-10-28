import { TableInputData } from "@/domains/tables/typing/enums-and-interfaces";
import { db } from "@/server-side/db/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { v4 as uuidV4 } from "uuid";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { TableRole } from "@prisma/client";

export async function PATCH(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      tableId: string;
    };
  }
) {
  try {
    // TODO [PROJECT SPECIFIC FEATURE] : consider a middleware for this auth process
    const authenticatedMember = getAuth(req);

    if (!authenticatedMember.userId) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[TABLES/INVITE_PATCH]: ", "UNAUTHORIZED");

      return new NextResponse("[UNAUTHORIZED] - [TABLES/INVITE_PATCH]", {
        status: 401,
      });
    }
    // TODO [PROJECT SPECIFIC FEATURE] : consider a middleware for this auth process
    const table = await db.table.update({
      where: {
        id: params.tableId,
      },
      data: {
        inviteCode: uuidV4(),
      },
    });

    return NextResponse.json(table);
  } catch (error) {
    // TODO [BOILERPLATE] - apply app's logger
    console.log("[TABLES/INVITE_PATCH]: ", error);
    return new NextResponse("[INTERNAL ERROR] - [TABLES/INVITE_PATCH]", {
      status: 500,
    });
  }
}
