import { ChangeEvent, FormEvent, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { UserList } from "./UserList";
import { Socket } from "socket.io-client";
import { User } from "../models/User";

interface ISignInProps {
  socket: Socket | undefined;
}

export const SignInComponent = ({ socket }: ISignInProps) => {
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    socket?.emit("add_user", user);
  };

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
        <ButtonComponent buttonLink="global" buttonText="Join" />
      </form>

      <UserList />
    </section>
  );
};
