import { MemberMessage } from "@/domains/messages/components/member-message";
import { Button } from "@/domains/shared/components/ui/button";
import { ScrollArea } from "@/domains/shared/components/ui/scroll-area";
import { Separator } from "@/domains/shared/components/ui/separator";

const ChannelScreen = () => {
  return (
    <section className="h-full flex flex-col">
      <div className="flex justify-between mt-16">
        <h2 className="text-5xl text-primary-base">Channel</h2>
        <p className="text-4xl text-secondary-base">Nintendo</p>
      </div>
      <Separator className="bg-primary-base mt-4" />

      <ScrollArea data-test="wrapper">
        <div className="chat-area py-8">
          <div className="mb-2 text-secondary-base">
            <p className="text-5xl">
              Welcome to{" "}
              <span className="text-3xl font-semibold">#Nintendo</span>
            </p>
          </div>
          <p className="text-xl text-primary-base mb-8">
            This is the beginning of a conversation
          </p>

          <div className="flex flex-col gap-3 rounded-sm">
            <MemberMessage />
            <MemberMessage />
            <MemberMessage />
            <MemberMessage />
            <MemberMessage />
            <MemberMessage />
            <MemberMessage />
            <MemberMessage />
            <MemberMessage />
            <MemberMessage />
            <MemberMessage />
            <MemberMessage />
            <MemberMessage />
            <MemberMessage />
          </div>
        </div>
      </ScrollArea>

      <div className="mt-10 mb-6 rounded-sm p-4 flex items-center gap-3 bg-primary-base">
        <Button size="md" variant="secondary" roundness="full">
          +
        </Button>
        <div className="text-neutral-white">
          Lorem Ipsum sadsa asd sa dsa das das dasdas das das dsa dsa dsadsa
        </div>
      </div>
    </section>
  );
};

export default ChannelScreen;
