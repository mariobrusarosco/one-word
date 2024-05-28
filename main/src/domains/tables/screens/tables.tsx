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
    <>
      <Outlet />
    </>
  );
};
