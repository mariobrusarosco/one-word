import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useEffect } from "react";

const useChannelSocket = (channelId: string) => {
  const { on, emit } = useWebSocket();

  useEffect(() => {
    console.log("[SOCKET] joining channel");

    return () => {
      console.log("[SOCKET] leaving channel");
      // leaveCurrentTable();
      // emit(SocketEvents.LEAVE_TABLE, tablesRef.current);
      // leaveCurrentTable();
      // emit("disconnect");
    };
  }, []);

  return {};
};

export { useChannelSocket };
