import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import Socket from "./socket/chat.js";
import UpdateSocket from "./socket/updates.js";

const app = express();
const server = createServer(app);

export const io = new Server(server);

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
  Socket();
  UpdateSocket();
});
