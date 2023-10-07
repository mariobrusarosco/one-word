import { UserButton } from "@clerk/nextjs";
import { Separator } from "@/domains/shared/components/ui/separator";
import { AddTableCTA } from "@/domains/tables/components/add-table-cta";
import { TableAvatar } from "@/domains/tables/components/table-avatar";
import { db } from "@/server-side/db/prisma";
import { Suspense } from "react";

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
    <aside className="flex flex-col bg-neutral-white shadow-main z-[2] px-6 py-6 h-screen">
      <div data-test="table-wrapper" className="flex flex-col gap-y-6">
        <AddTableCTA />

        <Separator className="h-[1px] bg-secondary-base" />

        {tables?.map((table) => {
          return <TableAvatar key={table.id} label={table.name} />;
        })}
      </div>

      <div className="mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};
