import ButtonComponent from "../components/ButtonComponent";

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

      <div className="flex flex-row gap-5 mt-5">
        <div>Simon</div>
        <div>Simon2</div>
      </div>
    </section>
  );
};
