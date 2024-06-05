import { useQueryClient } from "@tanstack/react-query";
import { IMessage } from "../typing/interfaces";
import { Message } from "./message";
import { Button } from "@/domains/ui-system/components/ui/button";
import { useEffect, useRef } from "react";
import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useInfiniteChannelMessages } from "../hooks/use-infinite-channel-messages";
import { IChannel } from "@/domains/channel/typing/interfaces";
import { useParams } from "react-router-dom";

const MessageList = ({ channelName }: { channelName: IChannel["name"] }) => {
  const { channelId = "" } = useParams<{
    channelId: string;
    tableId: string;
  }>();
  const { on } = useWebSocket();
  const queryClient = useQueryClient();
  const ref = useRef<HTMLDivElement>(null);

  const infiniteQuery = useInfiniteChannelMessages({
    channelId: channelId || undefined,
  });

  useEffect(() => {
    const scrollListToBottom = () =>
      ref?.current?.scrollTo({
        top: ref.current.scrollHeight,
      });

    scrollListToBottom();
  }, [infiniteQuery.isFetching]);

  useEffect(() => {
    on(SocketEvents.UPDATE_CHAT_MESSAGES, () => {
      queryClient.invalidateQueries({
        queryKey: ["channel-messages", { channelId }],
      });
    });
  }, [channelId, queryClient, socket]);

  if (infiniteQuery.error) {
    return <div>Error: {infiniteQuery.error.message}</div>;
  }

  return (
    <div ref={ref} className="chat-messages flex-1 mb-5 mt-20 overflow-auto">
      <p className="text-3xl font-extralight text-teal-800 desktop:text-5xl">
        Welcome to{" "}
        <span className="font-semibold text-3xl desktop:text-5xl">
          #{channelName}
        </span>
      </p>
      <p className="text-2xl font-extralight text-pink-500">
        This is the beginning of a conversation
      </p>
      <div className="message-list mt-8">
        {infiniteQuery.hasNextPage && (
          <Button
            className="mb-2 text-teal-800 uppercase font-semibold text-xs border-teal-800"
            variant="outline"
            size="small"
            disabled={infiniteQuery.isFetchingNextPage}
            onClick={() => infiniteQuery.fetchNextPage()}
          >
            load more messages
          </Button>
        )}

        <ul className="grid gap-y-4 py-2 pl-1 pr-4">
          {infiniteQuery.data?.pages.map((page) =>
            page?.messages.map((message: IMessage) => (
              <Message key={message.id} message={message} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export { MessageList };
