import { useState, useCallback, useEffect } from 'react'
import { GamePhaseStatus, IGamePartipant, ISimilarWord } from '../typing'

export const useSimilarWords = (
  participants: IGamePartipant[], 
  updateGamePhase: (phaseId: GamePhaseStatus) => void
) => {
  const [similarWords, setSimilarWords] = useState<ISimilarWord[]>([]);

  const addSimilarWord = useCallback((similarWordInput: ISimilarWord) => {
    setSimilarWords(prev => [...prev, similarWordInput]);
  }, []);

  useEffect(() => {
    if(similarWords.length === participants.length - 1) {
      updateGamePhase(GamePhaseStatus.REMOVING_SIMILAR_WORDS);
    }
  }, [similarWords.length, participants.length, updateGamePhase]);

  return {
    similarWords,
    addSimilarWord
  };
} 