"use client";
import restApi from "@/domains/shared/api/rest";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MemberMessage } from "./member-message";
import { Message } from "@prisma/client";

const fetchMessages = async ({
  pageParam,
  channelId,
}: {
  pageParam: number;
  channelId: string;
}) => {
  const result = await restApi.get(
    `/channels/${channelId}/messages?cursor=${pageParam}`
  );

  return result.data;
};
export const MessageList = ({ channelId }: { channelId: string }) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    hasPreviousPage,
    fetchPreviousPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["messages"],
    queryFn: ({ pageParam }) => {
      return fetchMessages({ pageParam, channelId });
    },
    initialPageParam: 0,
    getPreviousPageParam: (firstPage, pages) => {
      return firstPage.lastCursor;
    },
    getNextPageParam: (lastPage, pages) => lastPage.lastCursor,
    select: (data) => ({
      pages: [...data.pages].reverse(),
      pageParams: [...data.pageParams].reverse(),
    }),
    refetchInterval: 1500,
  });

  return (
    <>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>load more</button>
      )}

      {data?.pages?.map((group: { messages: Message[] }) => {
        console.log({ group });
        return group?.messages?.map((message: Message) => (
          <>
            <MemberMessage key={message.id} message={message} />
          </>
        ));
      })}
    </>
  );
};
