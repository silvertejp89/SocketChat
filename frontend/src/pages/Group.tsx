import { Link } from "react-router-dom";

export const Group = () => {
  return (
    <>
      {/* Topside Group */}
      <div>
        <button>
          <Link to="/global">Go back</Link>
        </button>
        <div>[Group.name]'s Room</div>
      </div>

      {/* Group Chat  */}
      <div>
        <div></div>
        <input type="text" />
      </div>
    </>
  );
};
