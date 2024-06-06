import { Separator } from "@/domains/ui-system/components/ui/separator";

const GameScreen = () => {
  return (
    <div data-ui="game-screen">
      <div className="heading font-extralight">
        <div className="flex justify-between items-center font-sans ">
          <p className="text-pink-500 dark:text-teal-800 text-3xl desktop:text-5xl">
            Game
          </p>
          <p className="table-name font-sans text-3xl text-teal-800 dark:text-white-100 desktop:text-5xl">
            Not Started
          </p>
        </div>

        <Separator className="bg-pink-500 my-4" />
      </div>

      <ul className="grid overflow-auto h-full pb-10">
        {/* {tableSocket.participants.map((participant) => (
          <li key={participant.userId}>{participant.username}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default GameScreen;
