import { Link, useParams } from "react-router-dom";
import { ChatComponent } from "../components/ChatComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { IGroup } from "../models/IGroup";

export const Group = () => {
  const { groupName } = useParams();
  const [group, setGroup] = useState<IGroup>();
  const testFetch = async () => {
    const res = await axios.get("http://localhost:3000/groups/" + groupName);

    setGroup(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    testFetch();
  }, []);

  return (
    <section className="h-screen w-full py-10 px-16">
      <div className="flex justify-between mb-5">
        <button className="bg-white w-1/4 h-10 rounded border border-slate-300">
          <Link to="/global">Go back</Link>
        </button>
        <div className="w-2/4 text-xl">{group?.name} 's Room</div>
      </div>
      <div className="w-full h-[95%]  ">
        <ChatComponent />
      </div>
    </section>
  );
};
