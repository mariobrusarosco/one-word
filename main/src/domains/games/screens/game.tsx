import { useTableSocketManager } from "@/domains/tables/provider";

const GameScreen = () => {
  const tableSocket = useTableSocketManager();

  return (
    <div>
      <h2>Game</h2>

      <ul className="grid overflow-auto h-full pb-10">
        {tableSocket.participants.map((participant) => (
          <li key={participant.userId}>{participant.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameScreen;
