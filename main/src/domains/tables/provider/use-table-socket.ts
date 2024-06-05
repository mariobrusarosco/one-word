import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { table } from "console";
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export interface IPartipant {
  userId: string;
  username: string;
}

const useTableSocket = (tableId: string) => {
  const { on, emit, connected } = useWebSocket();
  const [tableParticipants, setTableParticipants] = useState<IPartipant[]>([]);

  const tablesRef = useRef<string>();
  const isUserSwitchingTables =
    tablesRef.current && tablesRef.current !== tableId;

  const joinNewTable = useCallback(() => {
    console.log("[SOCKET] - [FRONT] - Joining table", {
      tablesRef: tablesRef.current,
      tableId,
      isUserSwitchingTables,
    });
    emit(SocketEvents.JOIN_TABLE, tableId);
    tablesRef.current = tableId;
  }, [emit, isUserSwitchingTables, tableId]);

  const leaveCurrentTable = useCallback(() => {
    emit(SocketEvents.LEAVE_TABLE, tablesRef.current);
    console.log("[SOCKET] - [FRONT] - Leaving table", {
      connected,
      tablesRef: tablesRef.current,
      tableId,
      isUserSwitchingTables,
    });
  }, [emit, isUserSwitchingTables, tableId]);

  const watchForNewParticipants = useCallback(() => {
    on<IPartipant[]>(SocketEvents.UPDATE_TABLE_PARTICIPANTS, (data) => {
      console.log("[SOCKET] - [FRONT] - Updating Table", {
        connected,
        tablesRef: tablesRef.current,
        tableId,
        isUserSwitchingTables,
      });
      setTableParticipants(data);
    });
  }, [connected, tableId, on]);

  useEffect(() => {
    if (!connected) return;

    if (isUserSwitchingTables) {
      leaveCurrentTable();
    }

    joinNewTable();

    watchForNewParticipants();
  }, [connected, tableId]);

  useEffect(() => {
    return () => {
      console.log(
        "[SOCKET] leaving table for good",
        tablesRef.current,
        tableId
      );
      // leaveCurrentTable();
      emit(SocketEvents.LEAVE_TABLE, tablesRef.current);
      // leaveCurrentTable();
      // emit("disconnect");
    };
  }, [connected]);

  return { participants: tableParticipants };
};

export { useTableSocket };
