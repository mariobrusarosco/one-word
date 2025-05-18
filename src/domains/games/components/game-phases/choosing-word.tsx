import { IGame } from "@/domains/games/typing/game";
import { Button } from "@/domains/ui-system/components/ui/button";
import { GamePhaseStatuses } from "@/domains/games/typing/phase";

export const ChoosingTheWord = ({ game }: { game: IGame }) => {
  const {
    rotation: { leadPlayer, isMemberLeadPlayer },
    actions,
  } = game;

  const handleChooseWord = () => {
    actions.moveToNextPhase(GamePhaseStatuses.WRITING_SIMILAR_WORDS);
  };

  return (
    <div className="flex flex-col gap-4">
      {isMemberLeadPlayer ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-lg text-white">
              Choose a word from these categories:
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Person</li>
              <li>Thing</li>
              <li>Verb</li>
              <li>Place</li>
            </ul>
          </div>

          <Button onClick={handleChooseWord}>Next Phase</Button>
        </div>
      ) : (
        <div>
          <p className="text-lg text-white">
            {leadPlayer?.username} is choosing a word...
          </p>
        </div>
      )}
    </div>
  );
};
