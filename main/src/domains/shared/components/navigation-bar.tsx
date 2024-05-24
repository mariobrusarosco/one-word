import { loaderTables } from "@/domains/tables/api/loader";
import { createTable } from "@/domains/tables/api/mutations";
import { Table } from "@/domains/tables/typing/interfaces";
import { Button } from "@/domains/ui-system/components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

export const NavigationBar = () => {
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
    <nav className="hidden bg-white dark:bg-black/50 px-2 lg:block">
      <section className="new-table-creation flex justify-center p-4 border-b border-b-pink-500 dark:border-b-white-100">
        {mutation.isPending && <div>creating table...</div>}
        <Button
          variant="primary"
          roundness="full"
          size="medium"
          disabled={mutation.isPending}
          onClick={handleCreateTable}
        >
          +
        </Button>
      </section>

      <section className="available-tables mt-4">
        {isFetching && <div>loading tables...</div>}

        {error && <div>{error.message}</div>}

        {data && (
          <ul>
            {data.map((table) => (
              <li key={table?.name}>
                <NavLink to={`/tables/${table?.id}`}>{table?.name}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </section>

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
    </nav>
  );
};
