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
import { useRouter } from "next/navigation";

interface Props {
  label: string;
  tableId: string;
}

export const TableAvatar = ({ label, tableId }: Props) => {
  const tableInitials = getInitials(label);
  const router = useRouter();

  const goToTablePage = () => router.push(`/tables/${tableId}`);

  return (
    <TooltipProvider delayDuration={GlobalTooltips.DURATION}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="lg"
            roundness="full"
            onClick={goToTablePage}
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
