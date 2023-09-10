// "use client";
// import { UserButton } from "@clerk/nextjs";
import { useParams } from "next/navigation";

export const AppSidebar = () => {
  // const params = useParams();

  // console.log({ params });

  return (
    <aside className="col-span-1 flex flex-col bg-neutral-white shadow-main z-[2]">
      App navigation
      {/* <UserButton /> */}
    </aside>
  );
};
