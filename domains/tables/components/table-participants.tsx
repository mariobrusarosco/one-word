import { Button } from "@/domains/shared/components/ui/button";
import { getInitials } from "@/domains/shared/utils/string-manipulation";
import { TableRole, Prisma, Table } from "@prisma/client";
import axios from "axios";
import { Settings } from "lucide-react";

type TableWithParticipants = Prisma.TableGetPayload<{
  include: { profiles: true };
}>;

interface Props {
  table: TableWithParticipants;
}

interface AvatarProps {
  name: string;
}

const ParticipantAvatar = ({ name }: AvatarProps) => {
  const initials = getInitials(name);

  return (
    <Button size="lg" roundness="full" className="font-thin">
      {initials}
    </Button>
  );
};

export const TableParticipants = ({ table }: Props) => {
  console.log({ table });

  const temp = async () => {
    const result = await axios.patch(`/api/tables/${table.id}/profile`, {
      role: TableRole.MODERATOR,
      profileId: "user_2VveE4j7yGLD5GNm4ep2eYaTCqM",
    });

    console.log({ result });
  };

  return (
    <div>
      <div className="flex justify-between align-center my-4">
        <h2 className="text-primary-base text-sm font-semibold">
          PARTICIPANTS
        </h2>
        <Settings className="w-[18px] h-[18px] text-primary-base" />
      </div>

      <div className="flex flex-col justify-between">
        {table?.profiles?.map((profile) => {
          // TODO [PROJECT SPECIFIC FEATURE] : use the member full name inside the Avatar
          // const fullName = `${participant.firstName} ${participant.lastName}`;

          return (
            <div
              key={profile.id}
              className="flex justify-between"
              onClick={temp}
            >
              {/* <ParticipantAvatar name={profile.firstName} /> */}

              {/* <div>{profile.firstName} </div> */}

              <div>{profile.role}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
