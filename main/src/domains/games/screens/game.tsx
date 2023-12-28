import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "../../socket/providers/web-socket/socket";

export const GameScreen = () => {
  const { tableId } = useParams();
  const [text, onChangeText] = useState("");
  const [username, setUsername] = useState<string>("");
  const [messages, setMessages] = useState<string[]>(["Welcome!"]);
  const [users, setUsers] = useState<string[]>([]);

  const handleConnectToSocket = () => {
    socket.auth = { id: socket.id, username, tableId };
    socket.connect();
    console.log("[Socket] - from handleConnectToSocket: ", { socket });
  };

  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e?.preventDefault();
    onChangeText(e.target.value);

    socket.emit("message", e?.target.value);
  };

  useEffect(() => {
    socket.onAny((event, ...args) => {
      console.log("[Socket] - from onAny: ", { event, args });
    });

    socket.on("update_list_of_users", (data) =>
      setUsers(data.map((user: { username: string }) => user.username))
    );

    socket.on("chat-message", (data) => {
      setMessages((messages) => [...messages, data]);
    });
  }, []);

  console.log("[Socket]", { users });

  return (
    <div>
      <h2>Game</h2>

      <span>Username</span>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      {username}
      <button onClick={handleConnectToSocket}>Connect to socket</button>

      <h3>Users</h3>
      {users?.map((user) => (
        <div>{user}</div>
      ))}

      <h3>Game Messages</h3>
      {messages?.map((message) => (
        <div>{message}</div>
      ))}

      <div>
        <input type="text" value={text} onChange={handleMessage} />

        <button>send</button>
      </div>
    </div>
  );
};
