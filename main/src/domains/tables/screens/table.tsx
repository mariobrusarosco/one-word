import { useQuery } from "@tanstack/react-query";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { loaderTables } from "../api/loader";
import { ITable } from "../typing/interfaces";
import { Button } from "@/domains/ui-system/components/ui/button";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { useEffect, useState } from "react";
import { useWebSocket } from "@/domains/socket/providers/web-socket";
import { SocketEvents } from "@/domains/socket/typing/enums";

export const TableScreen = () => {
  const { tableId } = useParams<{ tableId: string }>();
  const { dispatch, state } = useWebSocket();
  const [users, setUsers] = useState<string[]>([]);

  const { data, error, isFetching } = useQuery<ITable[]>({
    queryKey: ["tables"],
    queryFn: loaderTables,
    enabled: false,
  });

  useEffect(() => {
    // console.log("[SOCKET] - state has changed!", state?.socketInstance);

    if (state?.socketInstance) {
      // console.log("[SOCKET] - state has changed!!!!", state?.socketInstance);
      state?.socketInstance?.on("update_list_of_users", (data) => {
        setUsers(data.map((user: { username: string }) => user.username));
        console.log("[SOCKET] - NEW USERS to socket", { data, state });
      });
    }
  }, [state?.socketInstance]);

  useEffect(() => {
    if (!tableId) return;

    console.log("[SOCKET] - MOUNT TABLE");
    const currentTableId = tableId;
    const lastActiveTableId = state?.lastActiveTableId;

    if (lastActiveTableId) {
      console.log("[SOCKET] - MOUNT TABLE", "leaving the last table");

      dispatch({
        type: SocketEvents.LEAVE_TABLE,
        payload: {
          tableId: lastActiveTableId,
          username: localStorage?.getItem("username"),
        },
      });
    }

    console.log(
      "[SOCKET] - MOUNT TABLE",
      "joining a new table",
      currentTableId
    );

    dispatch({
      type: SocketEvents.JOIN_TABLE,
      payload: {
        tableId: currentTableId,
        username: localStorage?.getItem("username"),
      },
    });
  }, [tableId]);

  if (error) {
    console.error({ error });
    return <div>{error.message}</div>;
  }

  if (isFetching) {
    return <div>loading tables...</div>;
  }
  if (!data) return null;

  const activeTable = data.find((table) => table.id === tableId) as ITable;

  const handleNewGame = () => {
    dispatch({
      type: SocketEvents.CREATE_GAME,
      payload: state?.socketInstance,
    });
  };

  const handleLeaveTable = () => {
    dispatch({
      type: SocketEvents.LEAVE_TABLE,
      payload: state?.socketInstance,
    });
  };

  return (
    <div className="table w-full">
      <div className="heading flex justify-between items-center font-sans ">
        <p className="text-pink-500 dark:text-teal-800 text-5xl">Table</p>
        <p>{state?.socketInstance?.connected ? "connected" : "disconnedted"}</p>
        <p>last active table id: {state.lastActiveTableId}</p>
        <p className="table-name font-semibold uppercase text-2xl text-teal-800 dark:text-white-100 ">
          {activeTable.name}
        </p>
      </div>

      <Separator className="bg-teal-800 mt-3" />

      <div className="grid grid-cols-1">
        <section className="list-of-channels">
          <h4>Channels</h4>
          <ul className="flex flex-wrap gap-6">
            {activeTable?.channels?.map((channel) => (
              <li key={channel?.name} className="font-sans">
                <Button variant={"primary"}>
                  <NavLink to={`/tables/${tableId}/channel/${channel?.id}`}>
                    {channel?.name}
                  </NavLink>
                </Button>
              </li>
            ))}
          </ul>
        </section>

        <Separator className="bg-teal-800 mt-3" />

        <section className="table-board">
          <p>Connected Users</p>
          <ul>
            {users?.map((user) => (
              <li key={user}>{user}</li>
            ))}
          </ul>

          <Separator className="bg-teal-800 mt-3" />

          {/* <NavLink to="game">Start Game</NavLink>

          <NavLink to="rooms">Rooms</NavLink> */}
          <div className="flex gap-4">
            <Button variant="primary" size={"large"} onClick={handleNewGame}>
              create game
            </Button>
            <Button variant="primary" size={"large"} onClick={handleLeaveTable}>
              Leave table
            </Button>
          </div>

          <Outlet />
        </section>
      </div>
    </div>
  );
};
