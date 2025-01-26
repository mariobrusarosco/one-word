import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useCallback, useEffect, useState } from "react";
import { IGamePartipant, IGameState } from "../typing";
import { useQueryClient } from "@tanstack/react-query";

const useGameSocket = (tableId?: string) => {
  const { on, emit } = useWebSocket();
  const [gameParticipants, setGameParticipants] = useState<IGamePartipant[]>([]);
  const queryClient = useQueryClient();

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

  const watchForGameUpdate = useCallback(() => {
    tableId && on(SocketEvents.GAME_UPDATE, (gameState: IGameState) => {
      queryClient.setQueryData(['gameState'], gameState);
    });
  }, [tableId, on, queryClient]);

  const updateGameOnSocket = useCallback((game: IGameState) => {
    tableId && emit(SocketEvents.GAME_UPDATE, game);
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
    watchForGameUpdate();

    return () => {
      leaveGameRoom();
    };
  }, [joinGameRoom, watchForNewParticipants, watchForDisconnections, leaveGameRoom, watchForGameUpdate]);

  return { 
    gameParticipants,
    watchForGameUpdate,
    updateGameOnSocket
  };
};

export { useGameSocket };
