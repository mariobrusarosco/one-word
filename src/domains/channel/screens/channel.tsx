import { useParams } from "react-router-dom";
import {
  MessageList,
  MessageListLoading,
} from "@/domains/message/components/message-list";
import {
  ChatInput,
  ChatInputLoading,
} from "@/domains/message/components/chat-input";
import { useQuery } from "@tanstack/react-query";
import { IChannel } from "../typing/interfaces";
import { channelLoader } from "../api/loaders";
import { useChannelSocket } from "../hooks/use-channel-socket";
import {
  ScreenHeading,
  ScreenHeadingLoading,
} from "@/domains/shared/components/screen-heading";
import { useTableLoadingState } from "@/domains/tables/hooks/use-table-loading-state";

const ChannelScreen = () => {
  const { channelId } = useParams<{
    channelId: string;
    tableId: string;
  }>();
  const { data: channel, error } = useQuery<IChannel>({
    queryKey: ["channels", { channelId }],
    queryFn: channelLoader,
    enabled: true,
  });
  const { isFetching } = useTableLoadingState();

  useChannelSocket(channelId);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isFetching)
    return (
      <div data-ui="channel-screen-loading" className="relative h-full">
        <ScreenHeadingLoading />
        <MessageListLoading length={6} />
        <ChatInputLoading />
      </div>
    );

  if (!channel) {
    return (
      <div>
        <p>No Data for this channel</p>
      </div>
    );
  }

  return (
    <div data-ui="channel-screen" className="relative h-full">
      <ScreenHeading title="Channel" subtitle={channel.name} />
      <MessageList channelName={channel.name} />
      <ChatInput />
    </div>
  );
};

export default ChannelScreen;
