import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/domains/ui-system/components/ui/dropdown-menu";
import { cn } from "@/domains/ui-system/utils";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
  useState,
} from "react";

interface FooterItemProps extends ComponentPropsWithoutRef<"span"> {}
const FooterItem = forwardRef<HTMLSpanElement, FooterItemProps>(
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
FooterItem.displayName = "FooterItem";

const FooterIcon = () => {
  return (
    <span className="w-10 h-10 border-solid border-2 border-white-100 "></span>
  );
};

const Menu = () => {
  return (
    <DropdownMenu>
      <div className="fixed bottom-0 w-full flex justify-center gap-x-4 bg-pink-500 p-4 dark:bg-teal-800">
        <FooterItem>
          <FooterIcon />
          <span className="text-sm font-regular">Dashboard</span>
        </FooterItem>
        <DropdownMenuTrigger>
          <FooterItem>
            <FooterIcon />
            <span className="text-sm font-regular">All features</span>
          </FooterItem>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-screen h-screen translate-y-[84px] border-none rounded-none bg-pink-500 p-0 dark:bg-teal-800">
          <div className="flex justify-between shadow-lg px-4 py-6">
            <span className="font-sans text-white-100 text-4xl">one word</span>
            <DropdownMenuItem className="text-white-100">
              close
            </DropdownMenuItem>
          </div>
          <DropdownMenuSeparator className="" />

          <div className="flex flex-col gap-y-9 px-6 pt-14 font-normal text-2xl">
            <DropdownMenuItem className="p-0">
              <FooterItem className="flex-row gap-x-6">
                <FooterIcon />
                <span className="text-2xl font-light">Dashboard</span>
              </FooterItem>
            </DropdownMenuItem>

            <DropdownMenuItem className="p-0">
              <FooterItem className="flex-row gap-x-6">
                <FooterIcon />
                <span className="text-2xl font-light">Account</span>
              </FooterItem>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};

const AutthenticatedFooter = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="wrapper">
      <Menu />
      {isOpened && (
        <footer className="fixed bottom-0 w-full flex justify-center gap-x-4 bg-pink-500 py-4 px-2 tablet:py-6 tablet:px-8 desktop:px-12 dark:bg-teal-800">
          <FooterItem style={{}}>
            <FooterIcon />
            <span>Dashboard</span>
          </FooterItem>
          <FooterItem onClick={() => setIsOpened((prev) => !prev)}>
            <FooterIcon />
            <span>Features</span>
          </FooterItem>
        </footer>
      )}
    </div>
  );
};

export { AutthenticatedFooter };
