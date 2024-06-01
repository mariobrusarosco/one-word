import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { IMessage } from "../typing/interfaces";
import { Message } from "./message";
import { loaderPaginatedMessages } from "../api/loaders";
import { Button } from "@/domains/ui-system/components/ui/button";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";

const MessageList = () => {
  const { channelId } = useParams<{
    channelId: string;
  }>();
  const queryClient = useQueryClient();
  const ref = useRef<HTMLDivElement>(null);
  const scrollListToBottom = () =>
    ref?.current?.scrollTo({
      top: ref.current.scrollHeight,
    });

  const { socket } = useWebSocket();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["channel-messages", { channelId }],
    queryFn: ({ pageParam }) =>
      loaderPaginatedMessages({
        channelId,
        pageParam,
        take: 10,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.lastCursor,
    select: (data) => ({
      pages: [...data.pages].reverse(),
      pageParams: [...data.pageParams].reverse(),
    }),
    enabled: !!channelId,
  });

  useEffect(() => {
    scrollListToBottom();
  }, [isFetching]);

  useEffect(() => {
    socket?.on(SocketEvents.UPDATE_CHAT_MESSAGES, () => {
      queryClient.invalidateQueries({
        queryKey: ["channel-messages", { channelId }],
      });
    });
  }, [channelId, queryClient, socket]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div ref={ref} className="chat-messages flex-1 mb-5 overflow-auto">
      <p className="text-3xl text-teal-800">
        Welcome to <span className="font-semibold text-3xl">#General</span>
      </p>
      <p className="text-sm text-pink-500">
        This is the beginning of a conversation
      </p>
      <div className="message-list mt-8">
        {hasNextPage && (
          <Button
            className="mb-2 text-teal-800 uppercase font-semibold text-xs border-teal-800"
            variant="outline"
            size="small"
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            load more messages
          </Button>
        )}

        <ul className="grid gap-y-4 py-2 pl-1 pr-4">
          {data?.pages.map((page) =>
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
