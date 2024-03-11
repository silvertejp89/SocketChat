import { IMessage } from "../models/IMessage";
import { MessageComponent } from "./MessageComponent";

export const ChatComponent = () => {
  let messageList: IMessage[] = [
    {
      id: 1,
      author: "Kriss",
      date: "2024-03-11",
      message: "Hej hopp",
    },
    {
      id: 2,
      author: "Simon",
      date: "2024-03-11",
      message: "Allt är bäst",
    },
    {
      id: 3,
      author: "Filip",
      date: "2024-03-11",
      message: "...så var det med det",
    },
  ];
  return (
    <div className="w-1/2 h-screen flex-col">
      <div className="bg-white w-full h-1/2 mb-5 rounded flex flex-col gap-3 p-1">
        {messageList.map((message) => (
          <MessageComponent message={message} key={message.id} />
        ))}
      </div>

      <div className="flex gap-1">
        <input
          type="text"
          placeholder="hello..."
          className="w-5/6 rounded py-1 px-4"
        />
        <div className="w-1/6 bg-white rounded flex justify-center items-center cursor-pointer">
          ➤
        </div>
      </div>
    </div>
  );
};
