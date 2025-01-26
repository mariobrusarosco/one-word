import { IGameState } from "../typing";

export const GamePhase = ({ game }: { game: IGameState }) => {
  const {  activePhase, rotation } = game;

  console.log('[GamePhase]', game);
  return (
    <div className="flex justify-between items-center font-sans ">
      <p className="text-rose-800 font-josefin dark:text-neutral-100 text-6xl font-regular ">
        Game
      </p>
        <p className="text-rose-800 dark:text-neutral-100 text-4xl font-josefin font-regular mr-8">
            turn of {rotation.leadPlayer}
        </p>
        <p className="table-name font-sans text-4xl text-violet-800 dark:text-neutral-100 desktop:text-4xl">  
            {activePhase}
        </p>
    </div>
  )
} 