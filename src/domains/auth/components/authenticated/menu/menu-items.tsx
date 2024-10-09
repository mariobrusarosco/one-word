import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { cn } from "@/domains/ui-system/utils";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { useNavigate } from "react-router-dom";

interface MenuItemProps extends ComponentPropsWithoutRef<"span"> {}

export const MenuItem = forwardRef<HTMLSpanElement, MenuItemProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "flex flex-col items-center gap-y-1 text-neutral-100 cursor-pointer",
        className
      )}
      {...props}
    />
  )
);
MenuItem.displayName = "MenuItem";

const primaryMenuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Icon name="layout-dashboard" />,
  },
];

export const InitiallyVisibleItems = () => {
  const navigate = useNavigate();

  return primaryMenuItems.map((item) => (
    <MenuItem
      className="flex gap-x-6"
      onClick={() => navigate(item.path)}
      key={item.path}
    >
      {item.icon}
      <span className="text-sm font-regular">{item.title}</span>
    </MenuItem>
  ));
};

const secondaryMenuItems = [
  {
    title: "Tables",
    path: "/tables",
    icon: <Icon name="table-plus" />,
  },
  {
    title: "Games",
    path: "/games",
    icon: <Icon name="device-gamepad" />,
  },
];

export const InitiallyHiddenItems = () => {
  const navigate = useNavigate();

  return secondaryMenuItems.map((item) => (
    <MenuItem
      className="flex-row gap-x-6"
      onClick={() => navigate(item.path)}
      key={item.path}
    >
      {item.icon}
      <span>{item.title}</span>
    </MenuItem>
  ));
};
