import { useEffect, useState } from "react";
import { SignInComponent } from "../components/SignInComponent";
import { Socket, io } from "socket.io-client";

export const LandingPage = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const s = io("http://localhost:3000");

    s.on("users_updated", (users: string[]) => {
      setUsers(users);
    });

    setSocket(s);

    return () => {
      socket?.disconnect();
    };
  }, []);

  return (
    <section>
      <SignInComponent socket={socket} users={users} />
    </section>
  );
};
