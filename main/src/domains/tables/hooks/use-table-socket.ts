import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useCallback, useEffect, useState } from "react";
import { ITablePartipant } from "../typing/interfaces";

const useTableSocket = (tableId?: string) => {
  const { on, emit, connected } = useWebSocket();
  const [tableParticipants, setTableParticipants] = useState<ITablePartipant[]>(
    []
  );

  const joinNewTable = useCallback(() => {
    console.log("[DEBUG] 3.1  join table - ", `table-${tableId}`);
    emit(SocketEvents.JOIN_TABLE, `table-${tableId}`);
  }, [emit, tableId]);

  const leaveCurrentTable = useCallback(() => {
    console.log("[DEBUG] 3.1  leave table - ", `table-${tableId}`);
    emit(SocketEvents.LEAVE_TABLE, `table-${tableId}`);
  }, [emit, tableId]);

  const watchForNewParticipants = useCallback(() => {
    console.log(
      "[DEBUG] 3.1  watchForNewParticipants table - ",
      `table-${tableId}`
    );
    on<ITablePartipant[]>(SocketEvents.UPDATE_TABLE_PARTICIPANTS, (data) => {
      setTableParticipants(data);
    });
  }, [connected, tableId, on]);

  useEffect(() => {
    console.log("[DEBUG] 3.1  mounting - useTableSocket", {
      tableId,
      connected,
    });

    joinNewTable();
    watchForNewParticipants();

    return () => {
      console.log("[DEBUG] 3.1  unmounting - useTableSocket", {
        tableId,
        connected,
      });
      leaveCurrentTable();
    };
  }, [tableId, connected]);

  return { tableParticipants };
};

export { useTableSocket };
