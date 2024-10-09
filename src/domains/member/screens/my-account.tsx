import { ScreenHeading } from "@/domains/shared/components/screen-heading";
import { Button } from "@/domains/ui-system/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MyAccountScreen = () => {
  // const { data: authenticatedUser } = useAuth();

  // if (!authenticatedUser) return null;

  return (
    <div data-ui="my-account-screen" className="p-12">
      <ScreenHeading title="My Account" />

      <LogoutButton />

      {/* <div className="flex flex-col gap-y-12 pt-[120px]">
        <div className="flex flex-col text-violet-800 dark:text-neutral-100">
          <p className="text-3xl font-bold">email</p>
          <p className="text-lg font-josefin">{authenticatedUser.email}</p>
        </div>
        <div className="flex flex-col text-violet-800 dark:text-neutral-100">
          <p className="text-3xl font-bold">first name</p>
          <p className="text-lg font-josefin">{authenticatedUser.firstName}</p>
        </div>
        <div className="flex flex-col text-violet-800 dark:text-neutral-100">
          <p className="text-3xl font-bold">last name</p>
          <p className="text-lg font-josefin">
            {authenticatedUser.lastName || "N/A"}
          </p>
        </div>
      </div> */}
    </div>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <Button onClick={() => logout()}>Logout</Button>;
};

export { MyAccountScreen };
