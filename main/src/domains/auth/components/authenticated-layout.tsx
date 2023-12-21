import { Outlet, useLoaderData, useOutletContext } from "react-router-dom";
import { NavigationBar } from "../../shared/components/navigation-bar";

export const AuthenticatedLayout = () => {
  const user = useLoaderData() as { name: string };

  return (
    <div style={{ border: "1px solid orange" }}>
      <NavigationBar />
      <Outlet context={{ user } satisfies ContextType} />
    </div>
  );
};

type ContextType = { user: { name: string } | null };

export const useUser = () => {
  return useOutletContext<ContextType>();
};
