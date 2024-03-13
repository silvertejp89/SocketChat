import { useEffect, useState } from "react";
import { ChatComponent } from "../components/ChatComponent";
import { Socket, io } from "socket.io-client";
import { GroupComponent } from "../components/GroupComponent";

export const Global = () => {
  const [groups, setGroups] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const s = io("http://localhost:3000");

    s.on("groups_updated", (groups: string[]) => {
      console.log(groups);
      setGroups(groups);
    });

    setSocket(s);

    return () => {
      socket?.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-row items-around w-full h-screen py-10 px-16 justify-between">
      <GroupComponent socket={socket} groups={groups} />
      <div className="w-1/2 min-h-[95%]">
        <ChatComponent />
      </div>
    </div>
  );
};
