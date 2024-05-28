import { useQuery } from "@tanstack/react-query";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { loaderTables } from "../api/loader";
import { ITable } from "../typing/interfaces";
import { Button } from "@/domains/ui-system/components/ui/button";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { useEffect, useState } from "react";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";

export const TableScreen = () => {
  const { tableId } = useParams<{ tableId: string }>();
  const { dispatch, state } = useWebSocket();
  const [tableParticipants, setTableParticipants] = useState<string[]>([]);

  const { data, error, isFetching } = useQuery<ITable[]>({
    queryKey: ["tables"],
    queryFn: loaderTables,
    enabled: false,
  });

  useEffect(() => {
    if (state?.connected) {
      // console.log("[SOCKET] - state has changed!!!!", state?.socketInstance);
      state?.socketInstance?.on("update_list_of_users", (data) => {
        console.log("[SOCKET] - NEW USERS to socket", { data });
        setTableParticipants(
          data.map((user: { username: string }) => user.username)
        );
      });
    }
  }, [state?.connected]);

  // Watch for changes on 1) Socket Connection and 2) tableId on URL
  useEffect(() => {
    if (!tableId || !state?.socketInstance) return;
    console.log("[SOCKET] - MOUNT TABLE");

    const currentTableId = tableId;
    const lastActiveTableId = state?.lastActiveTableId;

    const joinTable = () => {
      dispatch({
        type: SocketEvents.JOIN_TABLE,
        payload: {
          tableId: currentTableId,
          socketInstance: state?.socketInstance,
        },
      });
    };
    const leaveTable = () => {
      dispatch({
        type: SocketEvents.LEAVE_TABLE,
        payload: {
          tableId: lastActiveTableId,
          username: localStorage?.getItem("username"),
        },
      });
    };

    if (lastActiveTableId) {
      // console.log("[SOCKET] - MOUNT TABLE", "leaving the last table");
      leaveTable();
    }

    joinTable();

    // console.log(
    //   "[SOCKET] - MOUNT TABLE",
    //   "joining a new table",
    //   currentTableId
    // );
  }, [tableId, state?.socketInstance]);

  if (error) {
    console.error({ error });
    return <div>{error.message}</div>;
  }

  if (isFetching) {
    return <div>loading tables...</div>;
  }

  if (!data) return null;

  const activeTable = data.find((table) => table.id === tableId) as ITable;

  // const handleNewGame = () => {
  //   dispatch({
  //     type: SocketEvents.JOIN_TABLE,
  //     payload: state?.socketInstance,
  //   });
  // };

  // const handleLeaveTable = () => {
  //   dispatch({
  //     type: SocketEvents.LEAVE_TABLE,
  //     payload: state?.socketInstance,
  //   });
  // };

  return (
    <div className="table w-full">
      <div className="heading flex justify-between items-center font-sans ">
        <p className="text-pink-500 dark:text-teal-800 text-5xl">Table</p>
        <p className="table-name font-semibold uppercase text-2xl text-teal-800 dark:text-white-100 ">
          {activeTable.name}
        </p>
      </div>

      <Separator className="bg-teal-800 mt-3" />

      <div className="grid grid-cols-2">
        <div className="flex gap-4">
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

          <div className="table- participants">
            <h4 className="text-3xl font-semibold text-teal-800 dark:text-white-100 mb-8">
              Participants
            </h4>
            <ul className="flex flex-col gap-4">
              {tableParticipants?.map((participant) => (
                <li key={participant}>{participant}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <p className="font-sans text-xl text-teal-800 dark:text-white-100">
            If you are ready...
          </p>
          <Button
            className="max-w-[180px] font-semibold"
            variant="primary"
            size="large"
            onClick={() => null}
          >
            Start a game
          </Button>
        </div>

        {/* <Separator className="bg-teal-800 mt-3" /> */}

        <Outlet />
      </div>
    </div>
  );
};
