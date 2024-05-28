import { SocketEvents } from "./enums";
import { Socket } from "socket.io-client";

export type Action =
  | {
      type: SocketEvents.CONNECTED;
      payload: SocketInstance | null;
    }
  | { type: SocketEvents.DISCONNECTED; payload: null }
  | {
      type: SocketEvents.JOIN_TABLE;
      payload: { tableId: string | undefined };
    }
  | {
      type: SocketEvents.LEAVE_TABLE;
      payload: { tableId: string | undefined };
    };

export type Dispatch = (action: Action) => void;

export type SocketInstance = Socket;

export type SocketState = {
  socketInstance: SocketInstance | null;
  connected: boolean;
  lastActiveTableId: string | undefined;
};

export type ContextProps =
  | { state: SocketState; dispatch: Dispatch }
  | undefined;
