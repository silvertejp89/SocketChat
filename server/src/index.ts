import express from "express";
import cors from "cors";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { User } from "./models/User";

const users: User[] = [];

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user has connected");

  socket.on("add_user", (newUser: User) => {
    users.push(newUser);
    console.log(users);
    io.emit("users_updated", users);
  });
});

server.listen(3000, () => {
  console.log("Server is up and running");
});
