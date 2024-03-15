import { useContext, useState } from "react";
import { IMessage } from "../models/IMessage";
import { ChatContext } from "../contexts/ChatContext";

interface IMessageProps {
  message: IMessage;
  messageList: IMessage[];
  setMessageList: React.Dispatch<React.SetStateAction<IMessage[]>>;
}

export const MyMessageComponent = ({
  message,
  messageList,
  setMessageList,
}: IMessageProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState("");
  const socket = useContext(ChatContext);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedMessage(message.message);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedMessage("");
  };

  const handleSaveEdit = () => {
    // Update the message in messageList
    const editedMessageList = messageList.map((msg) => {
      if (msg.id === message.id) {
        return { ...msg, message: editedMessage };
      }
      return msg;
    });
    setMessageList(editedMessageList);
    // Emit socket event to update message on server
    socket?.socket?.emit("edit_message", {
      id: message.id,
      newMessage: editedMessage,
    });
    // Reset editing state
    setIsEditing(false);
    setEditedMessage("");
  };

  return (
    <div key={message.id} className="bg-blue-200 rounded p-3">
      <div className="text-xs flex justify-between items-center gap-2">
        <div className="flex justify-between items-center gap-2 mb-2">
          <span>{message.author}</span>
          <span> {message.date}</span>
        </div>
        <button
          className="flex self-end bg-white py-1 px-2 rounded"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
      {isEditing ? (
        <div>
          <textarea
            value={editedMessage}
            onChange={(e) => setEditedMessage(e.target.value)}
            className="border rounded p-2 w-full"
          />
          <div className="flex justify-end mt-2">
            <button
              className="mr-2 bg-green-500 text-white px-3 py-1 rounded"
              onClick={handleSaveEdit}
            >
              Save
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <span>{message.message}</span>
        </div>
      )}
    </div>
  );
};
