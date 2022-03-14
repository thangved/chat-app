import { createServer } from "http";
import { Server } from "socket.io";
import * as dotenv from "dotenv";
import messageType from "./types/messageType";

dotenv.config();

const users: string[] = [];

const httpServer = createServer();
const io = new Server(httpServer, {
	cors: {
		origin: "*",
	},
});

io.on("connection", (socket) => {
	users.push(socket.id);

	io.emit("users", { users, join: socket.id });

	socket.on("message", (message: messageType) => {
		io.emit("message", message);
	});
	socket.on("disconnecting", () => {
		const leave = users.pop();
		io.emit("users", {
			users,
			leave: leave,
		});
	});
});

httpServer.listen(process.env.PORT || 3000);
