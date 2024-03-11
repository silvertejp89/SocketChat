export class Message {
  constructor(
    public id: number,
    public author: string,
    public date: Date,
    public message: string
  ) {}
}
