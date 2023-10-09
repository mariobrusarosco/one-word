"use client";
import api from "@/domains/shared/api/rest";

import { Button } from "@/domains/shared/components/ui/button";
import { TableEndpoints } from "@/domains/tables/endpoints";
import { useState } from "react";

interface Props {
  inviteCode: string;
}

export const JoinTableButton = ({ inviteCode }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const addParticipantToTable = async () => {
    try {
      setIsLoading(true);
      // TODO [PROJECT SPECIFIC FEATURE] : replace this with React Query
      const result = await api.post(
        TableEndpoints.JOIN.replace(":inviteCode", inviteCode)
      );
      console.log({ result });
      // router.refresh();
    } catch (error) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[INVITATION_SCREEN]: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      className="flex-1 max-w-[133px] text-2xl"
      size="sm"
      loading={isLoading}
      onClick={addParticipantToTable}
    >
      join
    </Button>
  );
};
