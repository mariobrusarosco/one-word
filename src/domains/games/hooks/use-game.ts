import { useMember } from "@/domains/member/hooks/use-member";
import { useGameSocket } from "./use-game-socket";
import { useParams } from "react-router-dom";
import { GamePhaseStatus, IGameState } from "../typing";
import { useGameRotation } from "./use-game-rotation";
import { useGamePhase } from "./use-game-phase";
import { useEffect, useState } from "react";

export const useGame = () => {
    const { tableId } = useParams<{ tableId: string }>();
    const { data: member } = useMember();
    const { onGameUpdateOnSocket, updateGameOnSocket, gameParticipants } = useGameSocket(tableId);
    const rotation = useGameRotation({
        gameParticipants,
        member
    });
    const phases = useGamePhase();


    console.log('[useGame]', rotation.gameParticipants);

    const [gameState, setGameState] = useState<IGameState>({
        activePhase: GamePhaseStatus.NOT_STARTED,
        participants: gameParticipants
    });

    // const gameState = {
    //     rotation,
    //     activePhase: GamePhaseStatus.NOT_STARTED,
    //     participants: gameParticipants,
    //     gamePhases
    // }

    const handlers = {
        onGameUpdateOnSocket,
        updateGameOnSocket,
        // updateGamePhase: gamePhases.updateGamePhase,
    }

    useEffect(() => {
        setGameState(prev => ({
            ...prev,
            participants: gameParticipants,
            activePhase: prev.activePhase
        }));
    }, [gameParticipants]);


    // When a game update from socket, we need to update the game state
    // useEffect(() => {
    //     onGameUpdateOnSocket((gameState: IGameState) => {
    //         setGameState(gameState);
    //     });
    // }, [onGameUpdateOnSocket]);

    // When a user updates a game state in its browser, we need to update the game state and emit the update to the server
    // const updateGameState = (gameState: IGameState) => {
    //     setGameState(gameState);
    //     updateGameOnSocket(gameState);
    // };

    return { gameState, handlers };
}


export interface IGameHandlers {
    onGameUpdateOnSocket: (callback: (gameState: IGameState) => void) => void;
    updateGameOnSocket: (gameState: IGameState) => void;
    // updateGamePhase: (phaseId: GamePhaseStatus) => void;
}
  

export type IUseGameReturnType = ReturnType<typeof useGame>;
