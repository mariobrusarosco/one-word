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
