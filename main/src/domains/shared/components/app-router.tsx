import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthenticatedLayout } from "../../auth/components/authenticated-layout";
import RootLayout from "./root-layout";
import { GamesScreen } from "../../games/screens/games";
import { TablesScreen } from "../../tables/screens/tables";
import { PublicLayout } from "./public-layout";
import { LoginScreen } from "../../auth/screens/login";
import { logoutUser } from "../../auth/routes/logout-user";
import { TableScreen } from "../../tables/screens/table";
import { ErrorScreen } from "../screens/error";
import { Testing } from "../testing-temp/testing";
import { Chat } from "../../chat";
import { RoomsScreen } from "../../tables/screens/rooms";
import { RoomScreen } from "../../tables/screens/room";
import { GameScreen } from "../../games/screens/game";
import { DashboardScreen } from "../../dashboard/screens/dashboard";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorScreen />,
      children: [
        { index: true, element: <Navigate to="tables" /> },
        {
          element: <AuthenticatedLayout />,
          children: [
            {
              path: "tables",
              element: <TablesScreen />,
              children: [
                {
                  path: ":tableId",
                  element: <TableScreen />,
                  children: [
                    {
                      path: "rooms",
                      element: <RoomsScreen />,
                      children: [{ path: ":roomId", element: <RoomScreen /> }],
                    },
                    { path: "game", element: <GameScreen /> },
                  ],
                },
              ],
            },
            { path: "games", element: <GamesScreen /> },
            { path: "testing", element: <Testing /> },
            { path: "chat", element: <Chat /> },
            { path: "dashboard", element: <DashboardScreen /> },
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
