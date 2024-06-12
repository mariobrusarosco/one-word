import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./root-layout";
import LoginScreen from "../../auth/screens/login";
import logoutUser from "../../auth/routes/logout-user";
import TableScreen from "../../tables/screens/table";
import ErrorScreen from "../screens/error";
import UISystemScreen from "@/domains/ui-system/screen";
import ChannelScreen from "@/domains/channel/screens/channel";
import TableLayout from "@/domains/tables/components/table-layout";
import GameScreen from "@/domains/games/screens/game";
import Intro from "../screens/intro";
import { AuthenticatedLayout } from "@/domains/auth/components/authenticated/layout";
import PublicLayout from "@/domains/auth/components/public/layout";
import NoSelectedTable from "@/domains/tables/screens/no-selected-table";
import { MyAccountScreen } from "@/domains/my-account/screens/my-account";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorScreen />,
      children: [
        { index: true, element: <Intro /> },
        {
          element: <AuthenticatedLayout />,
          children: [
            {
              path: "tables",
              element: <TableLayout />,
              children: [
                { index: true, element: <NoSelectedTable /> },
                { path: ":tableId", element: <TableScreen /> },
                {
                  path: ":tableId/channels/:channelId",
                  element: <ChannelScreen />,
                },
                {
                  path: ":tableId/game",
                  element: <GameScreen />,
                },
              ],
            },
            { path: "ui-system", element: <UISystemScreen /> },
            {
              path: "account",
              element: <MyAccountScreen />,
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
