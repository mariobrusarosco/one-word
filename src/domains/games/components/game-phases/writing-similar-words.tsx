import { Button } from "@/domains/ui-system/components/ui/button";
import { GamePhaseStatuses, IGameState } from "../../typing/game";
import { useQueryClient } from "@tanstack/react-query";
import { IGameHandlers } from "../../typing/game";
import { useState } from "react";

export const WritingSimilarWords = ({ game, handlers }: { game: IGameState, handlers: IGameHandlers }) => {
  const queryClient = useQueryClient();
  const [word, setWord] = useState("");
  const {
    rotation: { isMemberLeadPlayer, leadPlayer },
    participants,
    similarWords = []
  } = game;

  // Get current user's username
  const currentUsername = participants.find(p => 
    p.username !== leadPlayer && !similarWords.some(w => w.userName === p.username)
  )?.username;

  // Exclude lead player from participants who need to submit
  const nonLeadPlayers = participants.filter(p => p.username !== leadPlayer);


  const handleSubmitWord = () => {
    if (!word.trim() || !currentUsername) return;

    const updatedGame = {
      ...game,
      similarWords: [...similarWords, {
        userId: currentUsername,
        userName: currentUsername,
        value: word.trim()
      }]
    };

    if (similarWords.length + 1 === nonLeadPlayers.length) {
      updatedGame.activePhase = GamePhaseStatuses.REMOVING_SIMILAR_WORDS;
    }

    queryClient.setQueryData(['gameState'], updatedGame);
    handlers.updateGameOnSocket(updatedGame);
    setWord("");
  };

  // Player submission status display
  const SubmissionStatus = () => (
    <div className="flex flex-col gap-2 mb-4">
      <p className="text-lg text-white mb-2">Submission Status:</p>
      <div className="grid grid-cols-1 gap-2">
        {nonLeadPlayers.map(player => {
          const hasSubmitted = similarWords.some(w => w.userName === player.username);
          return (
            <div 
              key={player.userId} 
              className={`flex items-center gap-2 p-2 rounded ${
                hasSubmitted ? 'bg-green-900/50' : 'bg-neutral-800'
              }`}
            >
              <span className="text-white">{player.username}</span>
              {hasSubmitted ? (
                <span className="text-green-400 text-sm">is done!</span>
              ) : (
                <span className="text-yellow-400 text-sm">needs to submit a word</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  if (isMemberLeadPlayer) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-4">
          <p className="text-lg text-white">Your word:</p>
          <span className="text-xl font-bold text-rose-400">{game.chosenWord}</span>
        </div>
        <SubmissionStatus />
      </div>
    );
  }

  const hasSubmitted = similarWords.some(w => w.userId === currentUsername);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-4">
        <p className="text-lg text-white">{leadPlayer}'s word:</p>
        <span className="text-xl font-bold text-rose-400">{game.chosenWord}</span>
      </div>

      <SubmissionStatus />

      {!hasSubmitted && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-lg text-white">Write a similar word:</p>
            <input 
              type="text" 
              value={word}
              onChange={(e) => setWord(e.target.value)}
              className="p-2 rounded bg-neutral-700 text-white"
              placeholder="Enter your word..."
            />
          </div>

          <Button 
            onClick={handleSubmitWord}
            disabled={!word.trim()}
          >
            Submit Word
          </Button>
        </div>
      )}
    </div>
  );
};
