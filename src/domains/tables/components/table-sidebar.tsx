import { ITable } from "../typing/interfaces";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { ParticpantsList, ParticpantsListLoading } from "./participants";
import { TableChannels, TableChannelsLoading } from "./table-channels";
import { useParams } from "react-router-dom";
import { useTableSocket } from "../hooks/use-table-socket";
import {
  TableName,
  TableNameLoading,
} from "@/domains/tables/components/table-name";
import { tableLoader } from "../api/loader";
import { useTableLoadingState } from "../hooks/use-table-loading-state";
import { useQuery } from "@tanstack/react-query";

export const TableSidebar = () => {
  const { tableId } = useParams<{
    tableId: string;
  }>();
  const tableSocket = useTableSocket(tableId);
  const { data: table, error } = useQuery<ITable>({
    queryKey: ["table", { tableId }],
    queryFn: tableLoader,
    enabled: false,
  });

  console.log({ table });

  const { isLoading } = useTableLoadingState();

  if (isLoading)
    return (
      <Container>
        <TableNameLoading />
        <ParticpantsListLoading />
        <Separator />
        <TableChannelsLoading />
      </Container>
    );

  if (error) {
    return <Container>{error?.message}</Container>;
  }

  if (!tableId) return null;

  if (!table) {
    return (
      <Container>
        <p className="text-lg">no available data</p>
      </Container>
    );
  }

  return (
    <Container>
      <TableName table={table} />
      <ParticpantsList tableParticipants={tableSocket.tableParticipants} />
      <Separator />
      <TableChannels channels={table.channels} />
    </Container>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="table-sidebar bg-neutral-100 dark:bg-violet-800 shadow-main-right z-[2] grid grid-rows-[56px,1fr,1px,1fr] overflow-hidden">
      {children}
    </div>
  );
};
