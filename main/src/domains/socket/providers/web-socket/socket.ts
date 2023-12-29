import { io } from "socket.io-client";

const URL = import.meta.env.VITE_ONE_WORD_SOCKET_URL;
console.log("URL", URL);
const socket = io(URL, { autoConnect: false });

export default socket;
