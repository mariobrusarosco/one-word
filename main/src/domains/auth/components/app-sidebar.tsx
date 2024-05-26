import { getInitials } from "@/domains/shared/utils/string-manipulation";
import { loaderTables } from "@/domains/tables/api/loader";
import { createTable } from "@/domains/tables/api/mutations";
import { Table } from "@/domains/tables/typing/interfaces";
import { Button } from "@/domains/ui-system/components/ui/button";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { ScrollArea } from "@/domains/ui-system/components/ui/scroll-area";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { useMutation, useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const AppSidebar = () => {
  const { data, error, isFetching } = useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: loaderTables,
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

  console.log("[mutation]", mutation);

  return (
    <nav className="hidden desktop:block desktop:row-span-3">
      <ScrollArea className="h-dvh p-8 bg-white-100 dark:bg-teal-800 shadow-2xl">
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

        <Separator className="my-8" />

        <section className="available-tables">
          {isFetching && <div>loading tables...</div>}

          {error && <div>{error.message}</div>}

          {data && (
            <ul className="flex flex-col gap-y-8 items-center mt-8">
              {data.map((table) => (
                <li key={table?.name}>
                  <Button roundness="full" size="large">
                    <NavLink to={`/tables/${table?.id}`}>
                      {getInitials(table?.name)}
                    </NavLink>
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </section>
        {/* <section className="list-of-tables border border-red-200">
        <ul className="flex flex-col gap-3 mt-4">
          <li className="font-serif">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/tables">Tables</NavLink>
          </li>
          <li>
            <NavLink to="/games">Games</NavLink>
          </li>
        </ul>
      </section> */}
      </ScrollArea>
    </nav>
  );
};

export { AppSidebar };
