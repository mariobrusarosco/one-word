import { useState, useCallback } from 'react'

export const useChosenWord = () => {
  const [chosenWord, setChosenWord] = useState<string>('')

  const chooseWord = useCallback((word: string) => {
    setChosenWord(word)
  }, [])

  return {
    chosenWord,
    chooseWord
  }
} 