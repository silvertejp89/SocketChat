import React from "react";
import { IGroup } from "./GroupList";
import { Link } from "react-router-dom";

interface IGroupProps {
  group: IGroup;
}

export const GroupIcon = ({ group }: IGroupProps) => {
  return (
    <Link
      to={"/" + group.name}
      className="bg-green-200 rounded p-2 text-center"
    >
      {group.name}
    </Link>
  );
};
