import { db } from "@/server-side/db/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { cache } from "react";

const fetchTables = cache(async () => {
  const authenticatedMember = await currentUser();

  if (authenticatedMember === null) return null;

  return await db.table.findMany({
    where: { memberId: authenticatedMember.id },
  });
});

export const TableQueries = {
  fetchTables,
};
