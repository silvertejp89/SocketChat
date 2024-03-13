import express from "express";
import cors from "cors";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { User } from "./models/User";
import { Group } from "./models/Group";
const users: User[] = [];
const groups: Group[] = [];

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
//User
io.on("connection", (socket) => {
  console.log("A user has connected");

  io.emit("users_updated", users);

  socket.on("add_user", (newUser: User) => {
    users.push(newUser);
    console.log(users);
    io.emit("users_updated", users);
  });

  //Group
  io.emit("groups_updated", groups);

  socket.on("add_group", (newGroup: Group) => {
    groups.push(newGroup);
    console.log(groups);
    io.emit("groups_updated", groups);
  });
});

server.listen(3000, () => {
  console.log("Server is up and running");
});
