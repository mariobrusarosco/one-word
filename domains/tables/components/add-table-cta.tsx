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

export const AddTableCTA = () => {
  return (
    <TooltipProvider delayDuration={GlobalTooltips.DURATION}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="secondary"
            size="md"
            roundness="full"
            onClick={() => alert("asdsa")}
            className="text-2xl"
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
  );
};
