import { db } from "@/server-side/db/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { profile } from "console";
import { cache } from "react";

const fetchTables = cache(async () => {
  // TODO [PROJECT SPECIFIC FEATURE] : consider a middleware for this auth process
  const authenticatedMember = await currentUser();
  if (authenticatedMember === null) return null;

  return await db.table.findMany({
    where: { participants: { some: { userId: authenticatedMember.id } } },
  });
});

const addParticipant = async (inviteCode: string) => {
  // TODO [PROJECT SPECIFIC FEATURE] : consider a middleware for this auth process
  const authenticatedMember = await currentUser();
  if (authenticatedMember === null) return null;

  const temp = db.table.update({});
};

export const TableQueries = {
  fetchTables,
  addParticipant,
};
