export const ChatComponent = () => {
  return (
    <div className="w-1/2 h-screen flex-col">
      <div className="bg-white w-full h-1/2 mb-5 rounded"></div>

      <div className="flex gap-1">
        <input
          type="text"
          placeholder="hello..."
          className="w-5/6 rounded py-1 px-4"
        />
        <div className="w-1/6 bg-white rounded flex justify-center items-center cursor-pointer">
          ➤
        </div>
      </div>
    </div>
  );
};
