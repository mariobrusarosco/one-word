import { TableInputData } from "@/domains/tables/typing/enums-and-interfaces";
import { db } from "@/server-side/db/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { v4 as uuidV4 } from "uuid";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { TableRole } from "@prisma/client";

export type UpdateProfileRole = {
  role: TableRole;
  profileId: string;
};

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
    const authenticatedMember = getAuth(req);

    if (!authenticatedMember.userId) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[TABLES_PATCH]: ", "UNAUTHORIZED");

      return new NextResponse("[UNAUTHORIZED] - [TABLES_PATCH]", {
        status: 401,
      });
    }

    const payload = (await req.json()) as UpdateProfileRole;

    const tableProfile = await db.tableProfile.findFirst({
      where: {
        memberId: payload.profileId,
      },
    });
    if (!tableProfile) return false;

    const updateProfile = await db.tableProfile.update({
      where: {
        id: tableProfile.id,
      },
      data: {
        role: payload.role,
      },
    });

    return NextResponse.json(updateProfile);
  } catch (error) {
    // TODO [BOILERPLATE] - apply app's logger
    console.log("[TABLES_PATCH]: ", error);
    return new NextResponse("[INTERNAL ERROR] - [TABLES_PATCH]", {
      status: 500,
    });
  }
}
