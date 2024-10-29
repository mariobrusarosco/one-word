import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { tableLoader } from "../api/loader";
import { ITable } from "../typing/interfaces";
import { InviteMember } from "../components/modals/invite-member";
import {
  ScreenHeading,
  ScreenHeadingLoading,
} from "@/domains/shared/components/screen-heading";

const TableScreen = () => {
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

  if (!tableId) return null;

  if (error) {
    return <div>{error?.message}</div>;
  }

  if (isLoading) return <ScreenHeadingLoading />;

  return (
    <div data-ui="table-screen">
      <ScreenHeading title="Table" subtitle={table?.name}>
        <InviteMember />
      </ScreenHeading>
    </div>
  );
};

export default TableScreen;
