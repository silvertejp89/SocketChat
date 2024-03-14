import { IMessage } from "./IMessage";

export interface IGroup {
  id: number;
  name: string;
  messages: IMessage[];
}
