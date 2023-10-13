import { MemberLine } from "@/domains/shared/components/member-line/member-llne";
import { TableWithProfiles } from "../typing/enums-and-interfaces";

interface Props {
  table: TableWithProfiles;
  showMemberSettings?: boolean;
  showMemberEmail?: boolean;
}

export const TableMembers = ({
  table,
  showMemberEmail = false,
  showMemberSettings = false,
}: Props) => {
  return (
    <div className="flex flex-col justify-between gap-y-4">
      {table?.profiles?.map((profile) => {
        return (
          <MemberLine
            key={profile.id}
            profile={profile}
            showMemberSettings={showMemberSettings}
            showMemberEmail={showMemberEmail}
          />
        );
      })}
    </div>
  );
};
