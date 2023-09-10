"use client";
import { TableRoutes } from "@/domains/tables/typing/enums-and-interfaces";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export const AppSidebar = () => {
  const router = useRouter();

  return (
    <aside className="col-span-1 flex flex-col bg-neutral-white shadow-main z-[2]">
      <UserButton />
      <button onClick={() => router.push(TableRoutes.HOME)}>
        Go to Tables
      </button>
    </aside>
  );
};
