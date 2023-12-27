import { QueryClient } from "@tanstack/react-query";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useWebSocket } from "../../socket/providers/web-socket";

export const TableScreen = () => {
  const { tableId } = useParams<{ tableId: string }>();
  // const socket = useWebSocket();

  // console.log("[Socket] - from TableScreen: ", { socket });
  return (
    <>
      <h3>Table: {tableId}</h3>

      <NavLink to="game">Start Game</NavLink>

      <NavLink to="rooms">Rooms</NavLink>

      <Outlet />
    </>
  );
};
