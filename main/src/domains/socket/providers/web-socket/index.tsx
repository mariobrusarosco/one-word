import React, { useEffect, useReducer } from "react";
import { io as ClientIO } from "socket.io-client";
import { SocketEvents } from "../../typing/enums";
import { act } from "react-dom/test-utils";

const WebSocketContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

type Action =
  | { type: SocketEvents.CONNECT; payload: any }
  | { type: SocketEvents.DISCONNECT; payload: any }
  | { type: SocketEvents.GET_NAMESPACES; payload: any };

type Dispatch = (action: Action, payload: any) => void;
type State = {
  connected: boolean;
  socketInstance: any;
  namespaces: { id: string; name: string }[];
};
type WebSocketProviderProps = { children: React.ReactNode };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "connect": {
      return { ...state, connected: true, socketInstance: action.payload };
    }
    case "disconnect": {
      return { ...state, connected: false };
    }
    case SocketEvents.GET_NAMESPACES: {
      return { ...state, namespaces: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action["type"]}`);
    }
  }
};

export const socketInitializer = async (dispatch: React.Dispatch<Action>) => {
  const chatsSocketInstance = ClientIO("http://localhost:3000/chats");
  const gamesSocketInstance = ClientIO("http://localhost:3000/games");

  chatsSocketInstance.on(SocketEvents.CONNECT, () => {
    dispatch({ type: SocketEvents.CONNECT, payload: chatsSocketInstance });
  });

  chatsSocketInstance.on(SocketEvents.GET_NAMESPACES, (data: any) => {
    dispatch({ type: SocketEvents.GET_NAMESPACES, payload: data });
  });

  chatsSocketInstance.on(SocketEvents.DISCONNECT, () => {
    dispatch({ type: SocketEvents.DISCONNECT, payload: null });
  });

  gamesSocketInstance.on("connect", () => {
    console.log("games connected");
  });

  return () => {
    chatsSocketInstance.disconnect();
    gamesSocketInstance.disconnect();
  };
};

const WebSocketProvider = ({ children }: WebSocketProviderProps) => {
  const [state, dispatch] = useReducer(reducer, {
    connected: false,
    socketInstance: null,
  });
  const value = { state, dispatch };

  useEffect(() => {
    socketInitializer(dispatch);
  }, []);

  return (
    <WebSocketContext.Provider value={value}>
      {children}
    </WebSocketContext.Provider>
  );
};

const useWebSocket = () => {
  const context = React.useContext(WebSocketContext);

  if (context === undefined) {
    throw new Error("useWebSocket must be used within a WebSocketContext");
  }
  return context;
};

export { WebSocketProvider, useWebSocket };
