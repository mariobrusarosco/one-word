"use client";
import api from "@/domains/shared/api/rest";
import { Button } from "@/domains/shared/components/ui/button";
import { TableEndpoints } from "@/domains/tables/endpoints";
import { TableRoutes } from "@/domains/tables/typing/enums-and-interfaces";
import { useAuth } from "@clerk/nextjs";
import { isEmpty } from "lodash-es";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  inviteCode: string;
}

export const JoinTableButton = ({ inviteCode }: Props) => {
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const addParticipantToTable = async () => {
    try {
      setIsLoading(true);
      // TODO [PROJECT SPECIFIC FEATURE] : replace this with React Query
      const { data } = await api.post(
        TableEndpoints.JOIN.replace(":inviteCode", inviteCode)
      );

      const currentTableProfile = data?.profiles?.find(
        (profile: any) => profile.memberId === userId
      );

      if (!isEmpty(currentTableProfile)) {
        setIsLoading(false);
        router.push(`/${TableRoutes.HOME}/${currentTableProfile.tableId}`);
        router.refresh();
      }
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
