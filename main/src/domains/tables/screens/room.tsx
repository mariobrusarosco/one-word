import { useState } from "react";
import { useParams } from "react-router-dom";

export const RoomScreen = () => {
  const { roomId } = useParams<{ roomId: string; tableId: string }>();
  const [messages, setMessages] = useState<string[]>(["Welcome!"]);
  const [text, onChangeText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ text });

    setMessages([...messages, text]);
  };

  return (
    <div>
      <h3>Room: {roomId}</h3>

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
