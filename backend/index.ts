import path from "path";
import http from "http";
import * as dotenv from "dotenv";
import express from "express";
import { Server } from "socket.io";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server);
console.log({ port: process.env.PORT });

const PORT = process.env.PORT || 3000;

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("hello", "world");
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
