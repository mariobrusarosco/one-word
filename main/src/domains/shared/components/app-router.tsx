import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import { AuthenticatedLayout } from "../../auth/components/authenticated-layout";
import RootLayout from "./root-layout";
import { Games } from "../../games/components/Games";
import { Tables } from "../../tables/components/Tables";
import { PublicLayout } from "./public-layout";
import { Login } from "../../auth/screens/login";
import { logoutUser } from "../../auth/routes/logout-user";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route element={<AuthenticatedLayout />}>
            <Route
              path="dashboard"
              element={<Dashboard />}
              loader={({ request }) =>
                fetch("/api/dashboard.json", {
                  signal: request.signal,
                })
              }
            />
            <Route path="tables" element={<Tables />} />
            <Route path="games" element={<Games />} />
          </Route>
          <Route element={<PublicLayout />}>
            <Route path="login" element={<Login />} />
            {/* <Route path="login" element={<Login />} loader={redirectIfUser} /> */}
            <Route path="logout" action={logoutUser} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component },
      { path: "tables", element: <Tables /> },
      { path: "games", element: <Games /> },
      { path: "login", element: <Login /> },
      { path: "logout", action: logoutUser },
    ],
  },
]);
