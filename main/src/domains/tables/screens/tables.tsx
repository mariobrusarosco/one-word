import { Outlet } from "react-router-dom";

export const TablesScreen = () => {
  // const { tableId } = useParams<{
  //   tableId: string;
  // }>();

  // const { data, error, isFetching } = useQuery<Table[]>({
  //   queryKey: ["tables"],
  //   queryFn: loaderTables,
  // });

  // if (error) {
  //   console.error({ error });
  //   return <div>{error.message}</div>;
  // }

  // if (isFetching) {
  //   return <div>loading tables...</div>;
  // }

  return (
    <>
      <Outlet />
    </>
  );
};
