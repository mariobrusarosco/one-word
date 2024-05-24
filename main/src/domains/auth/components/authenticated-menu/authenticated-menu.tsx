import { Icon } from "@/domains/shared/components/icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/domains/ui-system/components/ui/dropdown-menu";
import { cn } from "@/domains/ui-system/utils";
import { ComponentPropsWithoutRef, forwardRef } from "react";

interface MenuItemProps extends ComponentPropsWithoutRef<"span"> {}

const MenuItem = forwardRef<HTMLSpanElement, MenuItemProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "flex flex-col items-center gap-y-1 text-white-100",
        className
      )}
      {...props}
    />
  )
);
MenuItem.displayName = "MenuItem";

const OpenTrigger = () => {
  return (
    <DropdownMenuTrigger>
      <MenuItem>
        <Icon name="more" />
        <span className="text-sm font-regular">more features</span>
      </MenuItem>
    </DropdownMenuTrigger>
  );
};

const CloseTrigger = () => {
  return <DropdownMenuItem className="text-white-100">close</DropdownMenuItem>;
};

export const AuthenticatedMenu = () => {
  return (
    <DropdownMenu>
      <div className="fixed bottom-0 w-full flex justify-center gap-x-4 bg-pink-500 p-4 dark:bg-teal-800">
        {/* {renderPrimarymenutems()} */}

        <OpenTrigger />

        <DropdownMenuContent className="w-screen h-screen translate-y-[84px] border-none rounded-none bg-pink-500 p-0 dark:bg-teal-800">
          <div className="flex justify-between shadow-xl px-4 py-6">
            <span className="font-sans text-white-100 text-4xl">one word</span>
            <CloseTrigger />
          </div>
          <DropdownMenuSeparator className="" />

          <div className="flex flex-col gap-y-9 px-6 pt-14 font-normal text-2xl">
            {/* {renderSecondaryMenutems()} */}
          </div>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};
