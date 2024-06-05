import { useParams } from "react-router-dom";
import { InviteMember } from "../components/modals/invite-member";

const InviteTableScreen = () => {
  const { tableId } = useParams<{ tableId: string }>();

  if (!tableId) return null;

  return (
    <div data-ui="invite-table-screen">
      <InviteMember tableId={tableId} />;
    </div>
  );
};

export default InviteTableScreen;
