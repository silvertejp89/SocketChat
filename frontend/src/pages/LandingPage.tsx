import { useState } from "react";
import { SignInComponent } from "../components/SignInComponent";
import { Socket } from "socket.io-client";
import { User } from "../models/User";

export const LandingPage = () => {
  const [socket, setSocket] = useState<Socket>();
  const [users, setUsers] = useState<User[]>([]);

  return (
    <section>
      <SignInComponent socket={socket} />
    </section>
  );
};
