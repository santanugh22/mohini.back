import { io } from "../socketIO.js";

function UpdateSocket() {
  io.on("connection", (socket) => {
    console.log("connected this is the other one");
    console.log(socket.handshake.query.token);
    socket.on("disconnect", () => {
      console.log("disconnected");
    });
  });
}

export default UpdateSocket;
