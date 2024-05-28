import { NavLink, Outlet } from "react-router-dom";

export const RoomsScreen = () => {
  return (
    <>
      <h3>Rooms</h3>
      <ul>
        <li>
          <NavLink to="456">456</NavLink>
        </li>
        <li>
          <NavLink to="789">789</NavLink>
        </li>
        <li>
          <NavLink to="666">666</NavLink>
        </li>
        <li>
          <NavLink to="420">420</NavLink>
        </li>
      </ul>

      <div style={{ width: "100%" }}>
        <Outlet />
      </div>
    </>
  );
};
