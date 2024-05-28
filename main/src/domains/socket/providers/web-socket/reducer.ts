import { SocketEvents } from "../../typing/enums";
import { SocketState, Action } from "../../typing/interfaces";

export const reducer = (state: SocketState, action: Action) => {
  const { payload, type } = action;
  switch (type) {
    case SocketEvents.CONNECTED: {
      console.log(
        "[SOCKET] REDUCER " + SocketEvents.CONNECTED + "+",
        payload.connected
      );
      return {
        ...state,
        socketInstance: payload,
        connected: payload.connected,
      };
    }
    case SocketEvents.DISCONNECTED: {
      console.log("[SOCKET] REDUCER " + SocketEvents.DISCONNECTED + "-");
      return { ...state, socketInstance: null };
    }
    case SocketEvents.JOIN_TABLE: {
      console.log("[SOCKET] REDUCER " + SocketEvents.JOIN_TABLE + "/", payload);

      state.socketInstance?.emit(SocketEvents.JOIN_TABLE, payload.tableId);

      return { ...state, lastActiveTableId: payload.tableId };
    }
    case SocketEvents.LEAVE_TABLE: {
      console.log("[SOCKET] REDUCER " + SocketEvents.JOIN_TABLE + "}");
      state.socketInstance?.emit(SocketEvents.LEAVE_TABLE, payload.tableId);

      return { ...state };
    }
    default: {
      throw new Error(`Unhandled action type: ${action["type"]}`);
    }
  }
};
