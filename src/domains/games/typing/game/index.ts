import type { GamePhaseStatuses } from "@/domains/games/typing/phase";
import type { IGamePartipant } from "@/domains/games/typing/participant";

export interface IGame {
  activePhase: GamePhaseStatuses;
  rotation: {
    leadPlayer: IGamePartipant;
    leadPlayerIndex: number;
    isMemberLeadPlayer: boolean;
    rotateToNextPlayer: () => void;
  };
  participants: IGamePartipant[];
  actions: IGameActions;
}

export interface IGameActions {
  // setLeadPlayer: (player: string) => void
  // setGamePhases: (phases: IGamePhase[]) => void
  // setGameScore: (score: number) => void
  // setChosenWord: (word: string) => void
  // setSimilarWords: (words: ISimilarWord[]) => void
  moveToNextPhase: (phase: GamePhaseStatuses) => void;
  updateGameOnSocket: (game: IGame) => void;
}

export type IGameHook = IGame & IGameActions;

export interface IGameSocket {
  waitingRoomParticipants: IGamePartipant[];
  emitGameUpdate: (gameId: string, game: IGame) => void;
  onGameUpdate: (callback: (game: IGame) => void) => void;
}

export interface IGameHandlers {
  updateGameOnSocket: (game: IGame) => void;
}
