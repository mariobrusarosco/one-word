import { NavLink } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <nav className="hidden tablet:block">
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
  );
};
