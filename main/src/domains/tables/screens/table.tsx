import { useQuery } from "@tanstack/react-query";
import { useOutletContext, useParams } from "react-router-dom";
import { tableLoader } from "../api/loader";
import { ITable } from "../typing/interfaces";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { InviteMember } from "../components/modals/invite-member";
import { useTableSocket } from "../hooks/use-table-socket";
import { ScreenHeading } from "@/domains/shared/components/screen-heading";

interface Props {
  table: ITable;
  tableSocket: ReturnType<typeof useTableSocket>;
}

const TableScreen = () => {
  const tableProps = useOutletContext() as Props;
  const { tableId } = useParams<{ tableId: string }>();
  const {
    data: table,
    error,
    isLoading,
  } = useQuery<ITable>({
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

  if (!table || !tableId) return null;

  return (
    <div data-ui="table-screen" className="p-12">
      <ScreenHeading title="Table" subtitle={table.name} />

      <Separator className="bg-violet-800 mt-3" />

      <InviteMember tableId={tableId} />
    </div>
  );
};

export default TableScreen;
