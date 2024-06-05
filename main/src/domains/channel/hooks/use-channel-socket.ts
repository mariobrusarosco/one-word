import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const useChannelSocket = (channelId?: string) => {
  const queryClient = useQueryClient();
  const { emit } = useWebSocket();
  const chatSlug = `chat-${channelId}	`;

  const updateChatMessages = () => {
    console.log("Updating chat messages");

    queryClient.invalidateQueries({
      queryKey: ["channel-messages", { channelId }],
    });
  };

  const handleNewMessage = (message: string) => {
    console.log("Sending new message", message);

    queryClient.invalidateQueries({
      queryKey: ["channel-messages", { channelId }],
    });
  };

  useEffect(() => {
    console.log("[SOCKET] 2.0 joining channel", channelId);
    emit(SocketEvents.JOIN_CHAT, chatSlug);

    return () => {
      console.log("[SOCKET] 2.0 leaving channel", chatSlug);
      emit(SocketEvents.LEAVE_CHAT, chatSlug);
    };
  }, [channelId]);

  return {};
};

export { useChannelSocket };
