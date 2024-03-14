import { useState, useEffect, useContext } from "react";
import { IMessage } from "../models/IMessage";
import { MessageComponent } from "./MessageComponent";
import { SelectedUserContext } from "../contexts/SelectedUserContext";
import { Socket } from "socket.io-client";

interface Props {
  socket: SocketIOClient.Socket;
}

export const ChatComponent = ({ socket }: Props) => {
  const selectedUser = useContext(SelectedUserContext);

  //Håller reda på vad användaren skriver:
  const [messageInput, setMessageInput] = useState<string>("");
  //Håller reda på messageList:
  const [messageList, setMessageList] = useState<IMessage[]>([]);

  //Hårdkodad messageList
  // let messageList: IMessage[] = [
  //   {
  //     id: 1,
  //     author: "Kriss",
  //     date: "2024-03-11",
  //     message: "Hej hopp",
  //   },
  //   {
  //     id: 2,
  //     author: "Simon",
  //     date: "2024-03-11",
  //     message: "Allt är bäst",
  //   },
  //   {
  //     id: 3,
  //     author: "Filip",
  //     date: "2024-03-11",
  //     message: "...så var det med det",
  //   },
  // ];

  useEffect(() => {
    if (!socket) return;

    socket.on("receive_message", (message: IMessage) => {
      setMessageList((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  const sendMessage = () => {
    //om meddelande fält är tomt, return, annars skapa meddelande.
    if (!messageInput.trim()) return;
    const message: IMessage = {
      id: messageList.length + 1,
      author: selectedUser?.name || "Anonymous",
      date: new Date().toISOString(),
      message: messageInput.trim(),
    };
    setMessageList((prevMessages) => [...prevMessages, message]);
    socket.emit("send_message", message);
    setMessageInput("");
  };
  //---------------------------------------------------------------------------------------------------------------
  return (
    <div className="flex-col h-full">
      <div className=" text-2xl  ">Start chatting {selectedUser?.name}!</div>
      <div className="bg-white w-full  h-[90%] mb-6 rounded flex flex-col gap-3 p-4 border border-slate-300">
        {messageList.map((message) => (
          <MessageComponent message={message} key={message.id} />
        ))}
      </div>

      <div className="flex gap-6 ">
        <input
          type="text"
          placeholder="hello..."
          className="w-5/6 rounded py-2 px-4 border border-slate-300"
          //the magic:
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <div
          className="w-1/6 bg-white rounded flex justify-center items-center cursor-pointer border border-slate-300 text-slate-500"
          onClick={sendMessage}
        >
          ➤
        </div>
      </div>
    </div>
  );
};
