import { useQuery } from "@tanstack/react-query";
import { useGameSocket } from "@/domains/games/hooks/use-game-socket";
import { useParams } from "react-router-dom";
import { GamePhaseStatuses } from "@/domains/games/typing/phase";
import { useMember } from "@/domains/member/hooks/use-member";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import type { IGame } from "@/domains/games/typing/game";
import { useQueryClient } from "@tanstack/react-query";
import { useGameRotation } from "./use-game-rotation";
import { useEffect, useMemo } from "react";
import type { IGamePartipant } from "@/domains/games/typing/participant";

export const useGame = (): IGame | undefined => {
  const { data: member } = useMember();
  const { tableId } = useParams<{ tableId: string }>() as { tableId: string };
  const { gameParticipants } = useGameSocket(tableId, member, (game: IGame) => {
    queryClient.setQueryData(queryKey, (oldData: IGame | undefined) => {
      if (!oldData) return game;
      return {
        ...oldData,
        ...game,
      };
    });
  });
  const { emit } = useWebSocket();
  const queryClient = useQueryClient();
  const queryKey = useMemo(() => ["game", tableId], [tableId]);
  
  const rotation = useGameRotation({
    gameParticipants,
    member,
  });

  const updateGameOnSocket = (game: IGame) => {
    emit(SocketEvents.GAME_UPDATE, {
      gameId: `game-${tableId}`,
      game,
    });
  };

  const moveToNextPhase = (phase: GamePhaseStatuses) => {
    const game = queryClient.getQueryData<IGame>(queryKey);
    if (!game) return;

    const newData: IGame = {
      ...game,
      activePhase: phase,
    };

    queryClient.setQueryData(queryKey, newData);
    updateGameOnSocket(newData);
  };

  const currentLeadPlayer = useMemo(
    () => gameParticipants[rotation.leadPlayerIndex],
    [gameParticipants, rotation.leadPlayerIndex]
  );

  const query = useQuery<IGame>({
    queryKey: [...queryKey, { gameParticipants, rotation, moveToNextPhase, updateGameOnSocket, currentLeadPlayer }],
    queryFn: () => {
      const leadPlayer = currentLeadPlayer as IGamePartipant;
      const game: IGame = {
        participants: gameParticipants,
        activePhase: GamePhaseStatuses.NOT_STARTED,
        rotation: {
          ...rotation,
          leadPlayer,
        },
        actions: {
          moveToNextPhase,
          updateGameOnSocket,
        },
      };
      return game;
    },
    enabled: Boolean(member && gameParticipants.length > 0 && currentLeadPlayer),
  });

  useEffect(() => {
    if (gameParticipants.length === 0) return;
    
    queryClient.setQueryData<IGame | undefined>(queryKey, (oldData) => {
      if (!oldData) return oldData;
      const leadPlayer = currentLeadPlayer as IGamePartipant;

      return {
        ...oldData,
        rotation: {
          ...rotation,
          leadPlayer,
        },
        participants: gameParticipants,
      };
    });
  }, [gameParticipants, queryClient, queryKey, rotation, currentLeadPlayer]);

  return query.data;
};
