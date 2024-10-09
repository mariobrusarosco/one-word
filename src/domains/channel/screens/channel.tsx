import { useParams } from "react-router-dom";
import { MessageList } from "@/domains/message/components/message-list";
import { ChatInput } from "@/domains/message/components/chat-input";
import { useQuery } from "@tanstack/react-query";
import { IChannel } from "../typing/interfaces";
import { channelLoader } from "../api/loaders";
import { useChannelSocket } from "../hooks/use-channel-socket";
import { ScreenHeading } from "@/domains/shared/components/screen-heading";

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

  useChannelSocket(channelId);

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
    <div
      data-ui="channel-screen"
      className="h-full flex flex-col flex-1 gap-y-6 px-12 py-6 overflow-auto scrollable"
    >
      <ScreenHeading title="Channel" subtitle={channel.name} />

      <MessageList channelName={channel.name} />

      <ChatInput />
    </div>
  );
};

export default ChannelScreen;
