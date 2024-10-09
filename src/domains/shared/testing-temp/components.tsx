import { useQuery } from "@tanstack/react-query";
import { loaderGames } from "../../games/api/loader";
import { useFetch, useToggle } from "./hook";
import { Game } from "../../games/typing/interfaces";
import { Table } from "../../tables/typing/interfaces";

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
        {data?.map((game: Game) => (
          <li>{game?.name}</li>
        ))}
      </ul>
    </>
  );
};

export const DynamicListTables = () => {
  const { data, isSuccess } = useFetch("tables", "loaderTables");

  console.log("useFetch", { data, isSuccess });
  return (
    <>
      <h3>Tables = using useFetch</h3>
      <ul>
        {data?.map((table: Table) => (
          <li>{table?.name}</li>
        ))}
      </ul>
    </>
  );
};

export const Toggle = ({ startVisible }: { startVisible?: boolean }) => {
  const { isVisible, toggle } = useToggle({ startVisible: !!startVisible });

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

// describe("useFetch", () => {
//   it("should return the correct values", async () => {
//     server.use(
//       ...[
//         http.get(mockOneWordApi("/foo-bar"), async () => {
//           return HttpResponse.json([]);
//         }),
//       ]
//     );
//     const { result } = renderHook(() => useFetch("foo-bar", "queryKey"), {
//       wrapper: createReactQueryWrapper(),
//     });

//     await waitFor(() => expect(result.current.isSuccess).toBe(true));
//     const { data } = result.current;

//     expect(data).toEqual([]);
//   });
// });
