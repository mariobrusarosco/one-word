"use client";
import { Button } from "@/domains/shared/components/ui/button";
import axios from "axios";

interface Props {
  params: { inviteCode: string };
}

const InvitationScreen = ({ params }: Props) => {
  const addParticipantToTable = async () => {
    try {
      const result = await axios.post("/api/invite", {
        inviteCode: params.inviteCode,
      });

      console.log({ result });
    } catch (error) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[InvitationScreen]: ", error);
    }
  };

  return (
    <div>
      <h2 className="text-5xl text-primary-base">Inviation</h2>
      <div className="grid place-items-center gap-4">
        <p>Do you wanna join this table?</p>
        <p>{params.inviteCode}</p>

        <Button size="sm" onClick={addParticipantToTable}>
          Yes
        </Button>
      </div>
    </div>
  );
};

export default InvitationScreen;
