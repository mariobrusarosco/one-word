import { useQuery } from "@tanstack/react-query";
import { useGameSocket } from "./use-game-socket";
import { useParams } from "react-router-dom";
import { GamePhaseStatus } from "../typing";
import { useMember } from "@/domains/member/hooks/use-member";

export const useGameNew = () => {
    const { tableId } = useParams<{ tableId: string }>();
    const { gameParticipants,updateGameOnSocket } = useGameSocket(tableId);
    const { data: member } = useMember();

    console.log('[TEST - gameParticipants]', gameParticipants);
    
    const query = useQuery({
        queryKey: ['gameState'],
        queryFn: () => ({
            participants: [],
            activePhase: GamePhaseStatus.NOT_STARTED,
            rotation: { leadPlayer: '', isMemberLeadPlayer: false }
        }),
        enabled: !!member && gameParticipants.length > 0,
        select: (data) => {
            const leadPlayer = gameParticipants[0]?.username || '';
            const isMemberLeadPlayer = `${member?.firstName} ${member?.lastName}` === leadPlayer;
            
            return {
                ...data,
                participants: gameParticipants,
                rotation: { leadPlayer, isMemberLeadPlayer }
            };
        }
    });

    const handlers = {
        updateGameOnSocket,
    }

    return { game: query.data, handlers };
}