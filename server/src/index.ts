import express from "express";
import cors from "cors";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { User } from "./models/User";
import { IGroup } from "./models/IGroup";
import { IMessage } from "./models/IMessage";
const users: User[] = [];
const groups: IGroup[] = [];
const messages: IMessage[] = [];

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/groups", (req, res) => {
  res.send(groups);
});

app.get("/groups/:groupId", (req, res) => {
  const groupId = parseInt(req.params.groupId);
  const group = groups.find((group) => group.id === groupId);
  if (!group) {
    return res.status(404).send("Group not found");
  }
  res.send(group);
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

  socket.on("add_group", (newGroup: IGroup) => {
    groups.push(newGroup);
    console.log(groups);
    io.emit("groups_updated", groups);
  });

  // Messages
  io.emit("messages_updated", messages);

  socket.on("add_message", (newMessage: IMessage) => {
    messages.push(newMessage);
    console.log(messages);
    io.emit("messages_updated", messages);
  });

  socket.on(
    "edit_message",
    (editedMessage: { id: number; newMessage: string }) => {
      const { id, newMessage } = editedMessage;
      const messageIndex = messages.findIndex((msg) => msg.id === id);
      if (messageIndex !== -1) {
        messages[messageIndex].message = newMessage;
        console.log(messages);
        io.emit("messages_updated", messages);
      } else {
        console.log("Message not found");
      }
    }
  );
});

server.listen(3000, () => {
  console.log("Server is up and running");
});
