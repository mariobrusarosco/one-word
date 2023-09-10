import { UserButton } from "@clerk/nextjs";
import { Separator } from "@/domains/shared/components/ui/separator";
import { AddTableCTA } from "@/domains/tables/components/add-table-cta";
import { TableAvatar } from "@/domains/tables/components/table-avatar";

export const AppSidebar = () => {
  return (
    <aside className="flex flex-col bg-neutral-white shadow-main z-[2] px-6 py-6 h-screen">
      <div data-test="table-wrapper" className="flex flex-col gap-y-6">
        <AddTableCTA />

        <TableAvatar label="TN" />
        <Separator className="h-[1px] bg-secondary-base" />

        <TableAvatar label="Nintendo" />
        <TableAvatar label="Lord of the Rings" />
        <TableAvatar label="This is just a long long name" />
      </div>

      <div className="mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};
