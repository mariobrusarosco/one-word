import { NavLink } from "react-router-dom";
import { AppSidebar } from "@mariobrusarosco/design-system";

export const NavigationBar = () => {
  return (
    <AppSidebar>
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
    </AppSidebar>
  );
};
