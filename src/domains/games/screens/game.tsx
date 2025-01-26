import { Separator } from "@/domains/ui-system/components/ui/separator";

import { GamePhase } from "../components/game-phase";
// import { GameParticipantsList } from "../components/game-participants";
// import { GameBoard } from "../components/game-board";
import { useGameNew } from "../hooks/use-game-new";

const GameScreen = () => {
  const game = useGameNew();

  if(!game) return null;
  

  console.log('[TEST - game]', game);
  return (
    <div data-ui="game-screen">
      <div className="heading font-extralight">
        <GamePhase game={game} />
        <Separator className="bg-rose-800 dark:bg-neutral-100 my-4" />
      </div>

      <div className="flex gap-4 justify-between">
        {/* <GameParticipantsList gameState={gameState} /> */}
      
        {/* <GameBoard gameState={gameState} handlers={handlers} /> */}
      </div>

    </div>
  );
};

export default GameScreen;
