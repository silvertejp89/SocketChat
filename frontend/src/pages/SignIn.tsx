import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <>
      <h1>Hello, what is your name?</h1>

      <form action="">
        <input type="text" />
        <button>
          <Link to="/global">Enter Chat</Link>
        </button>
      </form>
    </>
  );
};
