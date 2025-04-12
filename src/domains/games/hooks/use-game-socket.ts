import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useCallback, useEffect, useState } from "react";
import { IGamePartipant, IGameState } from "../typing";
import { useQueryClient } from "@tanstack/react-query";
import { toast, useToast } from "@/domains/ui-system/components/ui/use-toast";
import { useMember } from "@/domains/member/hooks/use-member";

const useGameSocket = (tableId?: string) => {
  const member = useMember();
  const { on, emit } = useWebSocket();
  const [gameParticipants, setGameParticipants] = useState<IGamePartipant[]>([]);
  const queryClient = useQueryClient();
  const { toast } = useToast();


  const emitGame = {
    participantEntrance: useCallback(() => {
      debugger
      tableId && emit(SocketEvents.GAME_PARTICIPANT_ENTRANCE, `table-${tableId}-game`);
    }, [emit, tableId]),
    participantExit: useCallback(() => {
      debugger
      tableId && emit(SocketEvents.GAME_PARTICIPANT_EXIT, {
        userID: member?.data?.id,
        username: member?.data?.firstName,
        gameRoom: `table-${tableId}-game`
      });
    }, [emit, tableId]),
  }

  const watchForGame = {
    participantEntrance: useCallback(() => {
      tableId && on(SocketEvents.GAME_PARTICIPANT_ENTRANCE, (participant: IGamePartipant) => {
        setGameParticipants((prev) => [...prev, participant]);
        toast({
          title: participant.username,
          description: "has joined the game",
        });
      });
    }, [tableId, on]),
    participantExit: useCallback(() => {
      tableId && on(SocketEvents.GAME_PARTICIPANT_EXIT, (participant: IGamePartipant) => {
        setGameParticipants((prev) => prev.filter((p) => p.userID !== participant.userID));
        toast({
          title: participant.username,
          description: "has left the game",
        });
      });
    }, [tableId, on]),
    participantsUpdate: useCallback(() => {
      tableId && on<IGamePartipant[]>(
        SocketEvents.UPDATE_GAME_PARTICIPANTS, 
        setGameParticipants
      );
    }, [tableId, on]),
  }


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
    emitGame.participantEntrance();
    watchForGame.participantEntrance();
    // watchForParticipantsUpdate();
    // watchForGameParticipantExit();
    // watchForDisconnections();
    // watchForGameUpdate();

    return () => {
      emitGame.participantExit();
    };
  }, [
    watchForGame.participantEntrance,
    watchForGame.participantExit,
    // emitNewGameParticipant, 
    // watchForNewGameParticipant, 
    // watchForParticipantsUpdate,
    // watchForGameParticipantExit,
    // watchForDisconnections, 
    // emitGameParticipantExit, 
    // watchForGameUpdate,
  ]);

  return { 
    gameParticipants,
    updateGameOnSocket
  };
};

export { useGameSocket };
