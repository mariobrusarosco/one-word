import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthenticatedLayout } from "../../auth/components/authenticated-layout";
import RootLayout from "./root-layout";
import { GamesScreen } from "../../games/screens/games";
import { TablesScreen } from "../../tables/screens/tables";
import { PublicLayout } from "./public-layout";
import { LoginScreen } from "../../auth/screens/login";
import { logoutUser } from "../../auth/routes/logout-user";
import { DashboardScreen } from "../../dashboard/screens/dashboard";

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
            <Route path="tables" element={<TablesScreen />} />
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

// export const router = createBrowserRouter([
//   {
//     id: "root",
//     path: "/",
//     Component: RootLayout,
//     children: [
//       { index: true, Component },
//       { path: "tables", element: <Tables /> },
//       { path: "games", element: <Games /> },
//       { path: "login", element: <Login /> },
//       { path: "logout", action: logoutUser },
//     ],
//   },
// ]);
