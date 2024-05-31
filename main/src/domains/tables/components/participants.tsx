import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { getInitials } from "@/domains/utils-and-helpers/string-manipulation";

const Participant = () => {
  return (
    <div className="participant flex items-center gap-2 px-3 py-3 cursor-pointer rounded-md hover:bg-pink-500 group">
      <div className="participant-avatar bg-pink-500 w-7 h-7 rounded-full flex justify-center items-center group-hover:bg-teal-800">
        <span className="text-white-100 text-xs">
          {getInitials("Mario Brusarosco de Almeida")}
        </span>
      </div>
      <span className="text-pink-500 text-sm group-hover:text-white-100">
        Mario Brusarosco
      </span>
    </div>
  );
};

export const ParticpantsList = () => {
  return (
    <div className="table-participants px-4 pt-4 pb-10 overflow-hidden max-h-[500px]">
      <div className="flex justify-between mb-3">
        <p className="uppercase  font-light text-pink-500 pb-4">participants</p>
        <Icon name="plus" className="stroke-pink-500" />
      </div>

      <ul className="grid overflow-auto h-full pb-10">
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
      </ul>
    </div>
  );
};
