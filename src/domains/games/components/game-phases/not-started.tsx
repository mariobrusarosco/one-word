import { IGame } from "@/domains/games/typing/game";
import { Button } from "@/domains/ui-system/components/ui/button";
import { GamePhaseStatuses } from "@/domains/games/typing/phase";

export const NotStarted = ({ game }: { game: IGame }) => {
  const { actions } = game;

  const handleStartGame = () => {
    console.log("[GAME] Handle Start Game");
    actions.moveToNextPhase(GamePhaseStatuses.CHOOSING_THE_WORD);
  };

  return (
    <div className="flex flex-col gap-2">
      {game.rotation.isMemberLeadPlayer ? (
        <div className="flex justify-center flex-col gap-2">
          <span className="text-sm text-gray-500">
            When you´re ready, go ahead and...
          </span>
          <Button onClick={handleStartGame}>Start game</Button>
        </div>
      ) : (
        <p className="text-lg text-white">Waiting for the game to start...</p>
      )}
    </div>
  );
};
