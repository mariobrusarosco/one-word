import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthenticatedLayout } from "../../auth/components/authenticated-layout";
import RootLayout from "./root-layout";
import GamesScreen from "../../games/screens/games";
import TablesScreen from "../../tables/screens/tables";
import PublicLayout from "./public-layout";
import LoginScreen from "../../auth/screens/login";
import logoutUser from "../../auth/routes/logout-user";
import TableScreen from "../../tables/screens/table";
import ErrorScreen from "../screens/error";
import Testing from "../testing-temp/testing";
import Chat from "../../chat";
import DashboardScreen from "../../dashboard/screens/dashboard";
import UISystemScreen from "@/domains/ui-system/screen";
import ChannelScreen from "@/domains/channel/screens/channel";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorScreen />,
      children: [
        { index: true, element: <Navigate to="dashboard" /> },
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
                    // {
                    //   path: "rooms",
                    //   element: <RoomsScreen />,
                    //   children: [{ path: ":roomId", element: <RoomScreen /> }],
                    // },
                    // { path: "game", element: <GameScreen /> },
                  ],
                },
                {
                  path: ":tableId/channel/:channelId",
                  element: <ChannelScreen />,
                },
              ],
            },
            { path: "games", element: <GamesScreen /> },
            { path: "ui-system", element: <UISystemScreen /> },
            { path: "testing", element: <Testing /> },
            { path: "chat", element: <Chat /> },
            { path: "dashboard", element: <DashboardScreen /> },
            {
              path: "account",
              element: (
                <div>
                  <h1>Account</h1>
                </div>
              ),
            },
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

  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
};
