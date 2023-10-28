import { MemberLine } from "@/domains/shared/components/member-line/member-line";
import { TableWithProfiles } from "../typing/enums-and-interfaces";
import { Settings } from "lucide-react";

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
    <>
      <div className="flex justify-between align-center mb-3">
        <h2 className="text-primary-base text-sm font-semibold">
          PARTICIPANTS
        </h2>
        <Settings className="w-[18px] h-[18px] text-primary-base" />
      </div>
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
    </>
  );
};
