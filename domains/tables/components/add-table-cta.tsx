"use client";

import { Plus } from "lucide-react";
import { Button } from "@/domains/shared/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/domains/shared/components/ui/tooltip";
import { GlobalTooltips } from "@/domains/shared/typing/ui";
import { useGlobalModal } from "@/domains/shared/providers/store";
import { CreateTableModal } from "./create-table-modal";

export const AddTableCTA = () => {
  const { openModal } = useGlobalModal();

  return (
    <>
      <CreateTableModal />
      <TooltipProvider delayDuration={GlobalTooltips.DURATION}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="secondary"
              size="md"
              roundness="full"
              onClick={() => openModal("create-table-modal")}
              className="text-2xl"
              loading={false}
            >
              <Plus />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            className="bg-primary-base text-neutral-white"
            side="right"
          >
            Create table
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};
