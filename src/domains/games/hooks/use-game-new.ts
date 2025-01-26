import { useQuery } from "@tanstack/react-query";
import { useGameSocket } from "./use-game-socket";
import { useParams } from "react-router-dom";
import { GamePhaseStatus, IGameState } from "../typing";

export const useGameNew = () => {
    const { tableId } = useParams<{ tableId: string }>();
    const { gameParticipants } = useGameSocket(tableId);
    // const { data: member } = useMember();

    console.log('[TEST - gameParticipants]', gameParticipants);
    
    const { data: gameState } = useQuery({
        queryKey: ['gameState', { gameParticipants}],
        initialData: {
            // tableId,
            participants: gameParticipants,
            activePhase: GamePhaseStatus.NOT_STARTED
        } satisfies IGameState,
    });

    return gameState;
}