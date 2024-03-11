import { Link } from "react-router-dom";

export const Global = () => {
  return (
    <>
      <h1>Welcome, [name].</h1>

      {/* Create Group */}
      <form action="">
        <input type="text" name="" id="" />
        <button>Create Room</button>
      </form>

      {/* Existing Groups */}
      <div>
        <button>
          <Link to="/group">Simon's Room</Link>
        </button>
      </div>

      {/* Global Chat */}
      <div>
        <div></div>
        <input type="text" />
      </div>
    </>
  );
};
