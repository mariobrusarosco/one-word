import { useQuery } from "@tanstack/react-query";
import { loaderTables } from "../api/loader";
import { NavLink, Outlet } from "react-router-dom";
import { useUser } from "../../auth/components/authenticated-layout";

export const TablesScreen = () => {
  const { data, error, isFetching } = useQuery({
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
    <>
      <h2>Available tables</h2>
      <div style={{ display: "flex", gap: "100px", flexWrap: "wrap" }}>
        <aside>
          <ul>
            {data?.map((table: any) => (
              <li key={table?.name}>
                <NavLink to={`/tables/${table?.id}`}>{table?.name}</NavLink>
              </li>
            ))}
          </ul>
        </aside>
        <Outlet />
      </div>
    </>
  );
};
