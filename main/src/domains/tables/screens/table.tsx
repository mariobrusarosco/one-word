import { useQuery } from "@tanstack/react-query";
import { Outlet, useParams } from "react-router-dom";
import { tableLoader } from "../api/loader";
import { ITable } from "../typing/interfaces";
import { Separator } from "@/domains/ui-system/components/ui/separator";

const TableScreen = () => {
  const { tableId } = useParams<{ tableId: string }>();
  const { data, error, isFetching } = useQuery<ITable>({
    queryKey: ["tables", { tableId }],
    queryFn: tableLoader,
    enabled: false,
  });

  if (error) {
    console.error({ error });
    return <div>{error.message}</div>;
  }

  if (isFetching) {
    return <div>loading tables...</div>;
  }

  if (!data) return null;

  return (
    <div className="table w-full">
      <div className="heading flex justify-between items-center font-sans ">
        <p className="text-pink-500 dark:text-teal-800 text-5xl">Table</p>
        <p className="table-name font-semibold uppercase text-2xl text-teal-800 dark:text-white-100 ">
          {data.name}
        </p>
      </div>

      <Separator className="bg-teal-800 mt-3" />

      <Outlet />
    </div>
  );
};

export default TableScreen;
