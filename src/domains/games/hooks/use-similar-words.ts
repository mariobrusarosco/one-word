import { useState, useCallback, useEffect } from 'react'
import { GamePhaseStatuses, IGamePartipant, ISimilarWord } from '../typing/game'

export const useSimilarWords = (
  participants: IGamePartipant[], 
  updateGamePhase: (phaseId: GamePhaseStatuses) => void
) => {
  const [similarWords, setSimilarWords] = useState<ISimilarWord[]>([]);

  const addSimilarWord = useCallback((similarWordInput: ISimilarWord) => {
    setSimilarWords(prev => [...prev, similarWordInput]);
  }, []);

  useEffect(() => {
    if(similarWords.length === participants.length - 1) {
      updateGamePhase(GamePhaseStatuses.REMOVING_SIMILAR_WORDS);
    }
  }, [similarWords.length, participants.length, updateGamePhase]);

  return {
    similarWords,
    addSimilarWord
  };
} 