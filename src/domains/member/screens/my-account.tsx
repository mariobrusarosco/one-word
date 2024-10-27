import { DemoUsers } from "@/domains/shared/components/demo-users";
import { ScreenHeading } from "@/domains/shared/components/screen-heading";
import { APP_MODE } from "@/domains/shared/utils";

const shouldDisplayDemoUsers = APP_MODE === "local-dev" || APP_MODE === "demo";

const MyAccountScreen = () => {
  return (
    <div data-ui="my-account-screen" className="p-12">
      <ScreenHeading title="My Account" />

      <div className="flex flex-col gap-y-12 pt-[120px]">
        {shouldDisplayDemoUsers ? <DemoUsers /> : null}
      </div>
    </div>
  );
};

export { MyAccountScreen };
