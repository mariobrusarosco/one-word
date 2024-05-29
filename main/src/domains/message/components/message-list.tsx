import { useInfiniteQuery } from "@tanstack/react-query";
import { IMessage } from "../typing/interfaces";
import { Message } from "./message";
import { loaderPaginatedMessages } from "../api/loaders";
import { Button } from "@/domains/ui-system/components/ui/button";

const MessageList = ({ channelId }: { channelId?: string }) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
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

  console.log("[MESSAGES INTEGRATION] data", { data });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isFetching) {
    return (
      <div className="message-lists-skeleton mt-8">...loading messages...</div>
    );
  }

  console.log("[MESSAGES INTEGRATION]", { channelId });
  return (
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
  );
};

export { MessageList };
