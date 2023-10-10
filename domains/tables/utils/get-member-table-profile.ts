import { TableProfile } from "@prisma/client";
import { TableWithProfiles } from "../typing/enums-and-interfaces";

export const getMemberTableProfile = (
  table: TableWithProfiles,
  userId: string
) => {
  if (userId === null) return null;

  return table.profiles.find(
    (profile: TableProfile) => profile.memberId === userId
  );
};
