import { MemberLine } from "@/domains/shared/components/member-line/member-llne";
import { Button } from "@/domains/shared/components/ui/button";
import { Separator } from "@/domains/shared/components/ui/separator";
import { TableRole, Prisma, Table, TableProfile, Member } from "@prisma/client";
import axios from "axios";
import { Settings } from "lucide-react";

type TableWithParticipants = Prisma.TableGetPayload<{
  include: { profiles: { include: { member: true } } };
}>;

interface Props {
  table: TableWithParticipants;
}

interface MemberActionProps {
  role: TableRole;
}
const MemberRoleActions = ({ role }: MemberActionProps) => {
  return (
    <p className="overflow-hidden whitespace-nowrap text-ellipsis w">{role}</p>
  );
};

export const TableMembers = ({ table }: Props) => {
  console.log({ table });

  const temp = async () => {
    const result = await axios.patch(`/api/tables/${table.id}/profile`, {
      role: TableRole.MODERATOR,
      profileId: "user_2VveE4j7yGLD5GNm4ep2eYaTCqM",
    });

    console.log({ result });
  };

  return (
    <>
      <div className="px-3">
        <Separator className="bg-primary-base mb-4" />
        <div className="flex justify-between align-center mb-4">
          <h2 className="text-primary-base text-sm font-semibold">
            PARTICIPANTS
          </h2>
          <Settings className="w-[18px] h-[18px] text-primary-base" />
        </div>

        <div className="flex flex-col justify-between gap-y-4">
          {table?.profiles?.map((profile) => {
            const { firstName, lastName, email } = profile.member;
            const fullName = [firstName, lastName].filter(Boolean).join(" ");

            return (
              <MemberLine
                key={profile.id}
                onClick={temp}
                role={profile.role}
                name={fullName}
                email={email}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
