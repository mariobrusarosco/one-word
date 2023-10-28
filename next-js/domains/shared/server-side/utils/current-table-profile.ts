import { auth } from "@clerk/nextjs";
import { db } from "../db/prisma/prisma";

export const currentTableProfile = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const member = await db.member.findUnique({
    where: { id: userId },
    include: { TableProfile: true },
  });

  return member?.TableProfile || null;
};
