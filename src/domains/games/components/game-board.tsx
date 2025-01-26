import { IGameHandlers } from "../hooks/use-game";
import {
  GamePhaseStatus,
  IGameState
} from "../typing";
import { Button } from "@/domains/ui-system/components/ui/button";


export const GameBoard = ({ gameState, handlers }: { gameState: IGameState, handlers: IGameHandlers}) => {
  return <div className="game-board">{renderPhaseContent(gameState, handlers)}</div>;
};

const renderPhaseContent = (gameState: IGameState, handlers: IGameHandlers) => {
  const { activePhase } = gameState;

  const phaseComponents = {
    [GamePhaseStatus.NOT_STARTED]: NotStarted,
    [GamePhaseStatus.CHOOSING_THE_WORD]: ChoosingTheWord,
    [GamePhaseStatus.GUESSING_THE_WORD]: GuessingTheWord,
    [GamePhaseStatus.WRITING_SIMILAR_WORDS]: WritingSimilarWords,
    [GamePhaseStatus.REMOVING_SIMILAR_WORDS]: RemovingSimilarWords,
    [GamePhaseStatus.RESULTS]: Results,
  };

  const Component = phaseComponents[activePhase];
  return Component ? <Component gameState={gameState} handlers={handlers} /> : null;
};

const NotStarted = ({ gameState, handlers }: { gameState: IGameState, handlers: IGameHandlers }) => {
  return (
    <div className="flex flex-col gap-2">
      {gameState.rotation.isMemberLeadPlayer ? (
        <div className="flex justify-center flex-col gap-2">
          <span className="text-sm text-gray-500">
            When you´re ready, go ahead and...
          </span>
          <Button
            onClick={() => {
              console.log('[GAME STATE]', gameState);
              // handlers.updateGamePhase(GamePhaseStatus.CHOOSING_THE_WORD);
            }}
          >
            Start game
          </Button>
        </div>
      ) : (
        <p className="text-lg text-white">Waiting for the game to start...</p>
      )}
    </div>
  );
};

const ChoosingTheWord = ({ gameState, handlers }: { gameState: IGameState, handlers: IGameHandlers }) => {
  console.log(gameState, handlers )
  const {
    rotation: { leadPlayer, isMemberLeadPlayer },
  } = gameState;
  return (
    <div>
      {isMemberLeadPlayer ? (
        <div>
          <p className="text-lg text-white">1 - person</p>
          <p className="text-lg text-white">2 - thing</p>
          <p className="text-lg text-white">3 - verb</p>
          <p className="text-lg text-white">4 - place</p>

          <Button
            onClick={() => {
              // chooseWord("test word");
              // updateGamePhase(GamePhaseStatus.WRITING_SIMILAR_WORDS);
            }}
          >
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


const WritingSimilarWords = ({ gameState, handlers }: { gameState: IGameState, handlers: IGameHandlers }) => {
  const {
    rotation: { isMemberLeadPlayer, leadPlayer },
  } = gameState;

  console.log(handlers);
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

          {/* <Button onClick={handleSubmit}>Done</Button> */}
        </div>
      ) : (
        <p className="text-lg text-white">Players are guessing the word...</p>
      )}
    </div>
  );
};

const GuessingTheWord = ({ gameState, handlers }: { gameState: IGameState, handlers: IGameHandlers }) => {
  const {
    rotation: { isMemberLeadPlayer, leadPlayer },
  } = gameState;
    
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

          <Button
            onClick={() => {
              const updatedGame = {
                ...gameState,
                activePhase: GamePhaseStatus.REMOVING_SIMILAR_WORDS
              }

              handlers.updateGame(updatedGame);
            }}
          >
            Done
          </Button>
        </div>
      ) : (
        <p className="text-lg text-white">Players are guessing the word...</p>
      )}
    </div>
  );
};

const RemovingSimilarWords = ({ gameState, handlers }: { gameState: IGameState, handlers: IGameHandlers }) => {
  console.log(gameState, handlers );
  return (
    <p className="text-lg text-white">Remove duplicate or invalid words...</p>
  );
};

const Results = ({ gameState, handlers }: { gameState: IGameState, handlers: IGameHandlers }) => {
  console.log(gameState, handlers )
  return <p className="text-lg text-white">Game results</p>;
};
