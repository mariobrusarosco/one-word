import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/domains/ui-system/components/ui/dropdown-menu";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import {
  MenuItem,
  renderInitiallyHiddenMenutems,
  renderInitiallyVisibleItems,
} from "./menu-items";

const OpenTrigger = () => {
  return (
    <DropdownMenuTrigger>
      <MenuItem>
        <Icon name="grid-dots" />
        <span className="text-sm font-regular">Features</span>
      </MenuItem>
    </DropdownMenuTrigger>
  );
};

const CloseTrigger = () => {
  return (
    <DropdownMenuItem>
      <Icon name="close" className="stroke-white-100" />
    </DropdownMenuItem>
  );
};

export const AuthenticatedMenu = () => {
  return (
    <DropdownMenu>
      <div className="sticky bottom-0 w-full flex items-center justify-center gap-x-4 bg-pink-500 p-4 dark:bg-teal-800  row-start-3 row-end-3 desktop:row-start-1 desktop:row-end-3 desktop:hidden">
        {renderInitiallyVisibleItems()}

        <OpenTrigger />

        <DropdownMenuContent className="w-screen h-screen translate-y-[84px] border-none rounded-none bg-pink-500 p-0 dark:bg-teal-800">
          <div className="flex justify-between shadow-xl px-4 py-6">
            <span className="font-sans text-white-100 text-4xl">one word</span>
            <CloseTrigger />
          </div>
          <DropdownMenuSeparator className="" />

          <div className="flex flex-col gap-y-9 px-6 pt-14 font-normal text-2xl">
            {renderInitiallyHiddenMenutems()}
          </div>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};
