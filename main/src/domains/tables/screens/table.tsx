import { useQuery } from "@tanstack/react-query";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { loaderTables } from "../api/loader";
import { Table } from "../typing/interfaces";
import { Button } from "@/domains/ui-system/components/ui/button";

export const TableScreen = () => {
  const { tableId } = useParams<{ tableId: string }>();
  const { data, error, isFetching } = useQuery<Table[]>({
    queryKey: ["tables"],
    queryFn: loaderTables,
    enabled: false,
  });

  if (error) {
    console.error({ error });
    return <div>{error.message}</div>;
  }

  if (isFetching) {
    return <div>loading tables...</div>;
  }

  const activeTable = data?.find((table) => table.id === tableId);

  console.log({ tableId });

  return (
    <>
      <h3>Table: {tableId}</h3>

      <section className="list-of-channels">
        <h4>Channels</h4>
        <ul className="flex flex-wrap gap-6">
          {activeTable?.channels?.map((channel) => (
            <li key={channel?.name} className="font-sans">
              <Button variant={"primary"}>
                <NavLink to={`/tables/${tableId}/channels/${channel?.id}`}>
                  {channel?.name}
                </NavLink>
              </Button>
            </li>
          ))}
        </ul>
      </section>

      <NavLink to="game">Start Game</NavLink>

      <NavLink to="rooms">Rooms</NavLink>

      <Outlet />
    </>
  );
};
