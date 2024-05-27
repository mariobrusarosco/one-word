import { IMessage } from "@/domains/message/typing/interfaces";

export type IChannel = {
  id: string;
  name: string;
  tableId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type IChannelWithMessages = {
  id: string;
  name: string;
  tableId: string;
  createdAt: Date;
  updatedAt: Date;
  messages: IMessage[];
};
