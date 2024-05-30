import { Button } from "@/domains/ui-system/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { loaderTables } from "../api/loader";
import { Table } from "../typing/interfaces";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { Separator } from "@/domains/ui-system/components/ui/separator";

const TableSidebar = () => {
  const { data } = useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: loaderTables,
    enabled: false,
  });

  return (
    <div className="table-sidebar bg-white-100 dark:bg-teal-800 shadow-main-right z-[2] h-full overflow-hidden flex flex-col">
      <div className="table-name shadow-main-bottom px-3 py-4 flex justify-between">
        <p className="text-sm font-light text-pink-500">
          lorem ispum lorem ispume
        </p>
        <Icon name="chevron-down" className="stroke-pink-500" />
      </div>

      <div className="table-search shadow-main-bottom px-3 py-4">
        search here ..
      </div>

      <div className="table-active-game px-3 py-4">
        <div className="flex items-center gap-3">
          <Icon name="device-gamepad" className="stroke-pink-500" />
          <span className="uppercase text-lg text-pink-500">game</span>
        </div>
      </div>

      <div className="my-3">
        <Separator />
      </div>

      <ChannelList />

      <div className="my-3">
        <Separator />
      </div>

      <ParticpantsList />
    </div>
  );
};

export { TableSidebar };

const Participant = () => {
  return (
    <div className="participant flex items-center gap-2">
      <div className="participant-avatar bg-pink-500 w-8 h-8 rounded-full"></div>
      <span className="text-pink-500">Mario Brusarosco</span>
    </div>
  );
};

const ParticpantsList = () => {
  return (
    <div className="table-participants px-3 pt-4 pb-10 overflow-hidden max-h-[500px]">
      <div className="flex justify-between mb-3">
        <p className="uppercase  font-light text-pink-500 pb-4">participants</p>
        <Icon name="plus" className="stroke-pink-500" />
      </div>

      <ul className="grid gap-y-6 overflow-auto h-full pb-10">
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

const ChannelList = () => {
  return (
    <div className="table-channels px-3 pt-4 pb-10 overflow-hidden">
      <div className="flex justify-between">
        <p className="uppercase  font-light text-pink-500 pb-4">
          text channels
        </p>
        <Icon name="plus" className="stroke-pink-500" />
      </div>
      <ul className="grid gap-y-6 overflow-auto h-full">
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
        <li className="flex items-center gap-x-2">
          <Icon name="hashtag" className="stroke-pink-500" size="extra-small" />
          <span className="text-pink-500">general</span>
        </li>
      </ul>
    </div>
  );
};
