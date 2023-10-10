import { getInitials } from "@/domains/shared/utils/string-manipulation";
import { TableRole } from "@prisma/client";
import { Shield, ShieldCheck, Smile } from "lucide-react";
import { cn } from "../../utils/ui";

interface MemberLineProps {
  role: TableRole;
  email: string;
  name: string;
  onClick: () => void;
}

export const MemberLine = ({ email, name, onClick, role }: MemberLineProps) => {
  const { color, Icon } = RoleMapperIcon[role];

  return (
    <div
      className="flex justify-between items-center cursor-pointer group"
      onClick={onClick}
    >
      <div className="grid place-items-center w-[35px] h-[35px] rounded-full bg-primary-base text-neutral-white group-hover:bg-secondary-base text-xs mr-2">
        <span>{getInitials(name)}</span>
      </div>

      <p className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis text-primary-base">
        {name}
      </p>

      <div className="h-[20px] w-[20px] ml-3">
        <Icon className={cn(color, "h-[20px] w-[20px]")} />
      </div>
    </div>
  );
};

const RoleMapperIcon = {
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
