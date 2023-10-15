"use client";
import { Button } from "@/domains/shared/components/ui/button";
import { Plus } from "lucide-react";

interface Props {
  params: { gameId: string };
}
import "@uploadthing/react/styles.css";

const GameScreen = ({ params }: Props) => {
  return (
    <main>
      <div className="flexl gap-2">
        <div className="flex items-end gap-2 mb-6">
          <Button variant="default" size="sm">
            create
          </Button>
          <Button variant="secondary" size="md">
            create
          </Button>
          <Button variant="outline" size="lg">
            create
          </Button>
        </div>

        <div className="flex items-end gap-2 mb-6">
          <Button variant="danger" size="sm">
            create
          </Button>
          <Button variant="ghost" size="md">
            create
          </Button>
          <Button variant="link" size="lg">
            create
          </Button>
        </div>

        <div className="flex items-end gap-2 mb-6">
          <Button variant="default" size="sm" roundness="full">
            x
          </Button>
          <Button variant="default" size="md" roundness="full">
            x
          </Button>
          <Button variant="default" size="lg" roundness="full">
            x
          </Button>
        </div>

        <Button size="sm" roundness="full" className="text-2xl">
          <Plus />
        </Button>

        <Button size="md" roundness="full" className="text-2xl">
          <Plus />
        </Button>

        <Button size="lg" roundness="full" className="text-2xl">
          <Plus />
        </Button>

        <Button
          variant="secondary"
          size="md"
          roundness="full"
          className="text-2xl"
        >
          <Plus />
        </Button>

        <Button
          variant="secondary"
          size="md"
          roundness="full"
          className="text-2xl"
        >
          <Plus />
        </Button>

        <Button
          variant="secondary"
          size="md"
          roundness="full"
          className="text-2xl"
        >
          <Plus />
        </Button>
      </div>
      <h2>
        Game:
        {params.gameId}
        <Button variant="default">Start Game</Button>
      </h2>
    </main>
  );
};

export default GameScreen;
