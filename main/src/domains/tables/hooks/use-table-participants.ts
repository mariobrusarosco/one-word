import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Participant = {
  username: string;
  userId: string;
};

export const useTableSocketConnection = () => {
  const { dispatch } = useWebSocket();
  const { tableId } = useParams<{ tableId: string }>();
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [activeTableId, setLastActiveTableId] = useState<string | undefined>();

  const handleTableParticipants = (participants: Participant[]) => {
    setParticipants(participants);
  };

  const joinTable = useCallback(() => {
    console.log(
      "[SOCKET DEBUG] - About to join table: ",
      tableId,
      activeTableId
    );
    setLastActiveTableId(tableId);
  }, [tableId]);

  const leaveTable = useCallback(() => {
    setLastActiveTableId(tableId);
    console.log(
      "[SOCKET DEBUG] - About to leave table: ",
      tableId,
      activeTableId
    );
  }, [tableId]);

  useEffect(() => {
    // console.log(
    //   "[SOCKET DEBUG] - Mount or update tableId: ",
    //   tableId,
    //   activeTableId
    // );

    if (activeTableId !== undefined && activeTableId !== tableId) {
      // leaveTable();
      console.log(
        "[SOCKET DEBUG] - About to leave table: ",
        tableId,
        activeTableId
      );
    }

    joinTable();
  }, [tableId]);

  // Handle user switching tables
  // useEffect(() => {
  //   console.log("[SOCKET DEBUG] - Mount or update tableId: ", tableId);
  //   // if (isUserAccessingFirstTime) return;

  //   console.log("[SOCKET DEBUG] - About to leave the table: ", activeTableId);
  //   console.log("[SOCKET DEBUG] - About to join table: ", tableId);
  //   setLastActiveTableId(tableId);
  // }, [isUserWitchingTables]);

  return { participants, handleTableParticipants };
};
