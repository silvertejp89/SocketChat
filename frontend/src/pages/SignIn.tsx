import ButtonComponent from "../components/ButtonComponent";
import { UserList } from "../components/UserList";

export const SignIn = () => {
  return (
    <section className="flex h-screen justify-center flex-col items-center ">
      <div className="text-2xl">Hello, what is your name?</div>

      <div className="flex items-center flex-col">
        <input
          type="text"
          className="border border-black my-5 rounded"
          placeholder="Enter your name..."
        />
        <ButtonComponent buttonLink="global" buttonText="Join" />
      </div>

      <UserList />
    </section>
  );
};
