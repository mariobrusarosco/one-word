"use client";
import { Button } from "@/domains/shared/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/domains/shared/components/ui/tooltip";
import { GlobalTooltips } from "@/domains/shared/typing/ui";
import { getInitials } from "@/domains/shared/utils/string-manipulation";

interface Props {
  label: string;
}

export const TableAvatar = ({ label }: Props) => {
  const tableInitials = getInitials(label);

  return (
    <TooltipProvider delayDuration={GlobalTooltips.DURATION}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="lg"
            roundness="full"
            onClick={() => alert("asdsa")}
            className="text-lg font-thin"
          >
            {tableInitials}
          </Button>
        </TooltipTrigger>
        <TooltipContent
          className="bg-primary-base text-neutral-white"
          side="right"
        >
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
