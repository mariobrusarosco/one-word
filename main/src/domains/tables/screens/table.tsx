import { useQuery } from "@tanstack/react-query";
import { Outlet, useParams } from "react-router-dom";
import { tableLoader } from "../api/loader";
import { ITable } from "../typing/interfaces";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { InviteMember } from "../components/modals/invite-member";
import { TableSocketManager } from "../provider";
import { TableSidebar } from "../components/table-sidebar";

const TableScreen = () => {
  const { tableId } = useParams<{ tableId: string }>();
  const { data, error, isLoading } = useQuery<ITable>({
    queryKey: ["tables", { tableId }],
    queryFn: tableLoader,
    enabled: true,
  });

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>loading tables...</div>;
  }

  if (!data) return null;

  return (
    <div
      data-ui="table-screen"
      className="grid desktop:grid-cols-[224px,1fr] desktop:h-full"
    >
      <TableSidebar table={data} />

      <div className="table w-full">
        <div className="heading flex justify-between items-center font-sans ">
          <p className="text-pink-500 dark:text-teal-800 text-5xl">Table</p>
          <p className="table-name font-semibold uppercase text-2xl text-teal-800 dark:text-white-100 ">
            {data.name}
          </p>
        </div>
        <Separator className="bg-teal-800 mt-3" />
        <InviteMember tableId={tableId as string} />
        <Outlet />
      </div>
    </div>
  );
};

const TableScreenWithProvider = () => {
  return (
    <TableSocketManager>
      <TableScreen />
    </TableSocketManager>
  );
};

export default TableScreenWithProvider;
