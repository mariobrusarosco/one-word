import { loaderTables } from "@/domains/tables/api/loader";
import { Table } from "@/domains/tables/typing/interfaces";
import { useQuery } from "@tanstack/react-query";
import { Outlet, useParams } from "react-router-dom";

const ChannelsScreen = () => {
  const { tableId } = useParams<{
    tableId: string;
  }>();

  const { data } = useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: loaderTables,
    enabled: false,
  });

  const activeTable = data?.find((table) => table.id === tableId);
  console.log("ChannelsScreen", { tableId, activeTable });

  return (
    <div>
      <h1>Channels from table {activeTable?.name} </h1>

      <Outlet />
    </div>
  );
};

export { ChannelsScreen };
