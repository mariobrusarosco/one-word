import { useQuery } from "@tanstack/react-query";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { loaderTables } from "../api/loader";
import { ITable } from "../typing/interfaces";
import { Button } from "@/domains/ui-system/components/ui/button";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { useCallback, useEffect, useState } from "react";
import { SocketEvents } from "@/domains/socket/typing/enums";
import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";

export const TableScreen = () => {
  const [tableParticipants, setTableParticipants] = useState<string[]>([]);
  const { tableId } = useParams<{ tableId: string }>();
  const { dispatch, state } = useWebSocket();
  const currentTableId = tableId;
  const lastActiveTableId = state?.lastActiveTableId;

  const { data, error, isFetching } = useQuery<ITable[]>({
    queryKey: ["tables"],
    queryFn: loaderTables,
    enabled: false,
  });

  const joinTable = useCallback(() => {
    dispatch({
      type: SocketEvents.JOIN_TABLE,
      payload: {
        tableId: currentTableId,
      },
    });
  }, [currentTableId, dispatch]);

  const leaveTable = useCallback(() => {
    dispatch({
      type: SocketEvents.LEAVE_TABLE,
      payload: {
        tableId: lastActiveTableId,
      },
    });
  }, [lastActiveTableId, dispatch]);

  const watchForNewParticipants = useCallback(() => {
    state?.socketInstance?.on("update_list_of_users", (data) =>
      setTableParticipants(
        data.map((user: { username: string }) => user.username)
      )
    );
  }, [state?.socketInstance]);

  // Watch for changes on 1) Socket Connection and 2) tableId on URL
  useEffect(() => {
    if (!tableId || !state?.socketInstance) return;
    console.log("[SOCKET] - MOUNT TABLE");

    if (lastActiveTableId) {
      leaveTable();
    }

    joinTable();
    watchForNewParticipants();
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

        <Outlet />
      </div>
    </div>
  );
};
