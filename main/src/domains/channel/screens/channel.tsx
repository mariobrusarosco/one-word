import { useParams } from "react-router-dom";
import { MessageList } from "@/domains/message/components/message-list";
import { ChatInput } from "@/domains/message/components/chat-input";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { ScrollArea } from "@/domains/ui-system/components/ui/scroll-area";

const ChannelScreen = () => {
  // const queryClient = useQueryClient();
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

  return (
    <div className="channel h-full flex flex-col">
      <div className="heading">
        <div className="flex justify-between items-center font-sans ">
          <p className="text-pink-500 dark:text-teal-800 text-3xl">Channel</p>
          <p className="table-name font-sans font-thin text-3xl text-teal-800 dark:text-white-100 ">
            General
          </p>
        </div>

        <Separator className="bg-pink-500 my-4" />
      </div>

      <ScrollArea className="chat-messages flex-1 mb-5">
        <p className="text-3xl text-teal-800">
          Welcome to <span className="font-semibold text-3xl">#General</span>
        </p>
        <p className="text-sm text-pink-500">
          This is the beginning of a conversation
        </p>
        <MessageList channelId={channelId} />
      </ScrollArea>

      {channelId && <ChatInput channelId={channelId} />}
    </div>
  );
};

export { ChannelScreen };
