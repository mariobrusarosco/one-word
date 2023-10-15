"use client";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/domains/shared/components/ui/dialog";
import { Separator } from "@/domains/shared/components/ui/separator";
import { TableWithProfiles } from "../typing/enums-and-interfaces";
import { TableMembers } from "./table-members";
import { AppModalGuardBase } from "@/domains/shared/components/modals/components/app-modal-base";

interface Props {
  table: TableWithProfiles;
}
export const ManageMemberModal = ({ table }: Props) => {
  return (
    <AppModalGuardBase>
      <DialogHeader className="">
        <DialogTitle className="text-2xl text-center font-thin text-primary-base">
          Manage Members
        </DialogTitle>
        <DialogDescription className="text-center text-secondary-base my-1">
          2 members
        </DialogDescription>
        <Separator className=" bg-primary-base" />
      </DialogHeader>

      <TableMembers table={table} showMemberEmail showMemberSettings />
    </AppModalGuardBase>
  );
};
