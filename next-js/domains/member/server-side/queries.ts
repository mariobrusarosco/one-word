import { SharedRoutes } from "@/domains/shared/typing/routing";
import { db } from "@/server-side/db/prisma";
import { User, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { cache } from "react";

const createMember = async () => {
  const authenticatedMember = await currentUser();

  // TODO [logging] add a logging layer here
  console.log("...creating a member.....");
  try {
    if (authenticatedMember === null) {
      throw Error(
        "[MEMBER] - [createMember] - No auth data to create a member"
      );
    }

    return await db.member.create({
      data: {
        userId: authenticatedMember.id,
        email: authenticatedMember.emailAddresses[0].emailAddress,
        firstName: authenticatedMember.firstName ?? "",
        lastName: authenticatedMember.lastName ?? "",
        // profileImageUrl: authenticatedMember.imageUrl,
      },
    });
  } catch (error) {
    // TODO [logging] add a logging layer here
    console.log("[ERROR] - [MEMBER] - [createMember]", error);
    return redirect(SharedRoutes.NOT_FOUND);
  }
};

const fetchMember = cache(async () => {
  const authenticatedMember = await currentUser();

  if (authenticatedMember === null) return null;

  return await db.member.findUnique({
    where: { userId: authenticatedMember.id },
  });
});

export const MemberQueries = {
  createMember,
  fetchMember,
};
