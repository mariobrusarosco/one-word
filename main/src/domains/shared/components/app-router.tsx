import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          {/* <Route
            path="dashboard"
            element={<Dashboard />}
            loader={({ request }) =>
              fetch("/api/dashboard.json", {
                signal: request.signal,
              })
            }
          /> */}
          <Route element={<AuthenticatedLayout />}>
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
