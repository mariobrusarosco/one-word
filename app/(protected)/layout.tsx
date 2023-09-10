interface Props {
  children: React.ReactNode;
}

import { TableSidebar } from "@/domains/tables/components/sidebar";
import { AppSidebar } from "@/domains/shared/components/app-sidebar";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { MemberQueries } from "@/domains/member/server-side/queries";
import { AuthRoutes } from "@/domains/auth/typing/enum-and-interfaces";

const ProtectedLayout = async ({ children }: Props) => {
  const member = await MemberQueries.fetchMember();

  if (member === null) return redirect(AuthRoutes.REGISTER);

  return (
    <div className="grid grid-col grid-cols-app h-screen max-h-screen">
      <AppSidebar />
      <TableSidebar />
      <main className="container bg-neutral-white overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default ProtectedLayout;
