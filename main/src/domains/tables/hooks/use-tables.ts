import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export interface IPartipant {
  userId: string;
  username: string;
}

const useTables = () => {
  const { tableId: currentTableId } = useParams<{ tableId: string }>();
  const { dispatch, state } = useWebSocket();
  const [tableParticipants, setTableParticipants] = useState<IPartipant[]>([]);

  const tablesRef = useRef();
  const isUserSwitchingTables =
    tablesRef.current && tablesRef.current !== currentTableId;

  const joinNewTable = useCallback(() => {
    dispatch({
      type: SocketEvents.JOIN_TABLE,
      payload: {
        tableId: currentTableId,
      },
    });

    tablesRef.current = currentTableId;
  }, [isUserSwitchingTables, dispatch]);

  const leaveCurrentTable = useCallback(() => {
    dispatch({
      type: SocketEvents.LEAVE_TABLE,
      payload: {
        tableId: tablesRef.current,
      },
    });
  }, [tablesRef.current]);

  useEffect(() => {
    console.log(
      "[DEBUG] - watchForNewParticipants",
      state.socketInstance,
      state.connected
    );

    if (state.connected) {
      state.socketInstance?.on(SocketEvents.UPDATE_TABLE_PARTICIPANTS, (data) =>
        setTableParticipants(data)
      );
    }
  }, [state.connected]);

  useEffect(() => {
    if (!state?.connected) return;
    // console.log("[SOCKET] - MOUNT TABLE - on", label);

    if (isUserSwitchingTables) {
      leaveCurrentTable();
    }

    joinNewTable();
    // watchForNewParticipants();
  }, [currentTableId, !state?.connected]);

  return { tableParticipants };
};

export { useTables };
