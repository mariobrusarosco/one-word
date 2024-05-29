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
// import { NavLink } from "react-router-dom";

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
    <ScrollArea className="row-start-2 row-end-2">
      <div className="flex gap-4 item-center p-4 w-full">
        <section className="new-table-creation flex justify-center  dark:border-b-white-100">
          {mutation.isPending && <div>creating table...</div>}
          <Button
            variant="primary"
            roundness="full"
            size="large"
            disabled={mutation.isPending}
            onClick={handleCreateTable}
          >
            <Icon name="plus" className="stroke-white-100 flex w-8" />
          </Button>
        </section>

        <Separator className="my-8" orientation="vertical" />

        <ul className="flex gap-x-4 items-center">
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
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export { AppSidebar };
