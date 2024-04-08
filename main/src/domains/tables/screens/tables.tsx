import { useQuery } from "@tanstack/react-query";
import { loaderTables } from "../api/loader";
import { NavLink, Outlet } from "react-router-dom";
import { Table } from "../typing/interfaces";

export const TablesScreen = () => {
  const { data, error, isFetching } = useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: loaderTables,
  });

  if (error) {
    console.log({ error });
    return <div>{error.message}</div>;
  }

  if (isFetching) {
    return <div>loading...</div>;
  }

  return (
    <div className="bg-slate-500 tablet:bg-red-900 desktop:bg-cyan-800">
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
        <Outlet />
      </div>
    </div>
  );
};
