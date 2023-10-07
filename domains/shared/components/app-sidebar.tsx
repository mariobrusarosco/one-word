import { UserButton } from "@clerk/nextjs";
import { Separator } from "@/domains/shared/components/ui/separator";
import { AddTableCTA } from "@/domains/tables/components/add-table-cta";
import { TableAvatar } from "@/domains/tables/components/table-avatar";
import { db } from "@/server-side/db/prisma";
import { Suspense } from "react";
import { ScrollArea } from "./ui/scroll-area";

export const AppSidebar = async () => {
  let tables = null;
  try {
    tables = await db.table.findMany({
      where: {},
    });
  } catch (e) {
    console.error(e);
  }

  return (
    <aside className="flex flex-col bg-neutral-white shadow-main z-[2]  h-screen">
      <ScrollArea data-test="table-wrapper">
        <div className="grid place-items-center flex-1 p-4 gap-4">
          <AddTableCTA />

          <Separator className="h-[1px] bg-secondary-base" />

          {tables?.map((table) => {
            return <TableAvatar key={table.id} label={table.name} />;
          })}
        </div>
      </ScrollArea>

      <div className="mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};
