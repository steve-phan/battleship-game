import path from "path";
import http from "http";
import * as dotenv from "dotenv";
import express from "express";
import { Server } from "socket.io";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const PORT = process.env.PORT || 8000;

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("helloWorld", { message: "A message from BE" });
  socket.on("helloWorld", (data) => {
    console.log(`I received the data`, data);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
