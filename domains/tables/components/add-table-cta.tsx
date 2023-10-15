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
import { CreateTableModal } from "./create-table-modal";
import { useModal } from "@/domains/shared/providers/hooks/modal";
import { AppModalGuard } from "@/domains/shared/components/modals/components/app-modal-guard";

export const AddTableCTA = () => {
  const { open } = useModal();

  return (
    <>
      <AppModalGuard modalUI="create-table">
        <CreateTableModal />
      </AppModalGuard>
      <TooltipProvider delayDuration={GlobalTooltips.DURATION}>
        <Tooltip>
          <TooltipTrigger asChild>
            <>
              <Button
                variant="secondary"
                size="lg"
                roundness="full"
                onClick={() => open({ ui: "create-table" })}
                className="text-2xl"
                loading={false}
              >
                <Plus />
              </Button>

              {/* <Button
                variant="secondary"
                size="lg"
                roundness="full"
                onClick={() => open("create-table-modal")}
                // onClick={() => actions.setID("on-dashboard")}
                className="text-2xl"
                loading={false}
              >
                <Plus />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                roundness="full"
                // onClick={() => openModal("create-table-modal")}
                onClick={() => actions.setNAME()}
                className="text-2xl"
                loading={false}
              >
                <Plus />
              </Button> */}
            </>
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
