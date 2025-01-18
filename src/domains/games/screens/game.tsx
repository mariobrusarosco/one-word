import { Separator } from "@/domains/ui-system/components/ui/separator";
import { GameParticipantsList } from "../components/game-participants";

const GameScreen = () => {
  return (
    <div data-ui="game-screen">
      <div className="heading font-extralight">
        <div className="flex justify-between items-center font-sans ">
          <p className="text-rose-800 font-josefin dark:text-neutral-100 text-6xl font-regular ">
            Game
          </p>
          <p className="table-name font-sans text-3xl text-violet-800 dark:text-neutral-100 desktop:text-5xl">
            Not Started
          </p>
        </div>

        <Separator className="bg-rose-800 dark:bg-neutral-100 my-4" />
      </div>

      <GameParticipantsList
        gameParticipants={Array.from({ length: 8 }, (_, index) => ({
          username: `Player ${index + 1}`,
          userId: `user-${index + 1}`,
        }))}
      />
    </div>
  );
};

export default GameScreen;
