import { Button } from "@/domains/ui-system/components/ui/button";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { useState } from "react";

const ChatInput = ({ channelId }: { channelId: string }) => {
  const [inputMessage, setInputMessage] = useState("");
  // Uncomment to use the useMutation hook
  // const queryClient = useQueryClient();
  // const mutation = useMutation({
  //   mutationFn: () => createMessage({ content: inputMessage, channelId }),
  //   onSuccess: () => {
  //     setInputMessage("");
  //     queryClient.invalidateQueries({
  //       queryKey: ["channel-messages", { channelId }],
  //     });
  //   },
  // });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //   const result = await mutation.mutate();
    console.log({ e, channelId, inputMessage });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="chat-input bg-pink-500 max-h-[72px] rounded-md p-4 flex items-center flex-1 gap-3 text-white-100">
        <Button type="submit" variant="secondary" roundness="full" size="small">
          <Icon name="plus" size="small" className="stroke-white-100 " />
        </Button>
        <input
          className="bg-pink-900/25 p-2 w-full text-white-100 font-light focus-visible:outline-none placeholder-white-100 text-sm"
          id="message"
          type="text"
          value={inputMessage}
          placeholder="Type something..."
          onChange={(e) => setInputMessage(e.target.value)}
        />
      </div>
    </form>
  );
};

export { ChatInput };
