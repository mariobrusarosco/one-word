import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useCallback, useEffect, useState } from "react";
import { IGamePartipant, IGameState } from "../typing";

const useGameSocket = (tableId?: string) => {
  const { on, emit } = useWebSocket();
  const [gameParticipants, setGameParticipants] = useState<IGamePartipant[]>([]);

  const joinGameRoom = useCallback(() => {
    tableId && emit(SocketEvents.JOIN_GAME_ROOM, `table-${tableId}-game`);
  }, [emit, tableId]);

  const leaveGameRoom = useCallback(() => {
    tableId && emit(SocketEvents.LEAVE_GAME_ROOM, `table-${tableId}-game`);
  }, [emit, tableId]);

  const watchForNewParticipants = useCallback(() => {
    tableId && on<IGamePartipant[]>(
      SocketEvents.UPDATE_GAME_ROOM_PARTICIPANTS, 
      setGameParticipants
    );
  }, [tableId, on]);

  const onGameUpdateOnSocket = useCallback((callback: (gameState: IGameState) => void) => {
    // debugger
    tableId && on<IGameState>(SocketEvents.GAME_UPDATE, callback);
  }, [tableId, on]);

  const updateGameOnSocket = useCallback((gameState: IGameState) => {
    debugger
    tableId && emit(SocketEvents.GAME_UPDATE, gameState);
  }, [tableId, emit]);

  const watchForDisconnections = useCallback(() => {
    tableId && on<IGamePartipant[]>(
      SocketEvents.DISCONNECTED, 
      (participants) => {
        setGameParticipants(participants);
      }
    );
  }, [tableId, on]);

  useEffect(() => {
    joinGameRoom();
    watchForNewParticipants();
    watchForDisconnections();
    return () => {
      leaveGameRoom();
    };
  }, [joinGameRoom, watchForNewParticipants, watchForDisconnections, leaveGameRoom]);

  return { 
    gameParticipants,
    onGameUpdateOnSocket,
    updateGameOnSocket
  };
};

export { useGameSocket };
