import ButtonComponent from "../components/ButtonComponent";
import { ChatComponent } from "../components/ChatComponent";
import { GroupList } from "../components/GroupList";

export const Global = () => {
  return (
    <section className="flex h-screen justify-center flex-col items-center mt-20 ">
      <div className="flex flex-row w-1/3 absolute top-3 justify-between">
        <div className=" text-2xl ">Welcome, [name].</div>
        <ButtonComponent buttonLink="/" buttonText="Log out" />
      </div>
      <div className="flex gap-10">
        <div className="w-1/2">
          <form action="" className=" flex w-full h-8 gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Room name..."
              className="w-1/2 bg-white  rounded-md h-10 py-1 px-4"
            />
            <button className="bg-white w-1/2 h-10 rounded">Create Room</button>
          </form>

          <GroupList />
        </div>

        <ChatComponent />
      </div>
    </section>
  );
};
