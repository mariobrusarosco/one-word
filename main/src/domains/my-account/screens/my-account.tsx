import { useAuth } from "@/domains/auth/hooks/use-auth";
import { ScreenHeading } from "@/domains/shared/components/screen-heading";

const MyAccountScreen = () => {
  const { data: authenticatedUser } = useAuth();

  if (!authenticatedUser) return null;

  return (
    <div data-ui="my-account-screen" className="p-12">
      <ScreenHeading title="My Account" />

      <div className="flex flex-col gap-y-12 pt-[120px]">
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
      </div>
    </div>
  );
};

export { MyAccountScreen };
