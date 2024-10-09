import { useInfiniteQuery } from "@tanstack/react-query";
import { loaderPaginatedMessages } from "../api/loaders";

export const useInfiniteChannelMessages = ({
  channelId,
}: {
  channelId: string | undefined;
}) => {
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

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  };
};
