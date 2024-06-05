import { getInitials } from "@/domains/utils-and-helpers/string-manipulation";
import { tablesLoader } from "@/domains/tables/api/loader";
import { CreateTable } from "@/domains/tables/components/modals/create-table";
import { Table } from "@/domains/tables/typing/interfaces";
import { Button } from "@/domains/ui-system/components/ui/button";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const AppSidebar = () => {
  const { data } = useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: tablesLoader,
    enabled: true,
  });

  return (
    <div
      data-ui="app-sidebar"
      className="app-sidebar  bg-white-100 h-full flex items-center gap-4 dark:bg-teal-800 desktop:flex-col desktop:py-5 overflow-hidden shadow-main-right z-[3]"
    >
      <section className="new-table-creation flex justify-center  dark:border-b-white-100 ">
        <CreateTable />
      </section>

      <Separator className="my-4 dark:bg-white-100 w-0 h-10 desktop:w-full desktop:h-[2px]" />

      <ul className="flex items-center gap-x-4 desktop:flex-1 desktop:flex-col desktop:gap-y-4 overflow-auto desktop:px-5 desktop:w-full">
        {data?.map((table) => (
          <li key={table?.name}>
            <NavLink to={`/tables/${table?.id}`}>
              <Button roundness="full" size="large">
                {getInitials(table?.name)}
              </Button>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { AppSidebar };
