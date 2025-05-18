import { ISocketUser } from "@/domains/socket/typing/interfaces";

export interface IGamePartipant extends ISocketUser {}

export interface IGameParticipantExitPayload {
    user: IGamePartipant;
    message: string;
    timestamp: string;
}
