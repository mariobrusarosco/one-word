import { useQuery } from "@tanstack/react-query";
import { loaderTables } from "../api/loader";

export const Tables = () => {
  const { data, error, isFetching } = useQuery({
    queryKey: ["tables"],
    queryFn: loaderTables,
  });

  if (error) {
    return <div>error</div>;
  }

  if (isFetching) {
    return <div>loading...</div>;
  }

  return (
    <>
      <h2>tables</h2>
      <ul>{data?.map((table: any) => <li>{table?.name}</li>)}</ul>
    </>
  );
};
