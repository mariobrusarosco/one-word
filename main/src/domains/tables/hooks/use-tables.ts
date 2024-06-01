import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useTables = () => {
  const { tableId: currentTableId } = useParams<{ tableId: string }>();
  const { dispatch, state } = useWebSocket();
  const [tableParticipants, setTableParticipants] = useState<string[]>([]);

  const isUserSwitchingTables = state?.lastActiveTableId !== currentTableId;

  const joinNewTable = useCallback(() => {
    dispatch({
      type: SocketEvents.JOIN_TABLE,
      payload: {
        tableId: currentTableId,
      },
    });
  }, [isUserSwitchingTables, dispatch]);

  const leaveCurrentTable = useCallback(() => {
    dispatch({
      type: SocketEvents.LEAVE_TABLE,
      payload: {
        tableId: state?.lastActiveTableId,
      },
    });
  }, [isUserSwitchingTables, dispatch]);

  const watchForNewParticipants = useCallback(() => {
    console.log("[DEBUG] - watchForNewParticipants");
    state.socketInstance?.on("update_list_of_users", (data) =>
      setTableParticipants(
        data.map((user: { username: string }) => user.username)
      )
    );

    watchForNewParticipants();
  }, [state.connected]);

  useEffect(() => {
    if (!currentTableId || !state?.socketInstance) return;
    // console.log("[SOCKET] - MOUNT TABLE - on", label);

    if (isUserSwitchingTables) {
      leaveCurrentTable();
    }

    joinNewTable();
    // watchForNewParticipants();
  }, [currentTableId, state?.socketInstance]);

  return { tableParticipants };
};

export { useTables };
