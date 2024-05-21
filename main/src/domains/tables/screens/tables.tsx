import { useQuery } from "@tanstack/react-query";
import { loaderTables } from "../api/loader";
import { NavLink, Outlet } from "react-router-dom";
import { Table } from "../typing/interfaces";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/domains/ui-system/components/ui/popover";

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
    <div className="bg-primary tablet:bg-secondary desktop:bg-cyan-800">
      <h2 className="font-serif">Available tables</h2>
      <div style={{ display: "flex", gap: "100px", flexWrap: "wrap" }}>
        <aside>
          <ul>
            {data?.map((table) => (
              <li
                key={table?.name}
                className="font-sans only-m:text-cyan-200 only-t:bg-cyan-200"
              >
                <NavLink to={`/tables/${table?.id}`}>{table?.name}</NavLink>
              </li>
            ))}
          </ul>
        </aside>

        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>

        <Outlet />
      </div>
    </div>
  );
};
