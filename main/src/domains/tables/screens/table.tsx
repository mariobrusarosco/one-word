import { useParams } from "react-router-dom";

export const TableScreen = () => {
  const { tableId } = useParams<{ tableId: string }>();

  return (
    <>
      <h3>Table: {tableId}</h3>
    </>
  );
};
