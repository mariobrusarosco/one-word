import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export interface IPartipant {
  userId: string;
  username: string;
}

const useTableSocket = () => {
  const { tableId } = useParams<{ tableId: string }>();
  const { on, emit, connected } = useWebSocket();
  const [tableParticipants, setTableParticipants] = useState<IPartipant[]>([]);

  const tablesRef = useRef<string>();
  const isUserSwitchingTables =
    tablesRef.current && tablesRef.current !== tableId;

  const joinNewTable = useCallback(() => {
    // emit(SocketEvents.JOIN_TABLE, tableId);
    console.log("[SOCKET] - [FRONT] - Joining table", {
      tablesRef: tablesRef.current,
      tableId,
      isUserSwitchingTables,
    });
    tablesRef.current = tableId;
  }, [emit, isUserSwitchingTables]);

  const leaveCurrentTable = useCallback(() => {
    // emit(SocketEvents.LEAVE_TABLE, tablesRef.current);
    console.log("[SOCKET] - [FRONT] - Leaving table", {
      connected,
      tablesRef: tablesRef.current,
      tableId,
      isUserSwitchingTables,
    });
  }, [emit, isUserSwitchingTables]);

  const watchForNewParticipants = useCallback(() => {
    on<IPartipant[]>(SocketEvents.UPDATE_TABLE_PARTICIPANTS, (data) => {
      console.log("[SOCKET] - [FRONT] - Updating Table", {
        connected,
        tablesRef: tablesRef.current,
        tableId,
        isUserSwitchingTables,
      });
    });
  }, [connected, tableId, on]);

  useEffect(() => {
    if (!connected) return;

    if (isUserSwitchingTables) {
      leaveCurrentTable();
    }

    joinNewTable();

    watchForNewParticipants();
  }, [connected, isUserSwitchingTables]);

  return { participants: tableParticipants };
};

export { useTableSocket };
