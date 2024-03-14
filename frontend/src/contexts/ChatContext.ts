import { createContext } from "react";
import { Socket } from "socket.io-client";

interface IChatContext {
  name: string | null;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
  socket: Socket | undefined;
  setSocket: React.Dispatch<React.SetStateAction<Socket | undefined>>;
}

export const ChatContext = createContext<IChatContext | undefined>(undefined);
