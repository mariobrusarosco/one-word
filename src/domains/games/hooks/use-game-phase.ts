import { useState, useCallback } from "react";
import { GamePhaseStatus, IGamePhase, IGamePhases } from '../typing'

// const gamePhaseTransitions = new Map<GamePhaseStatus, GamePhaseStatus>([
//   [GamePhaseStatus.NOT_STARTED, GamePhaseStatus.CHOOSING_THE_WORD],
//   [GamePhaseStatus.CHOOSING_THE_WORD, GamePhaseStatus.GUESSING_THE_WORD],
//   [GamePhaseStatus.GUESSING_THE_WORD, GamePhaseStatus.WRITING_SIMILAR_WORDS],
//   [GamePhaseStatus.WRITING_SIMILAR_WORDS, GamePhaseStatus.REMOVING_SIMILAR_WORDS],
//   [GamePhaseStatus.REMOVING_SIMILAR_WORDS, GamePhaseStatus.RESULTS],
//   [GamePhaseStatus.RESULTS, GamePhaseStatus.NOT_STARTED],
// ]);

const initialGamePhases: IGamePhases = new Map([
  [GamePhaseStatus.NOT_STARTED, { id: GamePhaseStatus.NOT_STARTED, label: "Not started", active: true }],
  [GamePhaseStatus.CHOOSING_THE_WORD, { id: GamePhaseStatus.CHOOSING_THE_WORD, label: "Choosing the word", active: false }],
  [GamePhaseStatus.GUESSING_THE_WORD, { id: GamePhaseStatus.GUESSING_THE_WORD, label: "Guessing the word", active: false }],
  [GamePhaseStatus.WRITING_SIMILAR_WORDS, { id: GamePhaseStatus.WRITING_SIMILAR_WORDS, label: "Writing similar words", active: false }],
  [GamePhaseStatus.REMOVING_SIMILAR_WORDS, { id: GamePhaseStatus.REMOVING_SIMILAR_WORDS, label: "Removing similar words", active: false }],
  [GamePhaseStatus.RESULTS, { id: GamePhaseStatus.RESULTS, label: "Results", active: false }],
]);

export const useGamePhase = () => {
    const [phases, setPhases] = useState<Map<GamePhaseStatus, IGamePhase>>(initialGamePhases);

    const updateGamePhase = useCallback((phaseId: GamePhaseStatus) => {
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

    const activePhase = [...phases.values()].find(phase => phase.active)?.id || GamePhaseStatus.NOT_STARTED;
    
    return { phases, updateGamePhase, activePhase };
};
