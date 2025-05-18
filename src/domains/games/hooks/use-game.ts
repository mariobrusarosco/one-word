import { useQuery } from "@tanstack/react-query";
import { useGameSocket } from "@/domains/games/hooks/use-game-socket";
import { useParams } from "react-router-dom";
import { GamePhaseStatuses } from "@/domains/games/typing/phase";
import { useMember } from "@/domains/member/hooks/use-member";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { IGame } from "@/domains/games/typing/game";
import { useQueryClient } from "@tanstack/react-query";
import { IGamePartipant } from "../typing/participant";
import { useGameRotation } from "./use-game-rotation";
import { useEffect } from "react";

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
  const queryKey = ["game", tableId];
  const rotation = useGameRotation({
    gameParticipants,
    member,
  });

  const query = useQuery<IGame>({
    queryKey,
    queryFn: ({ queryKey }) => {
      const [_, __, gameParticipants] = queryKey as [
        string,
        string,
        IGamePartipant[]
      ];
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

  // todo mOVE THIS TO A FUNCTION AND USE IT ON THE SOCKET EVENT
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
  }, [gameParticipants]);

  // console.log("[DEBUG] [useGame]", gameParticipants?.length);

  const updateGameOnSocket = (game: IGame) => {
    emit(SocketEvents.GAME_UPDATE, {
      gameId: `game-${tableId}`,
      game,
    });
  };

  const moveToNextPhase = (phase: GamePhaseStatuses) => {
    const game = queryClient.getQueryData(queryKey);
    // console.log("[DEBUG] [moveToNextPhase]", game);
    if (!game) return;

    const newData = {
      ...game,
      activePhase: phase,
    };

    // console.log("[DEBUG] [moveToNextPhase]", phase, newData);

    queryClient.setQueryData(queryKey, newData);
    updateGameOnSocket(newData as IGame);
  };

  return query.data;
};
