import { NavLink } from "react-router-dom";

export const NavigationBar = () => {
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
    </div>
  );
};
