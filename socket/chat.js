import { io } from "../socketIO.js";

function Socket() {
  io.on("connection", (socket) => {
    console.log("connected");
    console.log(socket.handshake.query.token)
    socket.on("disconnect", () => {
      console.log("disconnected");
    });
    socket.emit("hand","Hi this is that")
    socket.emit("ball","Hello this is the thing")
  });
}

export default Socket;
