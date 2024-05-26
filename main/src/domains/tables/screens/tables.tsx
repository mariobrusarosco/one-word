import { useQuery } from "@tanstack/react-query";
import { loaderTables } from "../api/loader";
import { NavLink, Outlet } from "react-router-dom";
import { Table } from "../typing/interfaces";
import { Button } from "@/domains/ui-system/components/ui/button";

export const TablesScreen = () => {
  const { data, error, isFetching } = useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: loaderTables,
  });

  if (error) {
    console.error({ error });
    return <div>{error.message}</div>;
  }

  if (isFetching) {
    return <div>loading...</div>;
  }

  return (
    <div className="">
      <h2 className="font-serif text-teal-800 dark:text-white-100 text-4xl mb-4">
        Available tables
      </h2>

      <aside>
        <ul className="flex flex-wrap gap-6">
          {data?.map((table) => (
            <li key={table?.name} className="font-sans">
              <Button variant={"primary"}>
                <NavLink to={`/tables/${table?.id}`}>{table?.name}</NavLink>
              </Button>
            </li>
          ))}
        </ul>
      </aside>

      <Outlet />
    </div>
  );
};
