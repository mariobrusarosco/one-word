import { UserButton } from "@clerk/nextjs";
import { Separator } from "@/domains/shared/components/ui/separator";
import { AddTableCTA } from "@/domains/tables/components/add-table-cta";
import { TableAvatar } from "@/domains/tables/components/table-avatar";
import { ScrollArea } from "../ui/scroll-area";
import { TableQueries } from "@/domains/tables/server-side/queries";

interface Props {
  memberTables: Awaited<ReturnType<typeof TableQueries.fetchTables>>;
}

export const AppSidebar = async ({ memberTables }: Props) => {
  return (
    <aside className="flex flex-col bg-neutral-white shadow-right z-[2] min-w-[95px] h-screen">
      <ScrollArea data-test="table-wrapper">
        <div className="grid place-items-center flex-1 p-4 gap-4">
          <AddTableCTA />

          <Separator className="h-[1px] bg-secondary-base" />

          {memberTables?.map((table) => (
            <TableAvatar key={table.id} label={table.name} tableId={table.id} />
          ))}
        </div>
      </ScrollArea>

      <div className="mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};
