import { Link } from "react-router-dom";
import { ChatComponent } from "../components/ChatComponent";

export const Group = () => {
  return (
    <>
      <div className="flex justify-between">
        <button>
          <Link to="/global">Go back</Link>
        </button>
        <div>[Group.name]'s Room</div>
      </div>

      <ChatComponent />
    </>
  );
};
