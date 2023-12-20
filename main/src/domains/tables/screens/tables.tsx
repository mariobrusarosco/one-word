import { useQuery } from "@tanstack/react-query";
import { loaderTables } from "../api/loader";
import { Outlet } from "react-router-dom";
import { useUser } from "../../auth/components/authenticated-layout";

export const TablesScreen = () => {
  const user = useUser();
  console.log("tables:", user);

  const { data, error, isFetching } = useQuery({
    queryKey: ["tables"],
    queryFn: loaderTables,
  });

  if (error) {
    return <div>error</div>;
  }

  if (isFetching) {
    return <div>loading...</div>;
  }

  return (
    <>
      <h2>user: {user.name}</h2>
      <h2>tables</h2>
      <div style={{ display: "flex", gap: "100px" }}>
        <aside>
          <ul>
            {data?.map((table: any) => (
              <li key={table?.name}>{table?.name}</li>
            ))}
          </ul>
        </aside>

        <Outlet />
      </div>
    </>
  );
};
