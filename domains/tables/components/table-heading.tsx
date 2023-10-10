"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/domains/shared/components/ui/dropdown-menu";

import {
  ChevronDown,
  PlusCircle,
  Settings,
  Trash,
  UserPlus,
  Users2,
} from "lucide-react";
import { cn } from "@/domains/shared/utils/ui";
import { useGlobalModal } from "@/domains/shared/providers/store";
import { CreateInviteModal } from "./create-invite-modal";
import { EditTableModal } from "./edit-table-modal";
import { getPermissionByRole } from "../utils/get-permission-by-role";
import { TableWithProfiles } from "../typing/enums-and-interfaces";
import { getMemberTableProfile } from "../utils/get-member-table-profile";
import { useUser } from "@clerk/nextjs";
import { TableProfile } from "@prisma/client";

interface Props {
  table: TableWithProfiles;
}

export const TableHeading = ({ table }: Props) => {
  const rowStyles =
    "rounded-sm flex justify-between align-center text-sm cursor-pointer px-2 py-2 gap-7 hover:bg-neutral-white hover:text-secondary-base";
  const { openModal, activeModalId } = useGlobalModal();
  const { user } = useUser();
  const profile = getMemberTableProfile(table, user?.id ?? "") as TableProfile;
  const {
    canInviteMember,
    canEditTable,
    canManageMembers,
    canCreateChannel,
    canDeleteTable,
  } = getPermissionByRole(profile.role);

  return (
    <>
      {activeModalId === "create-invite-modal" && (
        <CreateInviteModal table={table} />
      )}
      {activeModalId === "edit-table-modal" && <EditTableModal table={table} />}

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="flex justify-between items-center p-3 font-semibold shadow-bottom z-[1] text-secondary-base cursor-pointer ">
          <div className="text-left">
            <span className="text-xs">table</span>
            <h2 className="text-md">{table?.name}</h2>
          </div>
          <ChevronDown className="w-[24px]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-secondary-base text-neutral-white p-3 max-w-[240px]">
          <ul className="grid grid-cols-1 gap-2">
            {canInviteMember && (
              <li
                className={rowStyles}
                onClick={() => openModal("create-invite-modal")}
              >
                <p>Invite Friends</p>
                <UserPlus className="w-[20px]" />
              </li>
            )}
            {canEditTable && (
              <li
                className={cn(rowStyles)}
                onClick={() => openModal("edit-table-modal")}
              >
                <p>Table settings</p>
                <Settings className="w-[20px]" />
              </li>
            )}
            {canManageMembers && (
              <li className={cn(rowStyles)}>
                <p>Manage members</p>
                <Users2 className="w-[20px]" />
              </li>
            )}
            {canCreateChannel && (
              <li className={cn(rowStyles)}>
                <p>Create channel</p>
                <PlusCircle className="w-[20px]" />
              </li>
            )}

            {canDeleteTable && (
              <li
                className={cn(
                  rowStyles,
                  "bg-danger text-neutral-white hover:text-danger hover:bg-neutral-white"
                )}
              >
                <p>Delete table</p>
                <Trash className="w-[20px]" />
              </li>
            )}
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
