import { Separator } from "@/domains/ui-system/components/ui/separator";
import { GamePhase } from "../components/game-phase";
import { useGameNew } from "../hooks/use-game";
import { GameParticipantsList } from "../components/game-participants";
import { GameBoard } from "../components/game-board";

const GameScreen = () => {
  const { game, handlers } = useGameNew();

  if(!game) return null;

  console.log('[TEST - game]', game);
  return (
    <div data-ui="game-screen">
      <div className="heading font-extralight">
        <GamePhase game={game} />
        <Separator className="bg-rose-800 dark:bg-neutral-100 my-4" />
      </div>

      <div className="flex gap-4 justify-between">
        <GameParticipantsList game={game} />
      
        <GameBoard game={game} handlers={handlers}  />
      </div>

    </div>
  );
};

export default GameScreen;
