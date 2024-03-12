import { User } from "../models/User";

interface IUserListProps {
  user: string;
}

export const UserList = ({ user }: IUserListProps) => {
  return (
    <li
      key={user}
      className="bg-blue-200 rounded p-1 cursor-pointer flex items-center justify-center h-10 w-14"
    >
      {user}
    </li>
  );
};
