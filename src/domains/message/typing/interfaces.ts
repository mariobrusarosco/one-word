export type IMessage = {
  id: string;
  type: string;
  content: string;
  channelId: string;
  memberId: string;
  memberNickname: string;
  createdAt: Date;
  updatedAt: Date;
};

export type PageWithIMessages = {
  messages: IMessage[];
  lastCursor: number | 0;
};
