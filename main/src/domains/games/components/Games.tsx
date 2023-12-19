import { useQuery } from "@tanstack/react-query";
import { loaderGames } from "../api/loader";

export const Games = () => {
  const { data, error, isFetching } = useQuery({
    queryKey: ["games"],
    queryFn: loaderGames,
  });

  if (error) {
    return <div>error</div>;
  }

  if (isFetching) {
    return <div>loading...</div>;
  }

  return (
    <>
      <h2>Games</h2>
      <ul>{data?.map((game: any) => <li>{game?.name}</li>)}</ul>
    </>
  );
};
