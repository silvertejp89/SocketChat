import ButtonComponent from "../components/ButtonComponent";
import { ChatComponent } from "../components/ChatComponent";
import { GroupList } from "../components/GroupList";

export const Global = () => {
  return (
    <section className="flex flex-col items-around w-full h-screen py-10 px-16">
      <div className="flex flex-row  w-full justify-between pb-10">
        <div className=" text-2xl  ">Welcome, [name].</div>
        <ButtonComponent buttonLink="/" buttonText="Log out" />
      </div>
      <div className="flex gap-10 h-full">
        <div className="w-1/2">
          <form action="" className=" flex w-full h-8 justify-around gap-3">
            <input
              type="text"
              placeholder="Room name..."
              className="w-1/2 bg-white  rounded-md h-10 py-1 px-4 border border-slate-300"
            />
            <button className="bg-white w-1/2 h-10 rounded border border-slate-300">
              <a href="/group">Create Room</a>
            </button>
          </form>

          <GroupList />
        </div>

        <ChatComponent />
      </div>
    </section>
  );
};
