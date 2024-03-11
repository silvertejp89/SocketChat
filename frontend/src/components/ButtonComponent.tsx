import { Link } from "react-router-dom";

interface IButtonProps {
  buttonLink: string;
  buttonText: string;
}

const ButtonComponent = ({ buttonLink, buttonText }: IButtonProps) => {
  return (
    <button className="">
      <Link
        to={buttonLink}
        className="bg-white rounded-md py-2 px-4 border border-slate-300"
      >
        {buttonText}
      </Link>
    </button>
  );
};

export default ButtonComponent;
