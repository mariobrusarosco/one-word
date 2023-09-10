"use client";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export const AppSidebar = () => {
  const router = useRouter();

  return (
    <aside className="flex flex-col bg-neutral-white shadow-main z-[2] px-6 py-6 h-screen">
      <div data-test="table-wrapper" className="flex flex-col gap-y-2">
        <Button variant="secondary" size="md" roundness="full">
          +
        </Button>
      </div>

      <div className="mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};
