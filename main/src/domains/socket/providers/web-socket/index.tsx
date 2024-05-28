// import React, { useEffect useState } from "react";
// import { io as ClientIO } from "socket.io-client";
// import { SocketEvents } from "../../typing/enums";
// import { useParams } from "react-router-dom";
import { Socket, io } from "socket.io-client";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { SocketEvents } from "../../typing/enums";
import { S } from "vitest/dist/reporters-5f784f42.js";
import { connect } from "http2";

// const WebSocketContext = React.createContext<
//   { state: State; dispatch: Dispatch } | undefined
// >(undefined);

// type Action =
//   | { type: SocketEvents.CONNECT_TO_SOCKET; payload: any }
//   | { type: SocketEvents.DISCONNECT; payload: any }
//   | { type: SocketEvents.CREATE_GAME; payload: any };

// type Dispatch = (action: Action) => void;
// type State = {
//   socketInstance: any;
//   stablishSocketConnection: any;
// };
// type WebSocketProviderProps = { children: React.ReactNode };

// // const reducer = (state: State, action: Action) => {
// //   switch (action.type) {
// //     case SocketEvents.CONNECT_TO_SOCKET: {
// //       const chatsSocketInstance = ClientIO("http://localhost:3000", {
// //         query: {
// //           tableId: action.payload.tableId,
// //           roomId: action.payload.roomId,
// //         },
// //       });

// //       return { ...state, socketInstance: chatsSocketInstance };
// //     }
// //     case "disconnect": {
// //       return { ...state };
// //     }
// //     case SocketEvents.CREATE_GAME: {
// //       state.socketInstance.emit(SocketEvents.CREATE_GAME, {
// //         tableId: action.payload.tableId,
// //         roomId: action.payload.roomId,
// //       });
// //       return { ...state, namespaces: action.payload };
// //     }
// //     default: {
// //       throw new Error(`Unhandled action type: ${action["type"]}`);
// //     }
// //   }
// // };

// //

// const WebSocketProvider = ({ children }: WebSocketProviderProps) => {
//   const [socketInstance] = useState(null);
//   const [gameSocketInstance, setGameSocketInstance] = useState(null);

//   const stablishSocketConnection = () => {
//     const io = ClientIO("http://localhost:3000", { autoConnect: false });

//     io.onAny((event, ...args) => {
//       console.log("[SOCKET]", event, args);
//     });

//     // io.of("80b384d9-d585-4996-adcf-db11004d31cc").on(
//     //   "chat-message-incoming",
//     //   (message) => {
//     //     alert("opa" + message);
//     //   }
//     // );

//     // setSocketInstance(io);
//   };

//   const setGameSocket = () => {
//     const io = ClientIO("http://localhost:3000");

//     io.on("chat-message-incoming", (message) => {
//       alert(message);
//     });

//     // io.of("80b384d9-d585-4996-adcf-db11004d31cc").on(
//     //   "chat-message-incoming",
//     //   (message) => {
//     //     alert("opa" + message);
//     //   }
//     // );

//     setGameSocketInstance(io);
//   };

//   useEffect(() => {
//     if (!socketInstance) {
//       stablishSocketConnection();
//     }
//   }, []);

//   const value = {
//     socketInstance,
//     stablishSocketConnection,
//     gameSocketInstance,
//     setGameSocket,
//   };

//   return (
//     <WebSocketContext.Provider value={{}}>
//       {children}
//     </WebSocketContext.Provider>
//   );
// };

// export { WebSocketProvider, useWebSocket };
type Action = { type: SocketEvents; payload: any };
// | { type: SocketEvents.DISCONNECTED; payload: any }
// | { type: SocketEvents.CREATE_GAME; payload: any };

type Dispatch = (action: Action) => void;

// type SocketInstance = Socket<any, any>;

type SocketState = {
  socketInstance: any;
  connected: boolean;
  lastActiveTableId: string | null;
};

const reducer = (state: SocketState, action: Action) => {
  const { payload, type } = action;
  switch (type) {
    case SocketEvents.CONNECTED: {
      console.log(
        "[SOCKET] REDUCER " + SocketEvents.CONNECTED + "}",
        payload.connected
      );
      return {
        ...state,
        socketInstance: payload,
        connected: payload.connected,
      };
    }
    case SocketEvents.DISCONNECTED: {
      console.log("[SOCKET] REDUCER " + SocketEvents.DISCONNECTED + "}");
      return { ...state, socketInstance: null };
    }
    case SocketEvents.JOIN_TABLE: {
      console.log("[SOCKET] REDUCER " + SocketEvents.JOIN_TABLE + "}");
      state.socketInstance?.emit(SocketEvents.JOIN_TABLE, payload.tableId);

      return { ...state, lastActiveTableId: payload.tableId };
    }
    case SocketEvents.LEAVE_TABLE: {
      console.log("[SOCKET] REDUCER " + SocketEvents.JOIN_TABLE + "}");
      state.socketInstance?.emit(SocketEvents.LEAVE_TABLE, payload.tableId);

      return { ...state };
    }

    case SocketEvents.CREATE_GAME: {
      console.log("[SOCKET] REDUCER " + SocketEvents.CREATE_GAME + "}");
      return { ...state };
    }
    default: {
      throw new Error(`Unhandled action type: ${action["type"]}`);
    }
  }
};

const WebSocketContext = createContext<
  { state: SocketState; dispatch: Dispatch } | undefined
>(undefined);

type WebSocketProviderProps = { children: React.ReactNode };

const WebSocketProvider = ({ children }: WebSocketProviderProps) => {
  // const { tableId } = useParams<{ tableId: string }>();
  const [state, dispatch] = useReducer(reducer, {
    socketInstance: null,
    connected: false,
    lastActiveTableId: null,
  });

  useEffect(() => {
    // if (!tableId) {
    //   return console.error(
    //     "------[SOCKET]-----TableId is required to connect to the socket"
    //   );
    // }

    try {
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

      socketInstance?.on("disconnect", () => {
        dispatch({ type: SocketEvents.DISCONNECTED, payload: null });
      });

      return () => socketInstance.disconnect();
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

const useWebSocket = () => {
  const context = useContext(WebSocketContext);

  if (context === undefined) {
    throw new Error("useWebSocket must be used within a WebSocketContext");
  }
  return context;
};

export { WebSocketProvider, useWebSocket };
