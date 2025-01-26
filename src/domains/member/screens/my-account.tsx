import { DemoUsers } from "@/domains/shared/components/demo-users";
import { ScreenHeading } from "@/domains/shared/components/screen-heading";
import { APP_MODE } from "@/domains/shared/utils";
import { useMember } from "../hooks/use-member";

const shouldDisplayDemoUsers = APP_MODE === "local-dev" || APP_MODE === "demo";

const MyAccountScreen = () => {
  const { data } = useMember();
  return (
    <div data-ui="my-account-screen" className="p-12">
      <ScreenHeading title="My Account" />

      <div className="flex gap-4 items-center pt-12">
        <span className="text-neutral-100 text-4xl font-semibold">
          id
        </span>

        <h5 className="text-neutral-100 text-lg font-semibold">
          {data?.id}
        </h5>
      </div>


      <div className="flex gap-4 items-center pt-12">
        <h5 className="text-neutral-100 text-2xl font-semibold">
          {data?.firstName} {data?.lastName}
        </h5>
      </div>

      <div className="flex flex-col gap-y-12 pt-[120px]">
        {shouldDisplayDemoUsers ? <DemoUsers /> : null}
      </div>
    </div>
  );
};

export { MyAccountScreen };
