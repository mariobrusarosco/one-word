export interface IGameLeadRotation {
    leadPlayer: string
    leadPlayerIndex: number
    initializeRotation: () => void
    rotateToNextPlayer: () => void
}


export interface IGameRotation {
  leadPlayer: string
  leadPlayerIndex: number
  isMemberLeadPlayer: boolean
}
