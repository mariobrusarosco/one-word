"use client";

import React, { useEffect, useReducer } from "react";
import { io as ClientIO } from "socket.io-client";

const WebSocketContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

type Action =
  | { type: "connect"; payload: any }
  | { type: "disconnect"; payload: any };
type Dispatch = (action: Action, payload: any) => void;
type State = { connected: boolean; socketInstance: any };
type WebSocketProviderProps = { children: React.ReactNode };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "connect": {
      return { ...state, connected: true, socketInstance: action.payload };
    }
    case "disconnect": {
      return { ...state, connected: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action["type"]}`);
    }
  }
};

export const socketInitializer = async (dispatch: React.Dispatch<Action>) => {
  const socketInstance = new (ClientIO as any)(
    process.env.NEXT_PUBLIC_SITE_URL,
    {
      path: "/api/socket/io",
      addTrailingSlash: true,
    }
  );

  socketInstance.on("connect", () => {
    dispatch({ type: "connect", payload: socketInstance });
  });

  socketInstance.on("test_event", (data: any) => {
    alert(data);
  });

  socketInstance.on("disconnect", () => {
    dispatch({ type: "disconnect", payload: null });
  });

  return () => socketInstance.disconnect();
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
