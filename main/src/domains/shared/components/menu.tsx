import {
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/domains/ui-system/components/ui/dropdown-menu";
import { cn } from "@/domains/ui-system/utils";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Icon } from "./icon";

interface MenuItemProps extends ComponentPropsWithoutRef<"span"> {}

export const MenuItem = forwardRef<HTMLSpanElement, MenuItemProps>(
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

export const OpenTrigger = () => {
  return (
    <DropdownMenuTrigger>
      <MenuItem>
        <Icon name="more" />
        <span className="text-sm font-regular">more features</span>
      </MenuItem>
    </DropdownMenuTrigger>
  );
};

export const CloseTrigger = () => {
  return <DropdownMenuItem className="text-white-100">close</DropdownMenuItem>;
};
