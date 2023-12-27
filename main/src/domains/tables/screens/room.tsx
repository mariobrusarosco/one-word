import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useWebSocket } from "../../socket/providers/web-socket";
import { SocketEvents } from "../../socket/typing/enums";

export const RoomScreen = () => {
  const { roomId, tableId } = useParams<{ roomId: string; tableId: string }>();
  const [messages, setMessages] = useState<string[]>(["Welcome!"]);
  const [text, onChangeText] = useState("");
  // const { dispatch, state } = useWebSocket();

  // useEffect(() => {
  // console.log("[CHAT]", { tableId, roomId });
  // }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ text });

    state.socketInstance.emit(SocketEvents.CHAT_MESSAGE_SENDING, text);

    setMessages([...messages, text]);
  };

  const createGame = () => {
    // dispatch({
    //   type: SocketEvents.CREATE_GAME,
    //   payload: { tableId, roomId },
    // });
    // socketState.socketInstance.emit(SocketEvents.CHAT_CONNECT, {
    //   tableId,
    //   roomId,
    // });
  };

  useEffect(() => {
    // dispatch({
    //   type: SocketEvents.CONNECT_TO_SOCKET,
    //   payload: { tableId, roomId },
    // });
  }, []);

  // console.log("[CHAT]", { state });

  return (
    <div>
      <p>
        Connection Status:{" "}
        {/* {state.socketInstance?.connected ? "connected" : "disconnected"} */}
      </p>
      <h3>Room: {roomId}</h3>

      <button onClick={createGame}>createGame</button>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              onChangeText(e.target.value);
            }}
          />

          <button>send</button>
        </form>
      </div>

      {messages?.map((message) => (
        <div>{message}</div>
      ))}
    </div>
  );
};
