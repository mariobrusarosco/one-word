import { MemberMessage } from "@/domains/messages/components/member-message";
import { ScrollArea } from "@/domains/shared/components/ui/scroll-area";
import { Separator } from "@/domains/shared/components/ui/separator";
import { ChatInput } from "@/domains/channels/components/chat-input";
import { db } from "@/server-side/db/prisma";

interface Props {
  params: {
    channelId: string;
  };
}
const ChannelScreen = async ({ params }: Props) => {
  const channel = await db.channel.findFirst({
    where: { id: params.channelId },
    include: {
      messages: {
        orderBy: { createdAt: "asc" },
        include: { member: { select: { firstName: true } } },
      },
    },
  });

  return (
    <section className="h-full flex flex-col">
      <div className="flex items-baseline justify-between mt-16">
        <h2 className="text-5xl text-primary-base">Channel</h2>
        <p className="text-4xl text-secondary-base">{channel?.name}</p>
      </div>
      <Separator className="bg-primary-base mt-4" />

      <ScrollArea data-test="wrapper">
        <div className="chat-area py-8">
          <div className="mb-2 text-secondary-base">
            <p className="text-5xl">
              Welcome to{" "}
              <span className="text-3xl font-semibold">#{channel?.name}</span>
            </p>
          </div>
          <p className="text-xl text-primary-base mb-8">
            This is the beginning of a conversation
          </p>

          <div className="flex flex-col gap-3 rounded-sm">
            {channel?.messages?.map((message) => {
              return <MemberMessage key={message.id} message={message} />;
            })}
          </div>
        </div>
      </ScrollArea>

      <div className="mt-10 mb-6 rounded-sm p-4 flex items-center gap-3 bg-primary-base">
        {channel && <ChatInput channel={channel} />}
      </div>
    </section>
  );
};

export default ChannelScreen;
