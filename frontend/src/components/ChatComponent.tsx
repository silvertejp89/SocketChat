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
    <div className="w-1/2  flex-col">
      <div className="bg-white w-full  min-h-[90%] mb-6 rounded flex flex-col gap-3 p-4 border border-slate-300">
        {messageList.map((message) => (
          <MessageComponent message={message} key={message.id} />
        ))}
      </div>

      <div className="flex gap-6 ">
        <input
          type="text"
          placeholder="hello..."
          className="w-5/6 rounded py-2 px-4 border border-slate-300"
        />
        <div className="w-1/6 bg-white rounded flex justify-center items-center cursor-pointer border border-slate-300 text-slate-500">
          ➤
        </div>
      </div>
    </div>
  );
};
