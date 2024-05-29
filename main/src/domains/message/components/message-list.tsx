import { IMessage } from "../typing/interfaces";
import { Message } from "./message";

const MessageList = ({ channelId }: { channelId?: string }) => {
  const message: IMessage = {
    id: "1",
    content: "Hello world",
    createdAt: new Date(),
    updatedAt: new Date(),
    memberId: "1",
    type: "text",
    channelId: "1",
  };

  // Uncomment to see Integration with the useInfiniteQuery hook
  // const {
  //   data,
  //   error,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetching,
  //   isFetchingNextPage,
  //   status,
  // } = useInfiniteQuery({
  //   queryKey: ["channel-messages", { channelId }],
  //   queryFn: ({ pageParam }) =>
  //     loaderPaginatedMessages({
  //       channelId,
  //       pageParam,
  //       take: 10,
  //     }),
  //   initialPageParam: 0,
  //   getNextPageParam: (lastPage) => lastPage.lastCursor,
  //   select: (data) => ({
  //     pages: [...data.pages].reverse(),
  //     pageParams: [...data.pageParams].reverse(),
  //   }),
  // });

  console.log({ channelId });
  return (
    <div className="message-list mt-8">
      {/* Uncomment to see Integration with the useInfiniteQuery hook */}
      {/* {hasNextPage && (
        <Button
          className="mb-8"
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          load more
        </Button>
      )} */}

      <ul className="grid gap-y-4">
        {/* Uncomment to see Integration with the useInfiniteQuery hook */}
        {/* {data?.pages?.map((page: { messages: IMessage[] }) => {
          console.log({ page });
          return page.messages.map((message: IMessage) => {
            return <Message key={message.id} message={message} />;
          });
        })} */}
        <Message key={message.id} message={message} />
        <Message key={message.id} message={message} />
        <Message key={message.id} message={message} />
        <Message key={message.id} message={message} />
        <Message key={message.id} message={message} />
        <Message key={message.id} message={message} />
        <Message key={message.id} message={message} />
        <Message key={message.id} message={message} />
        <Message key={message.id} message={message} />
        <Message key={message.id} message={message} />
        <Message key={message.id} message={message} />
        <Message key={message.id} message={message} />
      </ul>
    </div>
  );
};

export { MessageList };
