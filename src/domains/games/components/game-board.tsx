import { IGame } from "@/domains/games/typing/game";
import { NotStarted } from "@/domains/games/components/game-phases/not-started";
import { GamePhaseStatuses } from "@/domains/games/typing/phase";
import { ChoosingTheWord } from "./game-phases/choosing-word";

const renderPhaseContent = (game: IGame) => {
  const { activePhase } = game;

  const phaseComponents = {
    [GamePhaseStatuses.NOT_STARTED]: NotStarted,
    [GamePhaseStatuses.CHOOSING_THE_WORD]: ChoosingTheWord,
    // [GamePhaseStatuses.GUESSING_THE_WORD]: GuessingTheWord,
    // [GamePhaseStatuses.WRITING_SIMILAR_WORDS]: WritingSimilarWords,
    // [GamePhaseStatuses.REMOVING_SIMILAR_WORDS]: RemovingSimilarWords,
    // [GamePhaseStatuses.RESULTS]: Results,
  };

  const Component = phaseComponents[activePhase];
  return Component ? <Component game={game} /> : null;
};

export const GameBoard = ({ game }: { game: IGame }) => {
  return (
    <div data-ui="game-board" className="w-full">
      {renderPhaseContent(game)}
    </div>
  );
};
