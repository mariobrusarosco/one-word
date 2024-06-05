import { useParams } from "react-router-dom";
import { MessageList } from "@/domains/message/components/message-list";
import { ChatInput } from "@/domains/message/components/chat-input";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { useIsFetching, useQuery } from "@tanstack/react-query";
import { IChannel } from "../typing/interfaces";
import { channelLoader } from "../api/loaders";
import { useChannelSocket } from "../hooks/use-channel-socket";

const ChannelScreen = () => {
  const { channelId } = useParams<{
    channelId: string;
    tableId: string;
  }>();
  const {
    data: channel,
    error,
    isLoading,
  } = useQuery<IChannel>({
    queryKey: ["channels", { channelId }],
    queryFn: channelLoader,
    enabled: true,
  });
  useChannelSocket();

  const fetchingChannelMessages = useIsFetching({
    queryKey: ["channel-messages", { channelId }],
  });

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>loading channel...</div>;
  }

  if (!channel) {
    return (
      <div>
        <p>No Data for this channel</p>
      </div>
    );
  }

  return (
    <div className="channel h-full flex flex-col p-14">
      <div className="heading font-extralight">
        <div className="flex justify-between items-center font-sans ">
          <p className="text-pink-500 dark:text-teal-800 text-3xl desktop:text-5xl">
            Channel
          </p>
          {/* {fetchingChannelMessages ? <p>Loading...</p> : null}
          <p className="table-name font-sans text-3xl text-teal-800 dark:text-white-100 desktop:text-5xl">
            {channel?.name}
          </p> */}
        </div>

        <Separator className="bg-pink-500 my-4" />
      </div>

      {/* <MessageList channelName={channel.name} /> */}

      {/* <ChatInput /> */}
    </div>
  );
};

export default ChannelScreen;
