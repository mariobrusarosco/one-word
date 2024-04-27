// import React from "react";
// import { useState } from "react";

export const Chat = () => {
  return <div>Chat</div>;
};

// export const Chat = () => {
//   const [room, setRoom] = useState<string>("");

//   console.log("pathname", location.pathname);

//   const [text, onChangeText] = React.useState("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log({ text });
//     // socketState.socketInstance.emit(SocketEvents.CHAT_MESSAGE_SENDING, {
//     //   text,
//     // });
//   };

//   // useEffect(() => {

//   // },[room, namespace]])

//   const handleRoomConnection = (event: any) => {
//     const roomName = event.target.innerText;

//     // socketState.socketInstance.join(roomName, (data) => {
//     //   console.log("joined room", data);
//     // });
//   };

//   return (
//     <main>
//       {/* <h1>Chat: {socketState.connected ? "CONNECTED" : "DISCONNECTED"}</h1> */}
//       {/* <h2>Namespace: {namespace}</h2> */}
//       <h2>Room: {room}</h2>
//       <div className="flex gap-2">
//         <div className="flex flex-col">
//           <aside>
//             <h2>Namespaces</h2>
//             <ul>
//               {/* {socketState?.namespaces?.map((ns) => {
//                 return (
//                   <li key={ns.id} onClick={() => setNamespace(ns.name)}>
//                     {ns.name}
//                   </li>
//                 );
//               })} */}
//             </ul>
//           </aside>

//           <aside>
//             <h2>Rooms</h2>
//             <ul>
//               <li onClick={handleRoomConnection}>General</li>
//               <li onClick={() => setRoom("private")}>Private</li>
//               <li onClick={() => setRoom("public")}>Public</li>
//             </ul>
//           </aside>

//           <div>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 value={text}
//                 onChange={(e) => {
//                   onChangeText(e.target.value);
//                 }}
//               />

//               <button>send</button>
//             </form>
//           </div>
//         </div>

//         {/* <div>
//           <p>Room: {window?.ioServer?.id}</p>
//           {messages?.map((msg) => (
//             <div key={msg}>{msg}</div>
//           ))}
//         </div> */}
//       </div>
//     </main>
//   );
// };
