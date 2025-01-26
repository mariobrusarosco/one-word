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
    tableId && emit(SocketEvents.JOIN_TABLE, `table-${tableId}`);
  }, [emit, tableId]);

  const leaveCurrentTable = useCallback(() => {
    tableId && emit(SocketEvents.LEAVE_TABLE, `table-${tableId}`);
  }, [emit, tableId]);

  const watchForNewParticipants = useCallback(() => {
    tableId &&
      on<ITablePartipant[]>(SocketEvents.UPDATE_TABLE_PARTICIPANTS, (data) => {
        setTableParticipants(data);
      });
  }, [tableId, on]);

  useEffect(() => {
    joinNewTable();
    watchForNewParticipants();

    return () => {
      leaveCurrentTable();
    };
  }, [
    tableId,
    connected,
    joinNewTable,
    watchForNewParticipants,
    leaveCurrentTable,
  ]);

  return { tableParticipants };
};

export { useTableSocket };
