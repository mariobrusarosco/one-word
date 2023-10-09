import { db } from "@/server-side/db/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, res: NextApiResponse) {
  try {
    const profile = getAuth(req);

    if (!profile.userId) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[MEMBER_PATCH]: ", "UNAUTHORIZED");

      return new NextResponse("[UNAUTHORIZED] - [MEMBER_PATCH]", {
        status: 401,
      });
    }

    const params = await req.json();

    console.log({ params });

    return NextResponse.json({ temp: true });
  } catch (error) {
    // TODO [BOILERPLATE] - apply app's logger
    console.log("[MEMBER_PATCH]: ", error);
    return new NextResponse("[INTERNAL ERROR] - [MEMBER_PATCH]", {
      status: 500,
    });
  }
}
