import { AppLogo } from "@/domains/ui-system/components/ui/app-logo";
import { ThemeModeToggle } from "../theme-mode-toggle";

const PublicHeader = () => {
  return (
    <header
      data-ui="public-header"
      className="relative shadow-main-bottom flex items-center bg-rose-800 p-6 gap-x-2 dark:bg-violet-800"
    >
      <div className="flex items-baseline gap-x-2 font-thin font-josefin">
        <AppLogo className="w-[40px] h-[40px] stroke-neutral-100" />
        <h1 className="text-2xl font-josefin font-light text-neutral-100">
          One Word
        </h1>
      </div>

      <div className="flex gap-x-6 items-center ml-auto">
        <ThemeModeToggle />
      </div>
    </header>
  );
};

export { PublicHeader };
