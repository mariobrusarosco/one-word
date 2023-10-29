import { useQuery } from "@tanstack/react-query";
import { loader } from "../loader";

export const Tables = () => {
  const { data, error, isFetching } = useQuery({
    queryKey: ["tables"],
    queryFn: loader,
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
      <ul>
        {data?.map((table: any) => (
          <li>{table?.name}</li>
        ))}
      </ul>
    </>
  );
};
