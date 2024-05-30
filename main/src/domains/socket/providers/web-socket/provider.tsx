import { io } from "socket.io-client";
import { createContext, useEffect, useReducer } from "react";
import { SocketEvents } from "../../typing/enums";
import { ContextProps } from "../../typing/interfaces";
import { reducer } from "./reducer";

const WebSocketContext = createContext<ContextProps>(undefined);

const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    socketInstance: null,
    connected: false,
    lastActiveTableId: undefined,
  });

  useEffect(() => {
    const handleInitialConnection = async () => {
      const username = localStorage?.getItem("username");
      const socketInstance = io(import.meta.env.VITE_ONE_WORD_SOCKET_URL, {
        autoConnect: false,
      });
      socketInstance.auth = { id: socketInstance.id, username };
      socketInstance.connect();

      // socketInstance.onAny((event, ...args) => {
      //   console.log("[SOCKET] onAny ", event, args);
      // });

      socketInstance?.on("connect", () => {
        dispatch({ type: SocketEvents.CONNECTED, payload: socketInstance });
      });

      // socketInstance?.on("update-chat-messages", () => {
      //   alert("global pega!");
      // });

      socketInstance?.on("disconnect", () => {
        dispatch({ type: SocketEvents.DISCONNECTED, payload: null });
      });

      return () => socketInstance.disconnect();
    };

    try {
      handleInitialConnection();
    } catch (error) {
      console.error(
        "TRYNG TO CONNECT TO SOCKET -[SOCKET CONNECTION] - [ERROR]",
        error
      );
    }
  }, []);

  return (
    <WebSocketContext.Provider value={{ dispatch, state }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export { WebSocketProvider, WebSocketContext };
