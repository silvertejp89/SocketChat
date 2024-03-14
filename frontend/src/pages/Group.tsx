import { Link } from "react-router-dom";
import { ChatComponent } from "../components/ChatComponent";
import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

export const Group = () => {
  return (
    <section className="h-screen w-full py-10 px-16">
      <div className="flex justify-between mb-5">
        <button className="bg-white w-1/4 h-10 rounded border border-slate-300">
          <Link to="/global">Go back</Link>
        </button>
        <div className="w-2/4 text-xl">[Group.name]'s Room</div>
      </div>
      <div className="w-full h-[95%]  ">
        <ChatComponent />
      </div>
    </section>
  );
};
