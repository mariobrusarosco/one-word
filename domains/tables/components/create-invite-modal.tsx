"use client";

import { Button } from "@/domains/shared/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/domains/shared/components/ui/dialog";
import { Input } from "@/domains/shared/components/ui/input";
import api from "@/domains/shared/api/rest";
import { TableEndpoints } from "../endpoints";
import { Check, Copy, RefreshCcw } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Table } from "@prisma/client";
import { AppModalGuardBase } from "@/domains/shared/components/modals/components/app-modal-base";

interface Props {
  table: Table;
}

export const CreateInviteModal = ({ table }: Props) => {
  const inviteurl = `${window?.origin}/tables/${table.id}/invite/${table.inviteCode}`;
  const [isCopied, setIsCopied] = useState(false);
  // TODO [PROJECT SPECIFIC FEATURE] : replace this with React Query
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // const { ModalElement } = useGlobalModal();
  const onCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(inviteurl);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const handleOnClick = async () => {
    try {
      setIsLoading(true);
      // TODO [PROJECT SPECIFIC FEATURE] : replace this with React Query
      const result = await api.patch(
        TableEndpoints.INVITE.replace(":tableId", table.id)
      );
      console.log({ result });
      router.refresh();
    } catch (error) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[INVITATION_MODAL]: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppModalGuardBase>
      <DialogHeader className="">
        <DialogTitle className="text-2xl text-center font-thin text-primary-base">
          Invitation
        </DialogTitle>
        <DialogDescription className="text-center text-secondary-base mt-4">
          Share the Invite URl with a friend.
        </DialogDescription>
      </DialogHeader>

      <div className="flex item-center mt-2 gap-x-2">
        <Input
          disabled={isLoading}
          className="bg-secondary-base/20 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
          value={inviteurl}
        />
        <Button
          size="sm"
          roundness="pill"
          onClick={onCopy}
          disabled={isLoading}
        >
          {isCopied ? <Check className="w-4" /> : <Copy className="w-4" />}
        </Button>
      </div>

      <Button
        onClick={handleOnClick}
        loading={isLoading}
        variant="link"
        size="sm"
        className="text-x"
      >
        <div className="flex items-center gap-2">
          <span>Genereate a link</span>
          <RefreshCcw className="w-4" />
        </div>
      </Button>
    </AppModalGuardBase>
  );
};
