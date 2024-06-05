import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useEffect } from "react";

const useChannelSocket = (channelId?: string) => {
  const { emit } = useWebSocket();
  const chatSlug = `chat-${channelId}	`;

  useEffect(() => {
    console.log("[SOCKET] 2.0 joining channel", channelId);
    emit(SocketEvents.JOIN_CHAT, chatSlug);

    return () => {
      console.log("[SOCKET] 2.0 leaving channel", chatSlug);
      emit(SocketEvents.LEAVE_CHAT, chatSlug);
    };
  }, [channelId]);
};

export { useChannelSocket };
