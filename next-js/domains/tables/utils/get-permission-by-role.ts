import { TableRole } from "@prisma/client";
import { TableManagementPermissions } from "../typing/enums-and-interfaces";

export const getPermissionByRole = (role: TableRole) => {
  return {
    canInviteMember: TableManagementPermissions["invite"].includes(role),
    canEditTable: TableManagementPermissions["settings"].includes(role),
    canManageMembers:
      TableManagementPermissions["manage-members"].includes(role),
    canCreateChannel:
      TableManagementPermissions["create-channel"].includes(role),
    canDeleteTable: TableManagementPermissions["delete-table"].includes(role),
  };
};
