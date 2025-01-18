import {
  TableName,
  TableNameLoading,
} from "@/domains/tables/components/table-name";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { tableLoader } from "../api/loader";
import { useTableLoadingState } from "../hooks/use-table-loading-state";
import { useTableSocket } from "../hooks/use-table-socket";
import { ITable } from "../typing/interfaces";
import { ParticpantsList, ParticpantsListLoading } from "./participants";
import { TableChannels, TableChannelsLoading } from "./table-channels";
import { TableGameLink, TableGameLinkLoading } from "./table-game-link";

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

  const { isLoading } = useTableLoadingState();

  if (isLoading)
    return (
      <Container>
        <TableNameLoading />
        <TableGameLinkLoading />
        <TableChannelsLoading />
        <Separator />
        <ParticpantsListLoading />
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
      <TableGameLink table={table} />
      <TableChannels channels={table.channels} />
      <Separator />
      <ParticpantsList tableParticipants={tableSocket.tableParticipants} />
    </Container>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="table-sidebar bg-neutral-100 dark:bg-violet-800 shadow-main-right z-[2] overflow-hidden">
      {children}
    </div>
  );
};
