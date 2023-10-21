"use client";

import React, { useReducer } from "react";

const WebSocketContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

type Action = { type: "connect" } | { type: "desconnect" };
type Dispatch = (action: Action) => void;
type State = { connected: boolean };
type WebSocketProviderProps = { children: React.ReactNode };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "connect": {
      return state;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const WebSocketProvider = ({ children }: WebSocketProviderProps) => {
  const [state, dispatch] = useReducer(reducer, { connected: false });
  const value = { state, dispatch };

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
