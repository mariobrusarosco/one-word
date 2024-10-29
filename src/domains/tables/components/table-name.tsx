import { ITable } from "@/domains/tables/typing/interfaces";
import { Skeleton } from "@/domains/ui-system/components/ui/skeleton";

export const TableName = ({ table }: { table: ITable }) => {
  return (
    <div
      data-ui="table-name"
      className="table-name shadow-main-bottom px-4 py-4 flex justify-between cursor-pointer hover:bg-rose-800 group transition-colors"
    >
      <p className="text text-rose-800 dark:text-neutral-100 group-hover:text-neutral-100 uppercase">
        {table.name}
      </p>
    </div>
  );
};

export const TableNameLoading = () => {
  return (
    <div
      data-ui="table-name-skeleton"
      className="shadow-main-bottom px-4 py-4 flex justify-between"
    >
      <Skeleton className="w-full h-full rounded" />
    </div>
  );
};
