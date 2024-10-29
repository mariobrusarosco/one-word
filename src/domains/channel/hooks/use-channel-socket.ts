import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useEffect } from "react";

const useChannelSocket = (channelId?: string) => {
  const { emit } = useWebSocket();
  const chatSlug = `chat-${channelId}	`;

  useEffect(() => {
    emit(SocketEvents.JOIN_CHAT, chatSlug);

    return () => {
      emit(SocketEvents.LEAVE_CHAT, chatSlug);
    };
  }, [channelId]);
};

export { useChannelSocket };
