import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useWebSocket } from "../../socket/providers/web-socket";
import { SocketEvents } from "../../socket/typing/enums";
import socket from "../../socket/providers/web-socket/socket";

export const GameScreen = () => {
  const { tableId } = useParams();
  const [text, onChangeText] = useState("");
  // const socket = useWebSocket();

  const [username, setUsername] = useState<string>("");
  const [messages, setMessages] = useState<string[]>(["Welcome!"]);
  const [users, setUsers] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("[Socket] - from handleSubmit: ", { text, socket });

    // setMessages([...messages, text]);
  };

  const handleConnectToSocket = () => {
    socket.auth = { id: socket.id, username, tableId };
    socket.connect();
    console.log("[Socket] - from handleConnectToSocket: ", { socket });

    // socket.emit("user_joined_game", tableId);
  };

  const handleMessage = (e) => {
    e.preventDefault();

    socket.emit("message", e.target[0].value);
  };

  useEffect(() => {
    socket.onAny((event, ...args) => {
      console.log("[Socket] - from onAny: ", { event, args });
    });

    socket.on("update_list_of_users", (data) =>
      setUsers(data.map((user: any) => user.username))
    );

    socket.on("chat-message", (data) => {
      setMessages((messages) => [...messages, data]);
    });

    // socket.on("connected", (data) => {
    //   console.log("[Socket] - from connected: ", { data });
    //   setUsers((users) => [
    //     ...users,
    //     ...data.map((user: any) => user.username),
    //   ]);
    // });
  }, [socket]);

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

      {/* <button onClick={handleJoinRoom}>Join game room</button> */}

      {/* <p>
        Game connection status:{" "}
        {socket?.socketInstance?.connected ? "connected" : "disconnected"}
      </p> */}

      <h3>Game Messages</h3>
      {messages?.map((message) => (
        <div>{message}</div>
      ))}

      <div>
        <form onSubmit={handleMessage}>
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

// const handleConnectToSocket = () => {
//   socket.socketInstance.auth = { username };
//   socket.socketInstance.connect();
// };

// const handleJoinRoom = () => {
//   socket.socketInstance.emit(SocketEvents.JOIN_GAME_ROOM, tableId);
// };

// useEffect(() => {
//   if (!socket?.socketInstance) {
//     console.log(
//       "[SOCKET] preparing to start a game connection for table: ",
//       tableId,
//       socket
//     );

//     socket?.stablishSocketConnection({ tableId });
//   } else {
//     console.log(
//       "[SOCKET] game pag already have access to a socket connection",
//       socket
//     );
//   }
// }, [socket]);
