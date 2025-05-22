import { useQuery } from "@tanstack/react-query";
import { useGameSocket } from "@/domains/games/hooks/use-game-socket";
import { useParams } from "react-router-dom";
import { GamePhaseStatuses } from "@/domains/games/typing/phase";
import { useMember } from "@/domains/member/hooks/use-member";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { IGame } from "@/domains/games/typing/game";
import { useQueryClient } from "@tanstack/react-query";
import { useGameRotation } from "./use-game-rotation";
import { useEffect, useMemo } from "react";

export const useGame = (): IGame | undefined => {
  const { data: member } = useMember();
  const { tableId } = useParams<{ tableId: string }>() as { tableId: string };
  const { gameParticipants } = useGameSocket(tableId, member, (game: IGame) => {
    queryClient.setQueryData(queryKey, (oldData: IGame) => {
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
    const game = queryClient.getQueryData(queryKey);
    if (!game) return;

    const newData = {
      ...game,
      activePhase: phase,
    };

    queryClient.setQueryData(queryKey, newData);
    updateGameOnSocket(newData as IGame);
  };

  const query = useQuery<IGame>({
    queryKey: [...queryKey, { gameParticipants, rotation, moveToNextPhase, updateGameOnSocket }],
    queryFn: () => {
      return {
        participants: gameParticipants,
        activePhase: GamePhaseStatuses.NOT_STARTED,
        rotation,
        actions: {
          moveToNextPhase,
          updateGameOnSocket,
        },
      };
    },
    enabled: !!member && gameParticipants.length > 0,
  });

  useEffect(() => {
    if (gameParticipants.length > 0) {
      queryClient.setQueryData(queryKey, (oldData: IGame) => {
        return {
          ...oldData,
          rotation,
          participants: gameParticipants,
        };
      });
    }
  }, [gameParticipants, queryClient, queryKey, rotation]);

  // console.log("[DEBUG] [useGame]", gameParticipants?.length);

  return query.data;
};
