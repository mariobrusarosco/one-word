import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { useEffect, useState } from "react";
import { IGamePartipant } from "../typing/enums";

const useTableSocket = (tableId?: string) => {
  const { on, emit, connected } = useWebSocket();
  const [gameParticipants, setgameParticipants] = useState<IGamePartipant[]>(
    []
  );

  useEffect(() => {
    // joinNewTable();
    // watchForNewParticipants();
    // return () => {
    //   leaveCurrentTable();
    // };
  }, [
    tableId,
    connected,
    // joinNewTable,
    // watchForNewParticipants,
    // leaveCurrentTable,
  ]);

  return { gameParticipants };
};

export { useTableSocket };
