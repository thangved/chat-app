import { io } from "socket.io-client";
const Socket = () => {
	const socket = io("http://localhost:5000");
	const getSocket = () => socket;

	return { getSocket };
};

export default Socket();
