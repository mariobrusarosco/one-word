import { Skeleton } from "@/domains/ui-system/components/ui/skeleton";
import { getInitials } from "@/domains/utils-and-helpers/string-manipulation";
import { IGamePartipant, IGameState } from "../typing/game";

export const GameParticipantsList = ({ game }: { game: IGameState }) => {
  // if (!game.participants || !game.rotation) {
  if (!game.participants) {
    return <GameParticipantsListLoading />;
  }

  const { participants, rotation } = game;

  // Remove the destructured leadPlayer and use rotation.leadPlayer directly
  // console.log('[GAME - GameParticipantsList]', rotation.leadPlayer);

  return (
    <div
      data-ui="game-participants"
      className="overflow-hidden flex flex-col gap-4 min-w-[250px] max-w-[320px]"
    >
      <p className=" text-3xl font-light text-rose-800 dark:text-neutral-100">
        Waiting Room
      </p>
      <ul className="flex flex-col overflow-auto scrollable min-h-[100%]">
        {participants.map((participant: IGamePartipant) => (
          <GameParticipant
            participant={participant}
            key={participant.username}
            leadPlayer={"test"}
          />
        ))}
      </ul>
    </div>
  );
};

export const GameParticipantsListLoading = () => {
  return (
    <div className="table-participants overflow-hidden pb-14">
      <p className="uppercase text-sm font-light text-rose-800 dark:text-neutral-100 p-4">
        participants
      </p>
      <ul className="flex flex-col overflow-auto scrollable px-4 min-h-[100%] ">
        {Array.from({ length: 8 }).map((_, index) => (
          <GameParticipantLoading key={index} />
        ))}
      </ul>
    </div>
  );
};

const GameParticipantLoading = () => {
  return (
    <div
      data-ui="game-participant-skeleton"
      className="flex items-center gap-2 px-3 py-3 rounded-md transition-colors"
    >
      <Skeleton className="w-7 h-7 rounded-full" />

      <Skeleton className="flex-1 h-full rounded" />
    </div>
  );
};

const GameParticipant = ({
  participant,
  leadPlayer,
}: {
  participant: IGamePartipant;
  leadPlayer: string;
}) => {
  const isLeadPlayer = participant.username === leadPlayer;

  return (
    <div
      data-ui="game-participant"
      className="flex items-center gap-2 px-3 py-3 cursor-pointer rounded-md hover:bg-rose-800 group transition-colors"
    >
      <div className="participant-avatar bg-rose-800 w-7 h-7 rounded-full flex justify-center items-center group-hover:bg-violet-800">
        <span className="text-neutral-100 text-xs">
          {getInitials(participant.username)}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-rose-800 dark:text-neutral-100 text-sm group-hover:text-neutral-100">
          {participant.username}
        </span>
        {isLeadPlayer ? (
          <span className="text-neutral-100 text-xs">👑</span>
        ) : null}
      </div>
    </div>
  );
};
