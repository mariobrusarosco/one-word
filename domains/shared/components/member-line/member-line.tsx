import { TableRole } from "@prisma/client";
import { Shield, ShieldCheck } from "lucide-react";
import { cn } from "../../utils/ui";
import { ProfileWithMembers } from "@/domains/tables/typing/enums-and-interfaces";
import { MemberSettingsMenu } from "@/domains/shared/components/member-line/member-settings-menu";
import { MemberAvatar } from "@/domains/shared/components/member-line/member-avatar";

interface MemberLineProps {
  profile: ProfileWithMembers;
  showMemberSettings: boolean;
  showMemberEmail: boolean;
}

export const MemberLine = ({
  profile,
  showMemberEmail = false,
  showMemberSettings = false,
}: MemberLineProps) => {
  const { color, Icon } = RoleMapperIcon[profile.role];

  const { firstName, lastName, email } = profile.member;
  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  return (
    <div className="flex justify-between items-center group">
      <MemberAvatar fullName={fullName} className="mr-2" />

      <div className="overflow-hidden flex-1 max-w-[220px]">
        <p className="overflow-hidden whitespace-nowrap text-ellipsis text-primary-base text-sm flex-1 flex-nowrap">
          {fullName}
        </p>

        {showMemberEmail && (
          <p className="text-xs text-secondary-base overflow-hidden whitespace-nowrap text-ellipsis flex-1 flex-nowrap ">
            {email}
          </p>
        )}
      </div>
      <div className="h-[20px] w-[20px]">
        <Icon className={cn(color, "h-[20px] w-[20px]")} />
      </div>

      <MemberSettingsMenu
        showMemberSettings={showMemberSettings}
        profile={profile}
      />
    </div>
  );
};

export const RoleMapperIcon = {
  [TableRole.ADMIN]: {
    Icon: ShieldCheck,
    color: "text-primary-base",
  },
  [TableRole.MODERATOR]: {
    Icon: Shield,
    color: "text-secondary-base",
  },
  [TableRole.GUEST]: {
    Icon: () => <div />,
    color: "text-neutra-black",
  },
};
