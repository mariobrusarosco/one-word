import { useQueryClient } from "@tanstack/react-query";
import { IMessage } from "../typing/interfaces";
import { Message } from "./message";
import { Button } from "@/domains/ui-system/components/ui/button";
import { useCallback, useEffect, useRef } from "react";
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

  const watchForNewMessages = useCallback(() => {
    on(SocketEvents.UPDATE_CHAT_MESSAGES, () => {
      queryClient.invalidateQueries({
        queryKey: ["channel-messages", { channelId }],
      });
    });
  }, [on]);

  const scrollListToBottom = () =>
    ref?.current?.scrollTo({
      top: ref.current.scrollHeight,
    });

  useEffect(() => {
    scrollListToBottom();
  }, [infiniteQuery.isFetching]);

  useEffect(() => {
    watchForNewMessages();
  }, [channelId, queryClient]);

  if (infiniteQuery.error) {
    return <div>Error: {infiniteQuery.error.message}</div>;
  }

  return (
    <div data-ui="message-list" ref={ref} className="overflow-auto">
      <div className="flex items-center gap-x-2 text-neutral-100">
        <p className="text-3xl font-normal text-violet-800 dark:text-neutral-100 font-josefin">
          Welcome to
        </p>
        <span className="text-sm p-2 bg-rose-800 rounded-sm">
          #{channelName}
        </span>
      </div>
      <p className="text-xl  font-extralight font-josefin text-violet-800 dark:text-neutral-100">
        This is the beginning of a conversation
      </p>
      <div className="message-list mt-8">
        {infiniteQuery.hasNextPage && (
          <Button
            className="mb-2 text-violet-800 uppercase font-semibold text-xs border-violet-800"
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
