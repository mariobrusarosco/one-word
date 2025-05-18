export interface IGamePhase {
  id: GamePhaseStatuses;
  label: string;
  active: boolean;
}

export const GamePhaseStatuses = {
  NOT_STARTED: "NOT_STARTED",
  CHOOSING_THE_WORD: "CHOOSING_THE_WORD",
  WRITING_SIMILAR_WORDS: "WRITING_THE_WORD",
  GUESSING_THE_WORD: "GUESSING_THE_WORD",
  REMOVING_SIMILAR_WORDS: "REMOVING_SIMILAR_WORDS",
  RESULTS: "RESULTS",
};

export type GamePhaseStatuses =
  (typeof GamePhaseStatuses)[keyof typeof GamePhaseStatuses];

export interface IGamePhases extends Map<GamePhaseStatuses, IGamePhase> {}
