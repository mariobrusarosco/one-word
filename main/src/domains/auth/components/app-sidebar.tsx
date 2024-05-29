import { getInitials } from "@/domains/shared/utils/string-manipulation";
import { loaderTables } from "@/domains/tables/api/loader";
import { createTable } from "@/domains/tables/api/mutations";
import { Table } from "@/domains/tables/typing/interfaces";
import { Button } from "@/domains/ui-system/components/ui/button";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import {
  ScrollArea,
  ScrollBar,
} from "@/domains/ui-system/components/ui/scroll-area";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { useMutation, useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const AppSidebar = () => {
  const { data, error, isFetching } = useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: loaderTables,
    enabled: true,
  });

  const mutation = useMutation({
    mutationFn: createTable,
    // onMutate: async () => {
    //   return {
    //     createdAt: "2024-05-21T13:55:44.161Z",
    //     id: "opt-invite-code",
    //     inviteCode: "opt-invite-code",
    //     name: "optmiistic-panini-1",
    //   };
    // },
  });

  const handleCreateTable = async () => {
    await mutation.mutate(Math.random().toString(36).substring(7));
  };

  console.log("[data]", data);

  return (
    <ScrollArea className="desktop:row-start-1 desktop:row-end-3 shadow-main-right">
      <div className="bg-white-100 flex flex-col gap-4 item-center p-4 dark:bg-teal-800">
        <section className="new-table-creation flex justify-center  dark:border-b-white-100 ">
          {mutation.isPending && <div>creating table...</div>}
          <Button
            variant="secondary"
            roundness="full"
            size="large"
            disabled={mutation.isPending}
            onClick={handleCreateTable}
          >
            <Icon
              name="plus"
              className="stroke-white-100 flex w-8 dark:stroke-teal-800"
            />
          </Button>
        </section>

        <Separator className="my-4 dark:bg-white-100" />

        <ul className="flex gap-x-4 items-center flex-1 desktop:flex-col desktop:gap-y-4">
          {data?.map((table) => (
            <li key={table?.name}>
              <Button roundness="full" size="large">
                <NavLink to={`/tables/${table?.id}`}>
                  {getInitials(table?.name)}
                </NavLink>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </ScrollArea>
  );
};

export { AppSidebar };
