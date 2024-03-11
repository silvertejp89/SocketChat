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
        className="bg-white border border-black rounded-md p-2"
      >
        {buttonText}
      </Link>
    </button>
  );
};

export default ButtonComponent;
