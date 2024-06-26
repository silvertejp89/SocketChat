import { IMessage } from "../models/IMessage";

interface IMessageProps {
  message: IMessage;
}

export const MessageComponent = ({ message }: IMessageProps) => {
  return (
    <div key={message.id} className=" bg-gray-200 rounded p-3">
      <div className=" text-xs flex gap-2">
        <span>{message.author}</span>
        <span>{message.date}</span>
      </div>
      <div>
        <span>{message.message}</span>
      </div>
    </div>
  );
};
