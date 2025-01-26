import { IGameHandlers, IGameState } from "../../typing";

export const RemovingSimilarWords = ({ game, handlers }: { game: IGameState, handlers: IGameHandlers }) => {

    console.log({ game, handlers })

    return (
      <p className="text-lg text-white">Remove duplicate or invalid words...</p>
    );
  };
  