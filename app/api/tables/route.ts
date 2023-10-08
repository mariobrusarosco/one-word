import { TableInputData } from "@/domains/tables/typing/enums-and-interfaces";
import { db } from "@/server-side/db/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { v4 as uuidV4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextApiResponse) {
  try {
    const profile = getAuth(req);

    if (!profile.userId) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[TABLES_POST]: ", "NOT AUTHORIZED");

      return new NextResponse("[INTERNAL ERROR] - [SERVERS_POST]", {
        status: 401,
      });
    }

    const body: TableInputData = await req.json();
    const newTable = await db.table.create({
      data: {
        name: body.name,
        inviteCode: uuidV4(),
        memberAdminId: profile.userId,
        participants: {
          connect: {
            userId: profile.userId,
          },
        },
      },
    });

    return NextResponse.json(newTable);
  } catch (error) {
    // TODO [BOILERPLATE] - apply app's logger
    console.log("[TABLES_POST]: ", error);
    return new NextResponse("[INTERNAL ERROR] - [SERVERS_POST]", {
      status: 500,
    });
  }
}
