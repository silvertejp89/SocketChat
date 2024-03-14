import { Socket } from "socket.io-client";
import ButtonComponent from "./ButtonComponent";
import { GroupList } from "./GroupList";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { IGroup } from "../models/IGroup";


interface IGroupCreateProps {
  socket: Socket | undefined;
  groups: IGroup[];
}

export const GroupComponent = ({ socket, groups }: IGroupCreateProps) => {

  const selectedUser = useContext(ChatContext);
  const [group, setGroup] = useState<IGroup>({


    id: 0,
    name: "",
    messages: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGroup({ ...group, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newGroup: IGroup = {
      ...group,
      id: groups.length + 1,
    };
    socket?.emit("add_group", newGroup);
  };

  return (
    <section>
      <div className="flex flex-row  w-full justify-between pb-10 ">
        <div className=" text-2xl  ">Welcome, {selectedUser?.name}.</div>
        <ButtonComponent buttonLink="/" buttonText="Log out" />
      </div>

      <div className="flex h-[90%] overflow-auto ">
        <div className="w-full h-[50%] ">
          <form
            onSubmit={handleSubmit}
            className=" flex w-full h-12 justify-around gap-3 sticky top-0 bg-[#F1F5F9] shadow-[0_0_6px_3px_rgba(0,0,0,0.1)]"
          >
            <input
              name="name"
              value={group.name}
              onChange={handleChange}
              type="text"
              placeholder="Room name..."
              className="w-1/2 bg-white  rounded-md h-10 py-1 px-4 border border-slate-300"
            />
            <button className="bg-white w-1/2 h-10 rounded border border-slate-300">
              Create Room
            </button>
          </form>
          {groups.map((group) => (
            <GroupList group={group} key={group.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
