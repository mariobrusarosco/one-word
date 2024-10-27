import { Button } from "@/domains/ui-system/components/ui/button";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createMessage } from "../api/mutations";
import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useParams } from "react-router-dom";

const ChatInput = () => {
  const { channelId = "" } = useParams<{
    channelId: string;
    tableId: string;
  }>();
  const chatSlug = `chat-${channelId}	`;

  const { emit } = useWebSocket();
  const [inputMessage, setInputMessage] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => createMessage({ content: inputMessage, channelId }),
    onSuccess: () => {
      setInputMessage("");
      emit(SocketEvents.NEW_CHAT_MESSAGE, {
        message: inputMessage,
        channelId: chatSlug,
      });

      queryClient.invalidateQueries({
        queryKey: ["channel-messages", { channelId }],
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputMessage) return false;
    await mutation.mutate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="chat-input bg-rose-800 max-h-[72px] rounded-md p-4 flex items-center flex-1 gap-3 text-neutral-100">
        <Button
          type="submit"
          variant="secondary"
          roundness="full"
          size="small"
          disabled={mutation.isPending || inputMessage.length === 0}
        >
          <Icon name="plus" size="small" className="stroke-neutral-100 " />
        </Button>
        <input
          className="bg-transparent p-2 w-full text-neutral-100 font-light focus-visible:outline-none placeholder-neutral-100 text-sm"
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
