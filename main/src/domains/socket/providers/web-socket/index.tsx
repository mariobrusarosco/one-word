// import React, { useEffect useState } from "react";
// import { io as ClientIO } from "socket.io-client";
// import { SocketEvents } from "../../typing/enums";
// import { useParams } from "react-router-dom";

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

// const useWebSocket = () => {
//   const context = React.useContext(WebSocketContext);

//   if (context === undefined) {
//     throw new Error("useWebSocket must be used within a WebSocketContext");
//   }
//   return context;
// };

// export { WebSocketProvider, useWebSocket };
