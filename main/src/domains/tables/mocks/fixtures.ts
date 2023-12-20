import { Table } from "../typing/interfaces";

export const createTableFixture = ({
  table,
}: { table?: Partial<Table> } = {}) => {
  return {
    id: "1",
    name: "Skol",
    active_game: "1",
    ...table,
  };
};
