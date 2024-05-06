import { Icon } from "@/domains/shared/components/icon";
import {
  CloseTrigger,
  MenuItem,
  OpenTrigger,
} from "@/domains/shared/components/menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/domains/ui-system/components/ui/dropdown-menu";

const AuthenticatedMenu = () => {
  return (
    <DropdownMenu>
      <div className="fixed bottom-0 w-full flex justify-center gap-x-4 bg-pink-500 p-4 dark:bg-teal-800">
        {renderPrimarymenutems()}

        <OpenTrigger />

        <DropdownMenuContent className="w-screen h-screen translate-y-[84px] border-none rounded-none bg-pink-500 p-0 dark:bg-teal-800">
          <div className="flex justify-between shadow-xl px-4 py-6">
            <span className="font-sans text-white-100 text-4xl">one word</span>
            <CloseTrigger />
          </div>
          <DropdownMenuSeparator className="" />

          <div className="flex flex-col gap-y-9 px-6 pt-14 font-normal text-2xl">
            {renderSecondaryMenutems()}
          </div>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};

const primaryMenuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Icon name="" />,
  },
  {
    title: "Tables",
    path: "/tables",
    icon: <Icon name="" />,
  },
  {
    title: "Games",
    path: "/games",
    icon: <Icon name="" />,
  },
];

const renderPrimarymenutems = () => {
  return primaryMenuItems.map((item) => (
    <MenuItem className="flex gap-x-6">
      {item.icon}
      <span>{item.title}</span>
    </MenuItem>
  ));
};

const secondaryMenuItems = [
  {
    title: "Stats",
    path: "/stats",
    icon: <Icon name="" />,
  },
  {
    title: "Account",
    path: "/account",
    icon: <Icon name="" />,
  },
];

const renderSecondaryMenutems = () => {
  return secondaryMenuItems.map((item) => (
    <MenuItem className="flex-row gap-x-6">
      {item.icon}
      <span>{item.title}</span>
    </MenuItem>
  ));
};

export { AuthenticatedMenu };
