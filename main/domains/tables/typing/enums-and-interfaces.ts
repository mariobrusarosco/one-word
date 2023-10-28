import { z } from "zod";
import { tableFormSchema } from "./schemas";
import { Prisma, TableRole } from "@prisma/client";

export enum TableRoutes {
  HOME = "/tables",
  TABLE = "/tables/:tableId",
  CHANNEL = "/tables/:tableId/channel/:channelId",
}

export type TableInputData = z.infer<typeof tableFormSchema>;

type TablePermission =
  | "invite"
  | "settings"
  | "manage-members"
  | "create-channel"
  | "edit-channel"
  | "delete-table";

export const TableManagementPermissions: Record<TablePermission, TableRole[]> =
  {
    "create-channel": [TableRole.ADMIN, TableRole.MODERATOR],
    "delete-table": [TableRole.ADMIN],
    "edit-channel": [TableRole.ADMIN, TableRole.MODERATOR],
    "manage-members": [TableRole.ADMIN],
    settings: [TableRole.ADMIN],
    invite: [TableRole.ADMIN, TableRole.MODERATOR, TableRole.GUEST],
  };

export type TableWithProfiles = Prisma.TableGetPayload<{
  include: { profiles: { include: { member: true } } };
}>;

export type ProfileWithMembers = Prisma.TableProfileGetPayload<{
  include: { member: true };
}>;
