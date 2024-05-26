import { useQuery } from "@tanstack/react-query";
import { loaderTables } from "../api/loader";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { Table } from "../typing/interfaces";
import { Button } from "@/domains/ui-system/components/ui/button";
import { tab } from "node_modules/@testing-library/user-event/dist/types/convenience";

export const TablesScreen = () => {
  const { tableId } = useParams<{
    tableId: string;
  }>();

  const { data, error, isFetching } = useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: loaderTables,
  });

  if (error) {
    console.error({ error });
    return <div>{error.message}</div>;
  }

  if (isFetching) {
    return <div>loading tables...</div>;
  }

  return (
    <div className="">
      <h2 className="font-serif text-teal-800 dark:text-white-100 text-4xl mb-4">
        Tables
      </h2>

      <aside>
        {/* <ul className="flex flex-wrap gap-6">
          {data[0].channels?.map((channel) => (
            <li key={channel?.name} className="font-sans">
              <Button variant={"primary"}>
                <NavLink to={`${data[0].id}/channel/${channel?.id}`}>
                  {channel?.name}
                </NavLink>
              </Button>
            </li>
          ))}
        </ul> */}
      </aside>

      <Outlet />
    </div>
  );
};
