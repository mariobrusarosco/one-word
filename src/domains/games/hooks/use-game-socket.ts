import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useCallback, useEffect, useRef, useState } from "react";
import { IGamePartipant, IGameState } from "../typing";
import { useQueryClient } from "@tanstack/react-query";
import { toast, useToast } from "@/domains/ui-system/components/ui/use-toast";
import { useMember } from "@/domains/member/hooks/use-member";
import { IMember } from "@/domains/auth/typing/enums-and-interfaces";

const useGameSocket = (tableId?: string, member?: IMember) => {
  const { on, emit } = useWebSocket();
  const [gameParticipants, setGameParticipants] = useState<IGamePartipant[]>([]);
  // const queryClient = useQueryClient();
  const { toast } = useToast();

  // Create a ref to avoid unmounted error
  // const isMounted = useRef(true);

  const emitJoinGame = useCallback(() => {
    console.log('[GAME] [JOIN_GAME]')
    emit(SocketEvents.JOIN_GAME, {
      gameId: `game-${tableId}`,
      memberId: member?.id
    })
  }, [emit, tableId])

  const emitLeaveGame = useCallback(() => {
    console.log('[GAME] [LEAVE_GAME]')
    emit(SocketEvents.LEAVE_GAME, {
      gameId: `game-${tableId}`,
      memberId: member?.id
    })
  }, [emit, tableId])

  const watchForParticipants = useCallback(() => {
    console.log('[GAME] [WATCH_FOR_PARTICIPANTS]')
    on(SocketEvents.UPDATE_GAME_PARTICIPANTS, (data) => {
      console.log('[GAME] [UPDATE_GAME_PARTICIPANTS]', data)
    })
  }, [on, tableId])

  // Effect to emit participant entrance
  // useEffect(() => {
 
  //   emitJoinGame();
  // }, [tableId])

  useEffect(() => {
    console.log('[GAME] [MOUNT]')
    emitJoinGame();
    watchForParticipants();

    return () => {
      console.log('[GAME] [UNMOUNT]')
      emitLeaveGame();
        // isMounted.current = false;

        // if(isMounted.current) {
        //   alert('unmount')
        // }
    };
  }, [tableId, emitJoinGame, emitLeaveGame, watchForParticipants]);

  return { 
    gameParticipants,
    // updateGameOnSocket
  };
};

export { useGameSocket };
