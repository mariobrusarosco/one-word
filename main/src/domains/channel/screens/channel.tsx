import { loaderTables } from "@/domains/tables/api/loader";
import { Table } from "@/domains/tables/typing/interfaces";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ChannelScreen = () => {
  const { channelId, tableId } = useParams<{
    channelId: string;
    tableId: string;
  }>();

  const { data } = useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: loaderTables,
    enabled: false,
  });

  const activeTable = data?.find((table) => table.id === tableId);
  const activeChannel = activeTable?.channels?.find(
    (channel) => channel.id === channelId
  );

  console.log("ChannelScreen", { channelId, tableId });

  return (
    <div>
      <h1>
        Channel: {activeChannel?.name} from table {activeTable?.name}{" "}
      </h1>
    </div>
  );
};

export { ChannelScreen };
