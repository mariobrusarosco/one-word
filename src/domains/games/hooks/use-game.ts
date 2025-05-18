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
import { IMember } from "@/domains/auth/typing/enums-and-interfaces";
import { useGameRotation } from "./use-game-rotation";
import { useEffect } from "react";

export const useGame = (): IGame | undefined => {
  const { data: member } = useMember();
  const { tableId } = useParams<{ tableId: string }>() as { tableId: string };
  const { gameParticipants } = useGameSocket(tableId, member);
  const { emit } = useWebSocket();
  const queryClient = useQueryClient();
  const queryKey = ["game", tableId, gameParticipants];
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
    select: (data) => {
      return {
        ...data,
        actions: {
          moveToNextPhase,
          updateGameOnSocket,
        },
        rotation,
      };
    },
    enabled: !!member && gameParticipants.length > 0,
  });

  useEffect(() => {
    if (gameParticipants.length > 0) {
      debugger;
      queryClient.invalidateQueries({ queryKey });
    }
  }, [gameParticipants]);

  console.log(" [useGame]", gameParticipants?.length);

  const updateGameOnSocket = () => {
    emit(SocketEvents.GAME_UPDATE, {
      gameId: `game-${tableId}`,
      game: query.data,
    });
  };

  const moveToNextPhase = (phase: GamePhaseStatuses) => {
    if (!query.data) return;

    debugger;

    queryClient.setQueryData(queryKey, {
      ...query.data,
      activePhase: phase,
    });
  };

  return query.data;
};
