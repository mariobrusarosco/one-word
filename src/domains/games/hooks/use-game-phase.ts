import { useState, useCallback } from "react";
import { GamePhaseStatuses, IGamePhase, IGamePhases } from '../typing/game'

// const gamePhaseTransitions = new Map<GamePhaseStatuses, GamePhaseStatuses>([
//   [GamePhaseStatuses.NOT_STARTED, GamePhaseStatuses.CHOOSING_THE_WORD],
//   [GamePhaseStatuses.CHOOSING_THE_WORD, GamePhaseStatuses.GUESSING_THE_WORD],
//   [GamePhaseStatuses.GUESSING_THE_WORD, GamePhaseStatuses.WRITING_SIMILAR_WORDS],
//   [GamePhaseStatuses.WRITING_SIMILAR_WORDS, GamePhaseStatuses.REMOVING_SIMILAR_WORDS],
//   [GamePhaseStatuses.REMOVING_SIMILAR_WORDS, GamePhaseStatuses.RESULTS],
//   [GamePhaseStatuses.RESULTS, GamePhaseStatuses.NOT_STARTED],
// ]);

const initialGamePhases: IGamePhases = new Map([
  [GamePhaseStatuses.NOT_STARTED, { id: GamePhaseStatuses.NOT_STARTED, label: "Not started", active: true }],
  [GamePhaseStatuses.CHOOSING_THE_WORD, { id: GamePhaseStatuses.CHOOSING_THE_WORD, label: "Choosing the word", active: false }],
  [GamePhaseStatuses.GUESSING_THE_WORD, { id: GamePhaseStatuses.GUESSING_THE_WORD, label: "Guessing the word", active: false }],
  [GamePhaseStatuses.WRITING_SIMILAR_WORDS, { id: GamePhaseStatuses.WRITING_SIMILAR_WORDS, label: "Writing similar words", active: false }],
  [GamePhaseStatuses.REMOVING_SIMILAR_WORDS, { id: GamePhaseStatuses.REMOVING_SIMILAR_WORDS, label: "Removing similar words", active: false }],
  [GamePhaseStatuses.RESULTS, { id: GamePhaseStatuses.RESULTS, label: "Results", active: false }],
]);

export const useGamePhase = () => {
    const [phases, setPhases] = useState<Map<GamePhaseStatuses, IGamePhase>>(initialGamePhases);

    const updateGamePhase = useCallback((phaseId: GamePhaseStatuses) => {
        setPhases(prev => {
            const gamePhasesCopy = new Map([...prev]);
            const currentPhase = [...prev.values()].find(phase => phase.active);
            const nextPhase = prev.get(phaseId);
            
            if (!currentPhase || !nextPhase) return prev;
        
            gamePhasesCopy.set(currentPhase.id, { ...currentPhase, active: false });
            gamePhasesCopy.set(phaseId, { ...nextPhase, active: true });
            
            return gamePhasesCopy;
        });
    }, []);

    const activePhase = [...phases.values()].find(phase => phase.active)?.id || GamePhaseStatuses.NOT_STARTED;
    
    return { phases, updateGamePhase, activePhase };
};
