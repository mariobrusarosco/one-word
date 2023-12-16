import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useWebSocket } from "../socket/providers/web-socket";
import { useLocation } from "react-router-dom";
import { SocketEvents } from "../socket/typing/enums";
// import io from "socket.io-client";

export const Chat = () => {
  const [messages, setMessages] = useState<string[]>(["Welcome!"]);
  const { state: socketState } = useWebSocket();
  const [room, setRoom] = useState<string>("");
  const [namespace, setNamespace] = useState<string>("");

  console.log("pathname", location.pathname);

  const [text, onChangeText] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ text });
    socketState.socketInstance.emit(SocketEvents.CHAT_MESSAGE_SENDING, {
      text,
    });
  };

  // useEffect(() => {

  // },[room, namespace]])

  return (
    <main>
      <h1>Chat: {socketState.connected ? "CONNECTED" : "DISCONNECTED"}</h1>
      <h2>Namespace: {namespace}</h2>
      <h2>Room: {room}</h2>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <aside>
            <h2>Namespaces</h2>
            <ul>
              {socketState?.namespaces?.map((ns) => {
                return (
                  <li key={ns.id} onClick={() => setNamespace(ns.name)}>
                    {ns.name}
                  </li>
                );
              })}
            </ul>
          </aside>

          <aside>
            <h2>Rooms</h2>
            <ul>
              <li onClick={() => setRoom("general")}>General</li>
              <li onClick={() => setRoom("private")}>Private</li>
              <li onClick={() => setRoom("public")}>Public</li>
            </ul>
          </aside>

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

        {/* <div>
          <p>Room: {window?.ioServer?.id}</p>
          {messages?.map((msg) => (
            <div key={msg}>{msg}</div>
          ))}
        </div> */}
      </div>
    </main>
  );
};
