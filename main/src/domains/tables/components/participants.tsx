import { getInitials } from "@/domains/utils-and-helpers/string-manipulation";
import { ITablePartipant } from "../typing/interfaces";

const Participant = ({ participant }: { participant: ITablePartipant }) => {
  if (!participant) return null;

  return (
    <div className="participant flex items-center gap-2 px-3 py-3 cursor-pointer rounded-md hover:bg-rose-800 group transition-colors">
      <div className="participant-avatar bg-rose-800 w-7 h-7 rounded-full flex justify-center items-center group-hover:bg-violet-800">
        <span className="text-neutral-100 text-xs">
          {getInitials(participant.username)}
        </span>
      </div>
      <span className="text-rose-800 dark:text-neutral-100 text-sm group-hover:text-neutral-100">
        {participant.username}
      </span>
    </div>
  );
};

export const ParticpantsList = ({
  tableParticipants,
}: {
  tableParticipants: ITablePartipant[];
}) => {
  if (tableParticipants?.length === 0) return null;

  return (
    <div className="table-participants overflow-hidden pb-14">
      <p className="uppercase text-sm font-light text-rose-800 dark:text-neutral-100 p-4">
        participants
      </p>

      <ul className="flex flex-col overflow-auto scrollable px-4 h-0 min-h-[100%] ">
        {tableParticipants.map((participant) => (
          <Participant participant={participant} key={participant.username} />
        ))}
      </ul>
    </div>
  );
};
