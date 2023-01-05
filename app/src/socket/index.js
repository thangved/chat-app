import { io } from "socket.io-client";
const Socket = () => {
  const socket = io("https://chat-app-api-z14t.onrender.com/");
  const getSocket = () => socket;

  return { getSocket };
};

export default Socket();
