import { ITable } from "@/domains/tables/typing/interfaces";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { Skeleton } from "@/domains/ui-system/components/ui/skeleton";
import { Link } from "react-router-dom";

export const TableGameLink = ({ table }: { table: ITable }) => {
  return (
    <Link
      to={`${table.id}/game`}
      data-ui="table-game-link"
      className="flex items-center gap-x-2 m-4 p-2 rounded-md bg-neutral-100 hover:bg-rose-800 dark:bg-violet-800 hover:dark:bg-rose-800 transition-colors cursor-pointer group"
    >
      <Icon
        name="device-gamepad"
        className="stroke-rose-800 group-hover:stroke-neutral-100 dark:stroke-neutral-100"
        size="extra-small"
      />
      <span className="text-rose-800 group-hover:text-neutral-100 dark:text-neutral-100 uppercase">
        game
      </span>
    </Link>
  );
};

export const TableGameLinkLoading = () => {
  return (
    <div
      data-ui="table-game-link-skeleton"
      className="shadow-main-bottom px-4 py-4 flex justify-between min-h-14"
    >
      <Skeleton className="w-full h-full rounded" />
    </div>
  );
};
