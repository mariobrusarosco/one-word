import { NavLink, Outlet, useParams } from "react-router-dom";

export const TableScreen = () => {
  const { tableId } = useParams<{ tableId: string }>();
  return (
    <>
      <h3>Table: {tableId}</h3>

      <NavLink to="game">Start Game</NavLink>

      <NavLink to="rooms">Rooms</NavLink>

      <Outlet />
    </>
  );
};
