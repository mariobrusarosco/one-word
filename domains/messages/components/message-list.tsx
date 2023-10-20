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
    queryFn: ({ pageParam }) => fetchMessages({ pageParam, channelId }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.lastCursor,
    select: (data) => ({
      pages: [...data.pages].reverse(),
      pageParams: [...data.pageParams].reverse(),
    }),
  });

  return (
    <>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>load more</button>
      )}

      {data?.pages?.map((group: { messages: Message[] }) => {
        console.log({ group });
        return group?.messages?.reverse().map((message: Message) => (
          <>
            <MemberMessage key={message.id} message={message} />
          </>
        ));
      })}
    </>
  );
};
