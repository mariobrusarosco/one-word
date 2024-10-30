import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { tableLoader } from "../api/loader";
import { ITable } from "../typing/interfaces";
import { InviteMember } from "../components/modals/invite-member";
import { ScreenHeading } from "@/domains/shared/components/screen-heading";
import { useTableLoadingState } from "../hooks/use-table-loading-state";

const TableScreen = () => {
  const { tableId } = useParams<{ tableId: string }>();
  const { data: table } = useQuery<ITable>({
    queryKey: ["table", { tableId }],
    queryFn: tableLoader,
    enabled: false,
  });
  const { isLoading } = useTableLoadingState();

  if (!tableId) return null;

  return (
    <div data-ui="table-screen">
      <ScreenHeading title="Table" subtitle={table?.name} loading={isLoading}>
        <InviteMember />
      </ScreenHeading>
    </div>
  );
};

export default TableScreen;
