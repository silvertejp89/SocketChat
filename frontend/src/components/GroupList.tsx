// import { GroupIcon } from "./GroupIcon";
import { Link } from "react-router-dom";
interface IGroupListProps {
  group: string;
}

export const GroupList = ({ group }: IGroupListProps) => {
  return (
    <Link
      className="grid grid-cols-2 gap-3 my-5 bg-white p-5 rounded overflow-auto"
      key={group}
      to={"/" + group}
    >
      {" "}
      {group}
      {/* {groups.map((group) => (
        <GroupIcon group={group} key={group.id} />
      ))} */}
    </Link>
  );
};
