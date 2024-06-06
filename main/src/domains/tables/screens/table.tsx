import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { tableLoader } from "../api/loader";
import { ITable } from "../typing/interfaces";
import { Separator } from "@/domains/ui-system/components/ui/separator";
import { InviteMember } from "../components/modals/invite-member";

const TableScreen = () => {
  const { tableId } = useParams<{ tableId: string }>();
  const { data, error, isLoading } = useQuery<ITable>({
    queryKey: ["table", { tableId }],
    queryFn: tableLoader,
    enabled: !!tableId,
  });

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>loading tables...</div>;
  }

  if (!data || !tableId) return null;

  return (
    <div data-ui="table-screen">
      <div className="heading flex justify-between items-center font-sans ">
        <p className="text-pink-500 dark:text-teal-800 text-5xl">Table</p>
        <p className="table-name font-semibold uppercase text-2xl text-teal-800 dark:text-white-100 ">
          {data.name}
        </p>
      </div>
      <Separator className="bg-teal-800 mt-3" />

      <InviteMember tableId={tableId} />
    </div>
  );
};

export default TableScreen;
