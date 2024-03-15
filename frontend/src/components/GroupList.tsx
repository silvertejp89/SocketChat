// import { GroupIcon } from "./GroupIcon";
import { Link } from "react-router-dom";
import { IGroup } from "../models/IGroup";
interface IGroupListProps {
  group: IGroup;
}

export const GroupList = ({ group }: IGroupListProps) => {
  return (
    <Link
      className="grid grid-cols-2 gap-3 my-5 bg-white p-5 rounded overflow-auto"
      key={group.id}
      to={"/Group/" + group.id}
    >
      {group.name}
    </Link>
  );
};
