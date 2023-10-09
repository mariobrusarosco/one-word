"use client";
import { Button } from "@/domains/shared/components/ui/button";
import { useGlobalModal } from "@/domains/shared/providers/store";
import { Plus } from "lucide-react";

interface Props {
  params: { gameId: string };
}

import { UploaderEndpoints } from "@/app/api/uploadthing/core";
import {
  UploadButton,
  UploadDropzone,
} from "@/domains/shared/utils/uploadthing";
import "@uploadthing/react/styles.css";

const GameScreen = ({ params }: Props) => {
  const { ModalElement, counter, increment, openModal } = useGlobalModal();

  console.log("GameScreen ---", ModalElement);

  return (
    <main>
      <ModalElement openModalWithId="game-screen-modal">
        Ola mundao
      </ModalElement>
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

        <Button
          size="sm"
          roundness="full"
          onClick={() => openModal("create-table-modal")}
          className="text-2xl"
        >
          <Plus />
        </Button>

        <Button
          size="md"
          roundness="full"
          onClick={() => openModal("create-table-modal")}
          className="text-2xl"
        >
          <Plus />
        </Button>

        <Button
          size="lg"
          roundness="full"
          onClick={() => openModal("create-table-modal")}
          className="text-2xl"
        >
          <Plus />
        </Button>

        <Button
          variant="secondary"
          size="md"
          roundness="full"
          onClick={() => openModal("create-table-modal")}
          className="text-2xl"
        >
          <Plus />
        </Button>

        <Button
          variant="secondary"
          size="md"
          roundness="full"
          onClick={() => openModal("create-table-modal")}
          className="text-2xl"
        >
          <Plus />
        </Button>

        <Button
          variant="secondary"
          size="md"
          roundness="full"
          onClick={() => openModal("create-table-modal")}
          className="text-2xl"
        >
          <Plus />
        </Button>
      </div>
      <h2>
        Game:
        {params.gameId}
        <Button variant="default">Start Game</Button>
        <h2>Modal: {counter}</h2>
        <button onClick={increment}>+</button>
        <button onClick={() => openModal("game-screen-modal")}>open</button>
      </h2>
    </main>
  );
};

export default GameScreen;
