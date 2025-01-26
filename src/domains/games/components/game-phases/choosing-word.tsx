import { IGameHandlers } from "../../typing";

import { IGameState } from "../../typing";

import { useQueryClient } from "@tanstack/react-query";
import { GamePhaseStatus } from "../../typing";
import { Button } from "@/domains/ui-system/components/ui/button";

export const ChoosingTheWord = ({ game, handlers }: { game: IGameState, handlers: IGameHandlers }) => {
    const queryClient = useQueryClient();
    const {
      rotation: { leadPlayer, isMemberLeadPlayer },
    } = game;
  
    const handleChooseWord = () => {
      const updatedGame = {
        ...game,
        activePhase: GamePhaseStatus.WRITING_SIMILAR_WORDS
      };
  
      queryClient.setQueryData(['gameState'], updatedGame);
      handlers.updateGameOnSocket(updatedGame);
    };
  
    return (
      <div className="flex flex-col gap-4">
        {isMemberLeadPlayer ? (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-lg text-white">Choose a word from these categories:</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Person</li>
                <li>Thing</li>
                <li>Verb</li>
                <li>Place</li>
              </ul>
            </div>
  
            <Button 
              onClick={handleChooseWord}
            >
              Next Phase
            </Button>
          </div>
        ) : (
          <div>
            <p className="text-lg text-white">
              {leadPlayer} is choosing a word...
            </p>
          </div>
        )}
      </div>
    );
  };
  