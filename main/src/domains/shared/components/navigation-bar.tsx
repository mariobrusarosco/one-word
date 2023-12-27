import { NavLink } from "react-router-dom";
import { useWebSocket } from "../../socket/providers/web-socket";

export const NavigationBar = () => {
  // const socket = useWebSocket();
  // const isConnected = socket?.socketInstance?.connected;

  // console.log("[Socket] - from NavigationBar: ", { socket });

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/tables">Tables</NavLink>
          </li>
          <li>
            <NavLink to="/games">Games</NavLink>
          </li>
        </ul>
      </nav>
      {/* <p>Sockect connection: {isConnected ? "connected" : "disconnected"}</p> */}
    </div>
  );
};
