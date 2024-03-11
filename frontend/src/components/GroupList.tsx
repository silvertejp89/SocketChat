import { GroupIcon } from "./GroupIcon";

export interface IGroup {
  id: number;
  name: string;
}

let groups: IGroup[] = [
  {
    id: 1,
    name: "Frukostklubben",
  },
  {
    id: 2,
    name: "hejhej",
  },
  {
    id: 3,
    name: "hejhejdå",
  },
  {
    id: 3,
    name: "hejhejdådå",
  },
];

export const GroupList = () => {
  return (
    <div className="grid grid-cols-2 gap-3 my-5">
      {groups.map((group) => (
        <GroupIcon group={group} />
      ))}
    </div>
  );
};
