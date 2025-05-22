import { useState } from "react";
import type { IGamePartipant } from "@/domains/games/typing/participant";
import type { IMember } from "@/domains/auth/typing/enums-and-interfaces";

export const useGameRotation = ({
  gameParticipants,
  member,
}: {
  gameParticipants: IGamePartipant[];
  member: IMember | undefined;
}) => {
  const [leadPlayerIndex, setLeadPlayerIndex] = useState<number>(0);
  const leadPlayer = gameParticipants[leadPlayerIndex];
  const isMemberLeadPlayer = Boolean(member && leadPlayer && leadPlayer.id === member.id);

  const rotateToNextPlayer = () => {
    if (!member) return;
    const nextIndex = (leadPlayerIndex + 1) % gameParticipants.length;
    setLeadPlayerIndex(nextIndex);
  };

  console.log("[DEBUG] [gameParticipants]", leadPlayer?.username);

  return {
    leadPlayer,
    leadPlayerIndex,
    isMemberLeadPlayer,
    rotateToNextPlayer,
  };
};
