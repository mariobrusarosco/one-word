import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export interface IPartipant {
  userId: string;
  username: string;
}

const useTables = () => {
  const { tableId } = useParams<{ tableId: string }>();
  const { on, emit, socket, connected } = useWebSocket();
  const [tableParticipants, setTableParticipants] = useState<IPartipant[]>([]);

  const tablesRef = useRef<string>();
  const isUserSwitchingTables =
    tablesRef.current && tablesRef.current !== tableId;

  const joinNewTable = useCallback(() => {
    console.log("[DEBUG] 1.0 - joinNewTable", tableId);
    emit(SocketEvents.JOIN_TABLE, tableId);

    tablesRef.current = tableId;
  }, [emit, isUserSwitchingTables]);

  const leaveCurrentTable = useCallback(() => {
    emit(SocketEvents.LEAVE_TABLE, tablesRef.current);
  }, [emit, isUserSwitchingTables]);

  // const watchForNewParticipants = () => {
  //   //   console.log("[DEBUG] - currentTableId has changed! We need a new on()");

  //   on<IPartipant[]>(SocketEvents.UPDATE_TABLE_PARTICIPANTS, (data) => {
  //     console.log("[DEBUG] - PARTICIPANTS from socket ", data.length);
  //     setTableParticipants(data);
  //   });
  // };

  useEffect(() => {
    console.log(
      "[DEBUG] 2.0 - currentTableId has changed! ",
      "currentTableId",
      tableId,
      "connection status",
      connected,
      "isUserSwitchingTables",
      isUserSwitchingTables,
      "tablesRef.current",
      tablesRef.current,
      "isUserSwitchingTables",
      tablesRef.current && tablesRef.current !== tableId
    );

    if (!connected) return;

    console.log("[DEBUG] 2.0 - connected! Let's continue");

    if (isUserSwitchingTables) {
      console.log(
        "[DEBUG] 2.0 - isUserSwitchingTables! ",
        " from:",
        tablesRef.current,
        "to: ",
        tableId
      );
      leaveCurrentTable();
    }

    joinNewTable();

    on<IPartipant[]>(SocketEvents.UPDATE_TABLE_PARTICIPANTS, (data) => {
      console.log("[DEBUG] 1.0 - PARTICIPANTS from socket ", data.length);
      setTableParticipants(data);
    });

    // socket?.on("update-table-participants", (data) => {
    //   console.log("[DEBUG] 1.0- update-table-participants", data.length);
    // });
  }, [connected, isUserSwitchingTables]);

  return { tableParticipants };
};

export { useTables };
