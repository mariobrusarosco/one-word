import { useTablesContext } from "@/domains/tables/provider";

const GameScreen = () => {
  const tablesContext = useTablesContext();

  return (
    <div>
      <h2>Game</h2>

      <ul className="grid overflow-auto h-full pb-10">
        {tablesContext.fakeParticipants.map((participant) => (
          <li key={participant.userId}>{participant.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameScreen;
