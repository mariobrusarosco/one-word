export interface ISimilarWord {
    userId: string
    userName: string
    value: string
}


export interface IGameActions {
    setLeadPlayer: (player: string) => void
    setGamePhases: (phases: IGamePhase[]) => void
    setGameScore: (score: number) => void
    setChosenWord: (word: string) => void
    setSimilarWords: (words: ISimilarWord[]) => void
}  


export interface IGameLeadRotation {
    leadPlayer: string
    leadPlayerIndex: number
    initializeRotation: () => void
    rotateToNextPlayer: () => void
}


export type IGameHook = IGameState & IGameActions

export interface IGamePartipant {
    userID: string;
    username: string;
}

export interface IGameParticipantExitPayload {
    user: IGamePartipant;
    message: string;
    timestamp: string;
}

export interface IGameState {
  // phases: IGamePhases;
  activePhase: GamePhaseStatus;
  rotation: {
    leadPlayer: string;
  //   leadPlayerIndex: number;
    isMemberLeadPlayer: boolean;
  };
  participants: IGamePartipant[];
  chosenWord?: string;
  similarWords?: ISimilarWord[];
  guessedWords?: string[];
}

export interface IGameHandlers {
  updateGameOnSocket: (game: IGameState) => void;
}


export interface IGameWords {
  target: string
  similars: string[]
}

export interface IGameRotation {
  leadPlayer: string
  leadPlayerIndex: number
  isMemberLeadPlayer: boolean
}

export interface IGamePhase {
  id: GamePhaseStatus
  label: string
  active: boolean
}

export interface IGamePhases extends Map<GamePhaseStatus, IGamePhase> {}


export enum GamePhaseStatus {
  NOT_STARTED = 'NOT_STARTED',
  CHOOSING_THE_WORD = 'CHOOSING_THE_WORD',
  WRITING_SIMILAR_WORDS = 'WRITING_THE_WORD',
  GUESSING_THE_WORD = 'GUESSING_THE_WORD',
  REMOVING_SIMILAR_WORDS = 'REMOVING_SIMILAR_WORDS',
  RESULTS = 'RESULTS',
}

export interface IGameSocket {
  waitingRoomParticipants: IGamePartipant[];
  emitGameUpdate: (gameState: IGameState) => void;
  onGameUpdate: (callback: (gameState: IGameState) => void) => void;
}

