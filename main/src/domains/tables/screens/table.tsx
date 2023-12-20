import { useOutletContext, useParams } from "react-router-dom";
import { useUser } from "../../auth/components/authenticated-layout";

export const TableScreen = () => {
  const { tableId } = useParams<{ tableId: string }>();

  const user = useUser();
  console.log("table:", user);

  return (
    <>
      <h2>user: {user.name}</h2>
      <h3>Table: {tableId}</h3>
    </>
  );
};
