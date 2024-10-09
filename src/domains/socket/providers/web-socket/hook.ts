import { useContext } from "react";
import { WebSocketContext } from "./provider";

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);

  if (context === undefined) {
    throw new Error("useWebSocket must be used within a WebSocketContext");
  }
  return context;
};
