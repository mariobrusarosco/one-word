import { IGame } from "@/domains/games/typing/game";

export const GamePhase = ({ game }: { game: IGame }) => {
  const { activePhase, rotation } = game;

  console.log("[DEBUG] [GamePhase]", rotation?.leadPlayer);

  return (
    <div
      data-ui="game-phase"
      className="flex justify-between items-center font-sans "
    >
      <p className="text-rose-800 font-josefin dark:text-neutral-100 text-6xl font-regular ">
        Game
      </p>
      <p className="text-rose-800 dark:text-neutral-100 text-4xl font-josefin font-regular mr-8">
        turn of {rotation?.leadPlayer?.username || "..."}
      </p>
      <p className="table-name font-sans text-4xl text-violet-800 dark:text-neutral-100 desktop:text-4xl">
        {activePhase}
      </p>
    </div>
  );
};
