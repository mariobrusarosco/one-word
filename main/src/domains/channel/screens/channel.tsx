import { useParams } from "react-router-dom";
import { MessageList } from "@/domains/message/components/message-list";
import { ChatInput } from "@/domains/message/components/chat-input";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { useIsFetching } from "@tanstack/react-query";
// import { useTables } from "@/domains/tables/hooks/use-tables";

const ChannelScreen = () => {
  // useTables();

  const { channelId } = useParams<{
    channelId: string;
    tableId: string;
  }>();

  // const table = queryClient
  //   .getQueryData(["tables"])
  //   ?.find((table) => table.id === tableId);

  // const channelName = table?.channels.find(
  //   (channel) => channel.id === channelId
  // )?.name;

  const fetchingChannelMessages = useIsFetching({
    queryKey: ["channel-messages", { channelId }],
  });

  return (
    <div className="channel h-full flex flex-col">
      <div className="heading">
        <div className="flex justify-between items-center font-sans ">
          <p className="text-pink-500 dark:text-teal-800 text-3xl">Channel</p>
          {fetchingChannelMessages ? <p>Loading...</p> : null}
          <p className="table-name font-sans font-thin text-3xl text-teal-800 dark:text-white-100 ">
            General
          </p>
        </div>

        <Separator className="bg-pink-500 my-4" />
      </div>

      <MessageList />

      {channelId ? <ChatInput /> : null}
    </div>
  );
};

export { ChannelScreen };
