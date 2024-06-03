import { IChannel } from "@/domains/channel/typing/interfaces";

export interface Table {
  id: string;
  name: string;
  channels: {
    id: string;
    name: string;
    tableId: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

export interface ITable {
  id: string;
  name: string;
  inviteCode: string;
  channels: IChannel[];
}
