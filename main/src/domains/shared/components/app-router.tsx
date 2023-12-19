import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthenticatedLayout } from "../../auth/components/authenticated-layout";
import RootLayout from "./root-layout";
import { GamesScreen } from "../../games/screens/games";
import { TablesScreen } from "../../tables/screens/tables";
import { PublicLayout } from "./public-layout";
import { LoginScreen } from "../../auth/screens/login";
import { logoutUser } from "../../auth/routes/logout-user";
import { DashboardScreen } from "../../dashboard/screens/dashboard";
import { TableScreen } from "../../tables/screens/table";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route element={<AuthenticatedLayout />}>
            <Route
              path="dashboard"
              element={<DashboardScreen />}
              loader={({ request }) =>
                fetch("/api/dashboard.json", {
                  signal: request.signal,
                })
              }
            />
            {/* Basic Example of Dynamic Segments on the URL
             */}
            <Route path="tables" element={<TablesScreen />} />
            <Route path="tables/:tableId" element={<TableScreen />} />

            {/* Leveraging the '/tables' chunk. So, every child <Route >
              can have a path that starts with '/tables' implicitly.
              [IMPORTANT] 
              To render the child <Route >, we need to use the <Outlet /> component.
           */}
            {/* <Route path="tables" element={<TablesScreen />}>
              <Route path=":tableId" element={<TableScreen />} />
            </Route> */}
            <Route path="games" element={<GamesScreen />} />
          </Route>
          <Route element={<PublicLayout />}>
            <Route path="login" element={<LoginScreen />} />
            <Route path="logout" action={logoutUser} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
