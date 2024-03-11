import { Link } from "react-router-dom";
import { GroupList } from "../components/GroupList";

export const Global = () => {
  return (
    <section className="flex h-screen justify-center flex-col items-center ">
      <div className=" absolute top-3 text-2xl ">Welcome, [name].</div>

      {/* Create Group */}
      <div className="">
        <div>
          <form action="">
            <input type="text" name="" id="" placeholder="Room name" />
            <button>Create Room</button>
          </form>

          {/* Existing Groups */}
          <GroupList />
        </div>
        {/* Global Chat */}
        <div>
          <div></div>
          <input type="text" placeholder="hello..." />
        </div>
      </div>
    </section>
  );
};
