import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthenticatedLayout } from "../../auth/components/authenticated-layout";
import RootLayout from "./root-layout";
import { GamesScreen } from "../../games/screens/games";
import { TablesScreen } from "../../tables/screens/tables";
import { PublicLayout } from "./public-layout";
import { LoginScreen } from "../../auth/screens/login";
import { logoutUser } from "../../auth/routes/logout-user";
import { DashboardScreen } from "../../dashboard/screens/dashboard";
import { TableScreen } from "../../tables/screens/table";
import { ErrorScreen } from "../screens/error";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorScreen />,
      children: [
        { index: true, element: <DashboardScreen /> },
        {
          element: <AuthenticatedLayout />,
          loader: async () => {
            const response = await fetch(
              `${import.meta.env.VITE_ONE_WORD_API}/user`
            );

            const user = await response.json();
            return user;
          },
          children: [
            {
              path: "tables",
              element: <TablesScreen />,
              children: [{ path: ":tableId", element: <TableScreen /> }],
            },
            { path: "games", element: <GamesScreen /> },
            { path: "test", element: <div>testing....</div> },
            { path: "dashboard", element: <div>dash....</div> },
          ],
        },
        {
          element: <PublicLayout />,
          children: [
            {
              path: "login",
              element: <LoginScreen />,
            },
            { path: "logout", action: logoutUser },
          ],
        },
      ],
    },
  ]);

  // const user = useLoaderData();

  // console.log({ user });

  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
};
