import { IGameHandlers } from "../../typing";

import { IGameState } from "../../typing";

import { useQueryClient } from "@tanstack/react-query";
import { GamePhaseStatus } from "../../typing";
import { Button } from "@/domains/ui-system/components/ui/button";

export const NotStarted = ({ game, handlers }: { game: IGameState, handlers: IGameHandlers }) => {
    const queryClient = useQueryClient();
  
    const handleStartGame = () => {
      queryClient.setQueryData(['gameState'], (oldData: IGameState) => ({
        ...oldData,
        activePhase: GamePhaseStatus.CHOOSING_THE_WORD
      }));
  
      handlers.updateGameOnSocket({
        ...game,
        activePhase: GamePhaseStatus.CHOOSING_THE_WORD
      });
    }
  
    return (
      <div className="flex flex-col gap-2">
        {game.rotation.isMemberLeadPlayer ? (
          <div className="flex justify-center flex-col gap-2">
            <span className="text-sm text-gray-500">
              When you´re ready, go ahead and...
            </span>
            <Button onClick={handleStartGame}>
              Start game
            </Button>
          </div>
        ) : (
          <p className="text-lg text-white">Waiting for the game to start...</p>
        )}
      </div>
    );
  };
  
  