import { useState, useEffect, useContext } from "react";
import { IMessage } from "../models/IMessage";
import { MessageComponent } from "./MessageComponent";
import { ChatContext } from "../contexts/ChatContext";
import { Socket, io } from "socket.io-client";

export const ChatComponent = () => {
  const selectedUser = useContext(ChatContext);
  const socket = useContext(ChatContext);

  //Håller reda på vad användaren skriver:
  const [messageInput, setMessageInput] = useState<string>("");
  //Håller reda på messageList:
  const [messageList, setMessageList] = useState<IMessage[]>([]);

  useEffect(() => {
    const s = io("http://localhost:3000");

    s.on("messages_updated", (messages: IMessage[]) => {
      console.log(messages);
      setMessageList(messages);
    });

    socket?.setSocket(s);

    return () => {
      socket?.socket?.disconnect();
    };
  }, []);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    //om meddelande fält är tomt, return, annars skapa meddelande.
    if (!messageInput.trim()) return;
    const message: IMessage = {
      id: messageList.length + 1,
      author: selectedUser?.name || "Anonymous",
      date: new Date().toISOString(),
      message: messageInput.trim(),
    };
    setMessageList((prevMessages) => [...prevMessages, message]);
    socket?.socket?.emit("add_message", message);
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

      <form onSubmit={sendMessage}>
        <div className="flex gap-6">
          <input
            type="text"
            placeholder="Type your message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="w-5/6 rounded py-2 px-4 border border-slate-300"
          />
          <button
            type="submit"
            className="w-1/6 bg-white rounded flex justify-center items-center cursor-pointer border border-slate-300 text-slate-500"
          >
            ➤
          </button>
        </div>
      </form>
    </div>
  );
};
