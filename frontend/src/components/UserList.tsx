import { useContext } from "react";
import { SelectedUserContext } from "../contexts/SelectedUserContext";
import { useNavigate } from "react-router-dom";

interface IUserListProps {
  user: string;
}

export const UserList = ({ user }: IUserListProps) => {
  const selectedUser = useContext(SelectedUserContext);
  const navigate = useNavigate();

  const selectUser = () => {
    selectedUser?.setName(user);
    navigate("/Global");
  };

  return (
    <li
      onClick={selectUser}
      key={user}
      className="bg-blue-200 rounded p-1 cursor-pointer flex items-center justify-center h-10 w-14"
    >
      {user}
    </li>
  );
};
