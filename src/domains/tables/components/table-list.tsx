import { Button } from "@/domains/ui-system/components/ui/button";
import { getInitials } from "@/domains/utils-and-helpers/string-manipulation";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { tablesLoader } from "../api/loader";
import { Table } from "../typing/interfaces";

export const TableList = () => {
  const { data: tables, isLoading } = useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: tablesLoader,
    enabled: true,
  });

  if (isLoading) return <TableListLoading />;

  return (
    <ul className="flex items-center gap-x-4">
      {tables?.map((table) => (
        <li key={table?.name}>
          <Button roundness="full" size="small" asChild>
            <Link to={`/tables/${table?.id}`}>{getInitials(table?.name)}</Link>
          </Button>
        </li>
      ))}
    </ul>
  );
};

const TableListLoading = () => {
  return (
    <ul className="flex items-center gap-x-4">
      {Array.from({ length: 6 }).map(() => {
        return <Button variant="skeleton" size="small" roundness="full" />;
      })}
    </ul>
  );
};
