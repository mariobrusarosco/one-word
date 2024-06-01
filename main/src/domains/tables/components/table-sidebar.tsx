import { useQuery } from "@tanstack/react-query";
import { loaderTables } from "../api/loader";
import { Table } from "../typing/interfaces";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { ParticpantsList } from "./participants";
import { ActiveGame } from "@/domains/games/components/active-game";
import { TableSearch } from "@/domains/tables/components/table-search";
import { TableChannels } from "./table-channels";

const TableSidebar = () => {
  const { data } = useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: loaderTables,
    enabled: true,
  });

  console.log("[data]", data);

  return (
    <div className="table-sidebar bg-white-100 dark:bg-teal-800 shadow-main-right z-[2] h-full overflow-hidden flex flex-col">
      <div className="table-name shadow-main-bottom px-4 py-4 flex justify-between">
        <p className="text-sm font-light text-pink-500">
          lorem ispum lorem ispume
        </p>
        <Icon name="chevron-down" className="stroke-pink-500" />
      </div>

      <TableSearch />

      <ActiveGame />

      <div className="my-3">
        <Separator />
      </div>

      <ParticpantsList />

      <div className="my-3">
        <Separator />
      </div>

      <TableChannels />
    </div>
  );
};

export { TableSidebar };
