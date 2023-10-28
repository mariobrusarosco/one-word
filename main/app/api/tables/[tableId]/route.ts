import { db } from "@/server-side/db/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { Table } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

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
    const profile = getAuth(req);

    if (!profile.userId) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[TABLES_PATCH]: ", "UNAUTHORIZED");

      return new NextResponse("[UNAUTHORIZED] - [TABLES_PATCH]", {
        status: 401,
      });
    }

    const body: Pick<Table, "id" | "name"> = await req.json();
    console.log(params?.tableId);
    const updatedTable = await db.table.update({
      where: { id: params?.tableId },
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(updatedTable);
  } catch (error) {
    // TODO [BOILERPLATE] - apply app's logger
    console.log("[TABLES_POST]: ", error);
    return new NextResponse("[INTERNAL ERROR] - [TABLES_PATCH]", {
      status: 500,
    });
  }
}
