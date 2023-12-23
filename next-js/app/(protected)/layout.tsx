interface Props {
  children: React.ReactNode;
}

import { TableSidebar } from "@/domains/tables/components/table-sidebar";
import { AppSidebar } from "@/domains/shared/components/app-sidebar/app-sidebar";
import { redirect } from "next/navigation";
import { MemberQueries } from "@/domains/member/server-side/queries";
import { AuthRoutes } from "@/domains/auth/typing/enum-and-interfaces";
import { TableQueries } from "@/domains/tables/server-side/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  // title: {
  // absolute: "sadsadsada",
  // template: "aaa - %s",
  // },
  title: "nao entendi entao",
};

const ProtectedLayout = async ({ children }: Props) => {
  const member = await MemberQueries.fetchMember();
  const memberTables = await TableQueries.fetchTables();

  if (member === null) return redirect(AuthRoutes.REGISTER);

  return (
    <div className="flex h-screen max-h-screen">
      <AppSidebar memberTables={memberTables} />

      <TableSidebar memberTables={memberTables} />

      <main className="container px-14 bg-neutral-white overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default ProtectedLayout;
