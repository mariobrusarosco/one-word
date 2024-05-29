import { SocketEvents } from "../../typing/enums";
import { SocketState, Action } from "../../typing/interfaces";

export const reducer = (state: SocketState, action: Action) => {
  const { payload, type } = action;
  switch (type) {
    case SocketEvents.CONNECTED: {
      return {
        ...state,
        socketInstance: payload,
        connected: payload?.connected ?? false,
      };
    }
    case SocketEvents.DISCONNECTED: {
      return {
        ...state,
        socketInstance: null,
      };
    }
    case SocketEvents.JOIN_TABLE: {
      state.socketInstance?.emit(SocketEvents.JOIN_TABLE, payload.tableId);

      return {
        ...state,
        lastActiveTableId: payload.tableId,
      };
    }
    case SocketEvents.LEAVE_TABLE: {
      state.socketInstance?.emit(SocketEvents.LEAVE_TABLE, payload.tableId);

      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};