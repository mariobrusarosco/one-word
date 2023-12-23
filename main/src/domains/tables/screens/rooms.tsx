import { Outlet } from "react-router-dom";

export const RoomsScreen = () => {
  return (
    <>
      <h3>Rooms</h3>

      <div style={{ width: "100%" }}>
        <Outlet />
      </div>
    </>
  );
};
