import { Socket, io } from "socket.io-client";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { SocketEvents } from "../../typing/enums";
import { useMember } from "@/domains/member/hooks/use-member";

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
  const member = useMember();
  const [socket, setSocket] = useState<SocketInstance | null>(null);
  const [connected, setConnected] = useState<boolean>(false);
  const isMounted = useRef(false);

  const onEvent = useCallback(
    <T,>(event: SocketEvents, callback?: (args: T) => void) =>
      connected && socket?.on(event, callback as (args: T) => void),
    [connected, socket]
  ) satisfies OnEvent;

  const emitEvent = useCallback(
    (event, data) => connected && socket?.emit(event, data),
    [connected, socket]
  ) satisfies EmitEvent;

  useEffect(() => {
    if (isMounted.current) return;

    const handleInitialConnection = async () => {
      const username = `${member?.data?.firstName} ${member?.data?.lastName}`;

      const socketInstance = io(import.meta.env.VITE_ONE_WORD_SOCKET_URL, {
        autoConnect: false,
      });
      socketInstance.auth = {
        id: socketInstance.id,
        username,
        email: member?.data?.email,
        userId: member?.data?.id,
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
      if (!isMounted.current) {
        handleInitialConnection();
      }
      isMounted.current = true;
    } catch (error) {
      console.error(
        "COULD NOT CONNECT TO SOCKET - [SOCKET CONNECTION] - [ERROR]",
        error
      );
    }
  }, [member?.data?.firstName, member?.data?.lastName, member?.data?.email, member?.data?.id]);

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
