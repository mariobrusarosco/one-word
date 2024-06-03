import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { getInitials } from "@/domains/utils-and-helpers/string-manipulation";
import { useTablesContext } from "../provider";
import { IPartipant } from "../hooks/use-tables";

const Participant = ({ participant }: { participant: IPartipant }) => {
  return (
    <div className="participant flex items-center gap-2 px-3 py-3  cursor-pointer rounded-md hover:bg-pink-500 group">
      <div className="participant-avatar bg-pink-500 w-7 h-7 rounded-full flex justify-center items-center group-hover:bg-teal-800">
        <span className="text-white-100 text-xs">
          {getInitials(participant.username)}
        </span>
      </div>
      <span className="text-pink-500 text-sm group-hover:text-white-100">
        {participant.username}
      </span>
    </div>
  );
};

export const ParticpantsList = () => {
  const tablesContext = useTablesContext();

  return (
    <div className="table-participants px-4 pt-4 pb-10 overflow-hidden max-h-[500px]">
      <div className="flex justify-between mb-3">
        <p className="uppercase  font-light text-pink-500 pb-4">participants</p>
        <Icon name="plus" className="stroke-pink-500" />
      </div>

      <ul className="flex flex-col overflow-auto h-full pb-10">
        {tablesContext.tables.tableParticipants.map((participant) => (
          <Participant participant={participant} key={participant.userId} />
        ))}
      </ul>
    </div>
  );
};
