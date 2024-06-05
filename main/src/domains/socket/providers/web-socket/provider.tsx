import { Socket, io } from "socket.io-client";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { SocketEvents } from "../../typing/enums";
import { useAuth } from "@/domains/auth/hooks/use-auth";

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
  const { data: authenticatedUser } = useAuth();
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
      if (connected) {
        socket?.emit(event, data);
      }
    },
    [connected, socket]
  ) satisfies EmitEvent;

  const createNamespace = useCallback((namespace: string) => {
    const socketInstance = io(
      import.meta.env.VITE_ONE_WORD_SOCKET_URL + namespace,
      {
        autoConnect: false,
      }
    );
    socketInstance.auth = {
      id: socketInstance.id,
      username,
    };
    socketInstance.connect();

    socketInstance?.on("connect", () => {
      setSocket(socketInstance);
      setConnected(true);
    });
  }, []);

  useEffect(() => {
    if (isMounted.current) return;

    const handleInitialConnection = async () => {
      const username = `${authenticatedUser?.firstName} ${authenticatedUser?.lastName}`;

      const socketInstance = io(import.meta.env.VITE_ONE_WORD_SOCKET_URL, {
        autoConnect: false,
      });
      socketInstance.auth = {
        id: socketInstance.id,
        username,
      };
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
  }, [authenticatedUser]);

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
