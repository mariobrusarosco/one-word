import { Socket, io } from "socket.io-client";
import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";
import { SocketEvents } from "../../typing/enums";
import { reducer } from "./reducer";
import { c } from "vitest/dist/reporters-5f784f42.js";

export type SocketInstance = Socket;

export type SocketState = {
  on: OnEvent;
  emit: EmitEvent;
  socket: SocketInstance | null;
  connected: boolean;
};

type OnEvent = <T>(event: SocketEvents, callback?: (args: T) => void) => void;
type EmitEvent = <T>(event: SocketEvents, data?: T) => void;

export type WebSocketContextProps = SocketState | undefined;

const WebSocketContext = createContext<WebSocketContextProps>(undefined);

const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<SocketInstance | null>(null);
  const [connected, setConnected] = useState<boolean>(false);

  const onEvent = (event, callback) => {
    console.log(
      "[DEBUG] 1.0 - onEvent useCallback",
      event,
      "connected:",
      connected
    );
    if (connected) {
      console.log(
        "[DEBUG] - we do have a state to call the on()  - e: ",
        event
      );
      socket?.on(event, callback);
    } else {
      console.log(
        "[DEBUG] - we DONT have a state to call the on() - e: ",
        event
      );
    }
  };

  const emitEvent = useCallback(
    (event, data) => {
      if (connected) {
        console.log(
          "[DEBUG] - we do have a state to call the emit() - e: ",
          event
        );
        socket?.emit(event, data);
      }
    },
    [connected, socket]
  ) satisfies EmitEvent;

  useEffect(() => {
    const handleInitialConnection = async () => {
      const username = localStorage?.getItem("username");
      const socketInstance = io(import.meta.env.VITE_ONE_WORD_SOCKET_URL, {
        autoConnect: false,
      });
      socketInstance.auth = { id: socketInstance.id, username };
      socketInstance.connect();

      socketInstance?.on("connect", () => {
        setSocket(socketInstance);
        setConnected(true);
      });

      socketInstance?.on("disconnect", () => {
        setSocket(null);
        setConnected(false);
      });

      return () => socketInstance.disconnect();
    };

    try {
      handleInitialConnection();
    } catch (error) {
      console.error(
        "COULD NOT CONNECT TO SOCKET - [SOCKET CONNECTION] - [ERROR]",
        error
      );
    }
  }, []);

  // const value: ContextProps = {
  //   state,
  //   dispatch,
  //   on: onEvent,
  //   emit: emitEvent,
  //   socket,
  // };

  return (
    <WebSocketContext.Provider
      value={{
        on: onEvent,
        emit: emitEvent,
        socket,
        connected,
      }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};

export { WebSocketProvider, WebSocketContext };
