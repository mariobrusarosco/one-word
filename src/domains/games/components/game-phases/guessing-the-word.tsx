import { useQueryClient } from "@tanstack/react-query";
import type { IGameState } from "../../typing/game";
import { GamePhaseStatuses } from "../../typing/game";
import { Button } from "@/domains/ui-system/components/ui/button";
import { useState } from "react";

export const GuessingTheWord = ({ game }: { game: IGameState }) => {
    const queryClient = useQueryClient();
    const [word, setWord] = useState("");

    const handleGuessWord = (word: string) => {
      const formattedWord = word.toLowerCase().split(" ").at(0);

      queryClient.setQueryData(['gameState'], (oldData: IGameState) => ({
        ...oldData,
        guessedWords: [...(oldData.guessedWords || []), {
          userId: "",
          userName: '',
          value: formattedWord
        }],
        activePhase: GamePhaseStatuses.REMOVING_SIMILAR_WORDS
      }));
    };
  
    const rotation = game.rotation;
    const isMemberLeadPlayer = rotation?.isMemberLeadPlayer ?? false;
    const leadPlayer = rotation?.leadPlayer;
      
    return (
      <div>
        {!isMemberLeadPlayer ? (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <p className="text-lg text-white">
                {leadPlayer?.username} 
              </p>
              <p className="text-lg text-white">
                has chosen {game.chosenWord}
              </p>
            </div>
  
            <div className="flex flex-col gap-2">
              <p className="text-lg text-white">It's your time to write a word</p>
              <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
            </div>
  
            <Button onClick={() => handleGuessWord(word)}>Done</Button>
          </div>
        ) : (
          <p className="text-lg text-white">Players are guessing the word...</p>
        )}
      </div>
    );
  };