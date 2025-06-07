import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useCallback, useEffect, useState } from "react";
import type { IGame } from "../typing/game";
import { useToast } from "@/domains/ui-system/components/ui/use-toast";
import { IMember } from "@/domains/auth/typing/enums-and-interfaces";
import { ISocketUser } from "@/domains/socket/typing/interfaces";
import { IGamePartipant } from "../typing/participant";

const useGameSocket = (
  tableId?: string,
  member?: IMember,
  onGameUpdate?: (game: IGame) => void
) => {
  const { on, emit } = useWebSocket();
  const [gameParticipants, setGameParticipants] = useState<IGamePartipant[]>(
    []
  );
  const { toast } = useToast();

  const emitJoinGame = useCallback(() => {
    console.log("[GAME] [JOIN_GAME]");
    emit(SocketEvents.JOIN_GAME, {
      gameId: `game-${tableId}`,
      memberId: member?.id,
    });
  }, [emit, tableId, member?.id]);

  const emitLeaveGame = useCallback(() => {
    console.log("[GAME] [LEAVE_GAME]");
    emit(SocketEvents.LEAVE_GAME, {
      gameId: `game-${tableId}`,
      memberId: member?.id,
    });
  }, [emit, tableId, member?.id]);

  // const watchForParticipants = useCallback(() => {
  //   console.log("[GAME] [WATCH_FOR_PARTICIPANTS]");

  //   on(SocketEvents.UPDATE_GAME_PARTICIPANTS, (data: IGamePartipant[]) => {
  //     console.log("[GAME] [UPDATE_GAME_PARTICIPANTS]", data);
  //     setGameParticipants(data);
  //   });
  // }, [on]);

  const watchForJoinGame = useCallback(() => {
    on(
      SocketEvents.JOIN_GAME,
      (data: {
        joined: ISocketUser;
        gameId: string;
        allParticipants: ISocketUser[];
      }) => {
        toast({
          title: `${data.joined.username} joined the game`,
        });
      }
    );
  }, [on, toast]);

  const watchForLeaveGame = useCallback(() => {
    on(SocketEvents.LEAVE_GAME, (data: ISocketUser) => {
      toast({
        title: `${data.username} left the game`,
      });
    });
  }, [on, toast]);

  const updateGameOnSocket = useCallback((game: IGame) => {
    console.log("[GAME] [UPDATE_GAME]", game);
  }, []);

  const watchForGameUpdate = useCallback(() => {
    on(SocketEvents.GAME_UPDATE, (data: IGame) => {
      console.log("[GAME] [UPDATE_GAME]", data);
      onGameUpdate?.(data);
    });
  }, [on, onGameUpdate]);

  useEffect(() => {
    console.log("[GAME] [MOUNT]");
    // Emit
    emitJoinGame();
    // Watch
    // watchForParticipants();
    watchForJoinGame();
    watchForLeaveGame();
    watchForGameUpdate();

    return () => {
      console.log("[GAME] [UNMOUNT]");
      emitLeaveGame();
    };
  }, [
    emitJoinGame,
    // emitLeaveGame,
    // watchForParticipants,
    // watchForJoinGame,
    // watchForLeaveGame,
    // watchForGameUpdate
  ]);

  return {
    gameParticipants,
    updateGameOnSocket,
  };
};

export { useGameSocket };
