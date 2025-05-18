import { IGameState } from "../../typing/game";

export const Results = ({ game }: { game: IGameState }) => {
  console.log(game )
  return <p className="text-lg text-white">Game results</p>;
};