import { Socket, io } from "socket.io-client";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { SocketEvents } from "../../typing/enums";
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
  const isMounted = useRef(false);

  const onEvent = useCallback(
    (event: SocketEvents, callback: any) => {
      if (connected) {
        socket?.on(event, callback);
      }
    },
    [connected, socket]
  ) satisfies OnEvent;

  const emitEvent = useCallback(
    (event, data) => {
      console.log("[DEBUG] 1.0 - emitEvent()", connected);
      if (connected) {
        socket?.emit(event, data);
      }
    },
    [connected, socket]
  ) satisfies EmitEvent;

  useEffect(() => {
    console.log("[DEBUG] Checking...", isMounted.current);

    if (isMounted.current) return;

    console.log("[DEBUG] Not mounted...", isMounted.current);

    const handleInitialConnection = async () => {
      console.log(
        "[DEBUG] Handling Initial Connect mounted...",
        isMounted.current
      );
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
      isMounted.current = true;
    } catch (error) {
      console.error(
        "COULD NOT CONNECT TO SOCKET - [SOCKET CONNECTION] - [ERROR]",
        error
      );
    }
  }, []);

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
