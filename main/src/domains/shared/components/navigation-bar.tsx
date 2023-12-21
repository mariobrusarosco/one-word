import { NavLink } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/tables">Tables</NavLink>
        </li>
        <li>
          <NavLink to="/tables/123">table 123</NavLink>
        </li>
        <li>
          <NavLink to="/games">Games</NavLink>
        </li>
      </ul>
    </nav>
  );
};
