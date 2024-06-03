import { ThemeModeToggle } from "@/domains/auth/components/authenticated-menu/theme-mode-toggle";
import { CreateDemoUser } from "../modals/create-demo-user";

const PublicHeader = () => {
  return (
    <header className="z-20 sticky top-0 shadow-main-bottom flex  items-center row-start-1 row-end-2 bg-pink-500 dark:bg-teal-800 p-6 gap-x-2 tablet:py-6 tablet:px-8 desktop:row-start-1 desktop:row-end-1 desktop:col-start-2 desktop:col-end-2  desktop:px-12 ">
      <CreateDemoUser />

      <div className="flex gap-x-6 items-center ml-auto">
        <ThemeModeToggle />
      </div>
    </header>
  );
};

export { PublicHeader };
