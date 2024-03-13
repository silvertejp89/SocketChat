import { createContext } from "react";

interface ISelectedUser {
  name: string | null;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
}

export const SelectedUserContext = createContext<ISelectedUser | undefined>(
  undefined
);
