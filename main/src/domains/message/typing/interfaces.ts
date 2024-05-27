export type IMessage = {
  id: string;
  type: string;
  content: string;
  channelId: string;
  memberId: string;
  createdAt: Date;
  updatedAt: Date;
};
