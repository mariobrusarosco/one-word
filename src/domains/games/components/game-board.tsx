import {
  GamePhaseStatus,
  IGameHandlers,
  IGameState
} from "../typing";
import { ChoosingTheWord } from "./game-phases/choosing-word";
import { NotStarted } from "./game-phases/not-started";
import { GuessingTheWord } from "./game-phases/guessing-the-word";
import { WritingSimilarWords } from "./game-phases/writing-similar-words";
import { Results } from "./game-phases/results";
import { RemovingSimilarWords } from "./game-phases/removing-similars";

export const GameBoard = ({ game, handlers }: { game: IGameState, handlers: IGameHandlers }) => {
  return <div className="game-board">{renderPhaseContent(game, handlers)}</div>;
};

const renderPhaseContent = (game: IGameState, handlers: IGameHandlers) => {
  const { activePhase } = game;

  const phaseComponents = {
    [GamePhaseStatus.NOT_STARTED]: NotStarted,
    [GamePhaseStatus.CHOOSING_THE_WORD]: ChoosingTheWord,
    [GamePhaseStatus.GUESSING_THE_WORD]: GuessingTheWord,
    [GamePhaseStatus.WRITING_SIMILAR_WORDS]: WritingSimilarWords,
    [GamePhaseStatus.REMOVING_SIMILAR_WORDS]: RemovingSimilarWords,
    [GamePhaseStatus.RESULTS]: Results,
  };

  const Component = phaseComponents[activePhase];
  return Component ? <Component game={game} handlers={handlers} /> : null;
};


