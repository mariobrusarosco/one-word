"use client";
// import { useAuthentication } from "@/domains/auth/providers/auth-provider";
import { redirect } from "next/navigation";

export const TableSidebar = () => {
  //   const { member } = useAuthentication();

  return (
    <aside className="flex flex-col bg-neutral-white shadow-main z-[1]  h-screen ">
      <span>Olá</span>
      {/* <span>{member?.firstName}</span> */}
      <button
        onClick={() => {
          redirect("/tables/asdsadsa/game/asdsa");
        }}
      >
        test
      </button>
    </aside>
  );
};
