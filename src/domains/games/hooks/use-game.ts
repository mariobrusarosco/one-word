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

const GAME_QUERY_KEY = (tableId: string) => ["game", tableId];

export const useGame = (): IGame | undefined => {
  const { data: member } = useMember();
  const { tableId } = useParams<{ tableId: string }>() as { tableId: string };
  const { gameParticipants } = useGameSocket(tableId, member, (game: IGame) => {
    queryClient.setQueryData(
      GAME_QUERY_KEY(tableId),
      (oldData: IGame | undefined) => {
        if (!oldData) return game;
        return {
          ...oldData,
          ...game,
        };
      }
    );
  });

  console.log("[DEBUG] [useGame]", {
    gameParticipants,
    member,
    tableId,
  });

  const queryClient = useQueryClient();
  const query = useQuery<IGame>({
    queryKey: GAME_QUERY_KEY(tableId),
    queryFn: () => {
      const game: IGame = {
        participants: gameParticipants,
        activePhase: GamePhaseStatuses.NOT_STARTED,
      };
      return game;
    },
    enabled: Boolean(member && gameParticipants.length > 0),
  });

  return query.data;
};
