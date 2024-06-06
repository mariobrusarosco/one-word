import { useQuery } from "@tanstack/react-query";
import { useOutletContext, useParams } from "react-router-dom";
import { tableLoader } from "../api/loader";
import { ITable } from "../typing/interfaces";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { InviteMember } from "../components/modals/invite-member";
import { useTableSocket } from "../hooks/use-table-socket";

interface Props {
  table: ITable;
  tableSocket: ReturnType<typeof useTableSocket>;
}

const TableScreen = () => {
  const tableProps = useOutletContext() as Props;
  const { tableId } = useParams<{ tableId: string }>();
  const { data, error, isLoading } = useQuery<ITable>({
    queryKey: ["table", { tableId }],
    queryFn: tableLoader,
    enabled: !!tableId,
  });

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>loading tables...</div>;
  }

  if (!data || !tableId) return null;

  return (
    <div data-ui="table-screen">
      <div className="heading flex justify-between items-center font-sans ">
        <p className="text-pink-500 dark:text-teal-800 text-5xl">Table</p>
        <p className="table-name font-semibold uppercase text-2xl text-teal-800 dark:text-white-100 ">
          {data.name}
        </p>
      </div>
      <Separator className="bg-teal-800 mt-3" />

      <InviteMember tableId={tableId} />

      {tableProps?.tableSocket ? (
        <div>{JSON.stringify(tableProps.tableSocket.tableParticipants)}</div>
      ) : null}
    </div>
  );
};

export default TableScreen;
