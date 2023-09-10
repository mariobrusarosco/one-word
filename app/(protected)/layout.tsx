interface Props {
  children: React.ReactNode;
}

import { TableSidebar } from "@/domains/tables/components/sidebar";
import { AppSidebar } from "@/domains/shared/components/app-sidebar";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const ProtectedLayout = async ({ children }: Props) => {
  return (
    <div className="grid grid-cols-12 h-full">
      {/* <Suspense fallback={<h2>Loading...</h2>}> */}
      <AppSidebar />
      <TableSidebar />
      <main className="container col-span-8 lg:col-span-9 bg-red-200">
        {children}
      </main>
      {/* </Suspense> */}
    </div>
  );
};

export default ProtectedLayout;
