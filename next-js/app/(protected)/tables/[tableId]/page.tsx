"use client";
import { Button } from "@/domains/shared/components/ui/button";
import { useWebSocket } from "@/domains/shared/providers/web-socket";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { memo } from "react";

export const metadata: Metadata = {
  // title: {
  // absolute: "sadsadsada",
  // template: "aaa - %s",
  // },
  title: "nao entendi entao",
};

interface Props {
  params: { tableId: string };
}

const TableScreen = ({ params }: Props) => {
  const { state } = useWebSocket();
  // const { open } = useModal();
  // const name = useNameTest();
  // const router = useRouter();
  // const modalActions = useModalActions();

  // console.log("TableScreen: ", { activeID, name });
  // const { UI } = useOptmizedModal();

  return (
    <main>
      {state.connected ? "connected" : "disconnected"}
      <h2>
        Table: asdasdsa
        {params.tableId}
        <Button
          variant="default"
          // onClick={() => open({ ui: "create-invite", id: "" })}
        >
          Start Round
        </Button>
        {/* <Button variant="secondary" onClick={() => modalActions.setID("oba")}>
          Start Round
        </Button> */}
        <Button
          variant="secondary"
          // onClick={() =>
          // router.push("/tables/e4cdaeaf-4781-4d07-ac30-1cb7459b79fb?oba=1")
          // }
        >
          modal
        </Button>
      </h2>
    </main>
  );
};

export default TableScreen;
