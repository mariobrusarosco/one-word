import { useQueryClient } from "@tanstack/react-query";
import {
  GamePhaseStatus,
  IGameHandlers,
  IGameState
} from "../typing";
import { Button } from "@/domains/ui-system/components/ui/button";

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

const NotStarted = ({ game, handlers }: { game: IGameState, handlers: IGameHandlers }) => {
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

const ChoosingTheWord = ({ game, handlers }: { game: IGameState, handlers: IGameHandlers }) => {
  const queryClient = useQueryClient();
  
  const handleChooseWord = (word: string) => {
    queryClient.setQueryData(['gameState'], (oldData: IGameState) => ({
      ...oldData,
      chosenWord: word,
      activePhase: GamePhaseStatus.WRITING_SIMILAR_WORDS
    }));

    handlers.updateGameOnSocket({
      ...game,
      chosenWord: word,
      activePhase: GamePhaseStatus.WRITING_SIMILAR_WORDS
    });
  };

  const {
    rotation: { leadPlayer, isMemberLeadPlayer },
  } = game;
  return (
    <div>
      {isMemberLeadPlayer ? (
        <div>
          <p className="text-lg text-white">1 - person</p>
          <p className="text-lg text-white">2 - thing</p>
          <p className="text-lg text-white">3 - verb</p>
          <p className="text-lg text-white">4 - place</p>

          <Button onClick={() => handleChooseWord("test word")}>
            Start Round
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


const WritingSimilarWords = ({ game }: { game: IGameState }) => {
  const queryClient = useQueryClient();

  const handleSubmitWord = (word: string) => {
    queryClient.setQueryData(['gameState'], (oldData: IGameState) => ({
      ...oldData,
      similarWords: [...(oldData.similarWords || []), {
        userId: "1",
        userName: "test",
        value: word
      }],
      activePhase: GamePhaseStatus.GUESSING_THE_WORD
    }));
  };

  const {
    rotation: { isMemberLeadPlayer, leadPlayer },
  } = game;

  // console.log(handlers);
  // const handleSubmit = () => {
  //   const similarWord: ISimilarWord = {
  //     userId: "1", // Get from member context
  //     userName: "test",
  //     value: "test"
  //   };
  //   addSimilarWord(similarWord);
  // };

  return (
    <div>
      {!isMemberLeadPlayer ? (
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <p className="text-lg text-white">{leadPlayer}</p>
            {/* <p className="text-lg text-white">has chosen {chosenWord}</p> */}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-lg text-white">It's your time to write a word</p>
            <input type="text" />
          </div>

          <Button onClick={() => handleSubmitWord("test")}>Done</Button>
        </div>
      ) : (
        <p className="text-lg text-white">Players are guessing the word...</p>
      )}
    </div>
  );
};

const GuessingTheWord = ({ game }: { game: IGameState }) => {
  const queryClient = useQueryClient();

  const handleGuessWord = (word: string) => {
    queryClient.setQueryData(['gameState'], (oldData: IGameState) => ({
      ...oldData,
      guessedWords: [...(oldData.guessedWords || []), word],
      activePhase: GamePhaseStatus.REMOVING_SIMILAR_WORDS
    }));
  };

  const {
    rotation: { isMemberLeadPlayer, leadPlayer },
  } = game;
    
  return (
    <div>
      {!isMemberLeadPlayer ? (
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <p className="text-lg text-white">
              {leadPlayer} 
            </p>
            <p className="text-lg text-white">
              {/* has chosen {chosenWord} */}
            </p>
            {/* <p className="text-lg text-white">{chosenWord}</p> */}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-lg text-white">It's your time to write a word</p>
            <input type="text" />
          </div>

          <Button onClick={() => handleGuessWord("test")}>Done</Button>
        </div>
      ) : (
        <p className="text-lg text-white">Players are guessing the word...</p>
      )}
    </div>
  );
};

const RemovingSimilarWords = ({ game }: { game: IGameState }) => {
  const queryClient = useQueryClient();

  const handleRemoveWord = (wordToRemove: string) => {
    queryClient.setQueryData(['gameState'], (oldData: IGameState) => ({
      ...oldData,
      similarWords: oldData.similarWords?.filter(w => w.value !== wordToRemove),
      activePhase: GamePhaseStatus.RESULTS
    }));
  };

  console.log(game );
  return (
    <p className="text-lg text-white">Remove duplicate or invalid words...</p>
  );
};

const Results = ({ game }: { game: IGameState }) => {
  console.log(game )
  return <p className="text-lg text-white">Game results</p>;
};