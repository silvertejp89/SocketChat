import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { UserList } from "./UserList";
import { Socket } from "socket.io-client";
import { User } from "../models/User";
import { ChatContext } from "../contexts/ChatContext";
import { useNavigate } from "react-router-dom";

interface ISignInProps {
  socket: Socket | undefined;
  users: string[];
}

export const SignInComponent = ({ socket, users }: ISignInProps) => {
  const navigate = useNavigate();
  const setSelectedUser = useContext(ChatContext);
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
    setSelectedUser?.setName(user.name);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    socket?.emit("add_user", user.name);
    navigate("/Global");
  };

  setSelectedUser?.setName(user.name);
  return (
    <section className="flex h-screen justify-center flex-col items-center ">
      <div className="text-2xl">Hello, what is your name?</div>

      <form className="flex items-center flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-black my-5 rounded"
          placeholder="Enter your name..."
          name="name"
          value={user.name}
          onChange={handleChange}
        />

        <button className="bg-white rounded-md py-2 px-4 border border-slate-300">
          Join
        </button>
      </form>
      <ul className="flex flex-row flex-wrap max-w-[80%] gap-5 mt-5 bg-white p-5 rounded">
        {users.map((user) => (
          <UserList user={user} />
        ))}
      </ul>
    </section>
  );
};
