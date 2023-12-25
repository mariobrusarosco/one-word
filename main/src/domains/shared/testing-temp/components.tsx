import { useQuery } from "@tanstack/react-query";
import { loaderGames } from "../../games/api/loader";
import { useToggle } from "./hook";

export const StaticListGames = () => {
  const games = [
    { id: 1, name: "Game 1" },
    { id: 2, name: "Game 2" },
    { id: 3, name: "Game 3" },
  ];

  return (
    <>
      <h2>Games</h2>
      <ul>
        {games?.map((game) => (
          <li>{game?.name}</li>
        ))}
      </ul>
    </>
  );
};

export const DynamicListGames = () => {
  const { data, error, isFetching } = useQuery({
    queryKey: ["games"],
    queryFn: loaderGames,
  });

  console.log({ error });
  if (error) {
    return <div>error: {error.message}</div>;
  }

  if (isFetching) {
    return <div>loading...</div>;
  }

  return (
    <>
      <h3>Games</h3>
      <ul>
        {data?.map((game: any) => (
          <li>{game?.name}</li>
        ))}
      </ul>
    </>
  );
};

export const Toggle = (
  { startVisible }: { startVisible?: boolean } = { startVisible: false }
) => {
  const { isVisible, toggle } = useToggle({ startVisible });

  return (
    <>
      <button onClick={toggle}>Toggle</button>
      {isVisible && <h1>Hello!</h1>}
    </>
  );
};

export const AsyncToggle = () => {
  const { isVisible, waitFourSecondsAndToggle } = useToggle();

  return (
    <>
      <button onClick={waitFourSecondsAndToggle}>async toggle</button>
      {isVisible && <h1>Async Hello!</h1>}
    </>
  );
};
