import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useWebSocket } from "../../socket/providers/web-socket";
import { SocketEvents } from "../../socket/typing/enums";

export const RoomScreen = () => {
  const { roomId, tableId } = useParams<{ roomId: string; tableId: string }>();
  const [messages, setMessages] = useState<string[]>(["Welcome!"]);
  const [text, onChangeText] = useState("");
  const { dispatch, state } = useWebSocket();

  useEffect(() => {
    console.log("[CHAT]", { tableId, roomId });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state.socketInstance);
    console.log({ text });
    // socketState.socketInstance.emit(SocketEvents.CHAT_MESSAGE_SENDING, {
    //   text,
    // });
  };

  const connectToChat = () => {
    dispatch({ type: SocketEvents.CONNECT, payload: { tableId, roomId } });

    // socketState.socketInstance.emit(SocketEvents.CHAT_CONNECT, {
    //   tableId,
    //   roomId,
    // });
  };

  return (
    <div>
      <h3>Room: {roomId}</h3>

      <button onClick={connectToChat}>Connect to Chat</button>

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
    </div>
  );
};
