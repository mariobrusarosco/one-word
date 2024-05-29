import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { loaderChannels } from "../api/loaders";
import { loaderPaginatedMessages } from "@/domains/message/api/loaders";
import { MessageList } from "@/domains/message/components/message-list";
import { ChatInput } from "@/domains/message/components/chat-input";
import { Separator } from "@/domains/ui-system/components/ui/separator";

const ChannelScreen = () => {
  const queryClient = useQueryClient();
  const { channelId, tableId } = useParams<{
    channelId: string;
    tableId: string;
  }>();

  const table = queryClient
    .getQueryData(["tables"])
    ?.find((table) => table.id === tableId);

  const channelName = table?.channels.find(
    (channel) => channel.id === channelId
  )?.name;

  return (
    <div className="channel w-full h-full">
      <div className="heading flex justify-between items-center font-sans ">
        <p className="text-pink-500 dark:text-teal-800 text-5xl">Channel</p>
        <p className="table-name font-sans font-thin text-6xl text-teal-800 dark:text-white-100 ">
          {channelName}
        </p>
      </div>

      <Separator className="bg-pink-500 my-4" />

      <div className="chat h-full py-8">
        <p className="text-5xl text-teal-800">
          Welcome to <span className="font-semibold text-3xl">#General</span>
        </p>
        <p className="text-xl font-light text-pink-500">
          This is the beginning of a conversation
        </p>

        <MessageList channelId={channelId} />
        <div className="mt-10 mb-6 rounded-sm p-4 flex items-center gap-3 bg-primary-base">
          {channelId && <ChatInput channelId={channelId} />}
        </div>
      </div>
    </div>
  );
};

export { ChannelScreen };
