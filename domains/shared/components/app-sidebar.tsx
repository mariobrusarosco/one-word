// "use client";
import { UserButton } from "@clerk/nextjs";

export const AppSidebar = () => {
  return (
    <aside className="col-span-1 flex flex-col bg-neutral-white shadow-main z-[2]">
      <UserButton />
    </aside>
  );
};
