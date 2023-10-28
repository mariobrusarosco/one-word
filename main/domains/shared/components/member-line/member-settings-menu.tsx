import { Check, Gavel, Settings2, ShieldIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { RoleMapperIcon } from "./member-line";
import { TableProfile, TableRole } from "@prisma/client";
import { useState } from "react";
import restApi from "../../api/rest";
import { useParams, useRouter } from "next/navigation";

interface Props {
  showMemberSettings: boolean;
  profile: TableProfile;
}

export const MemberSettingsMenu = ({ showMemberSettings, profile }: Props) => {
  const [_, setIsUpdatingRole] = useState(false);
  const router = useRouter();
  const params = useParams();

  if (!showMemberSettings) return null;

  const GuestIcon = RoleMapperIcon.GUEST.Icon;
  const ModeratorIcon = RoleMapperIcon.MODERATOR.Icon;

  const handleUpdateRole = async (role: TableRole) => {
    try {
      setIsUpdatingRole(true);
      // TODO [PROJECT SPECIFIC FEATURE] : replace this with React Query
      const result = await restApi.patch(`/tables/${params?.tableId}/profile`, {
        role,
        profileId: profile.memberId,
      });
      router.refresh();
    } catch (error) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[INVITATION_MODAL]: ", error);
    } finally {
      setIsUpdatingRole(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Settings2 className="ml-auto h-[20px] w-[20px] opacity-0 group-hover:opacity-100 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-secondary-base px-2 py-4 border-0 flex flex-col gap-4 text-neutral-white">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer flex gap-2 data-[state=open]:text-secondary-base">
            <ShieldIcon /> <span>Role</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="bg-secondary-base px-2 py-4 border-0 flex flex-col gap-4 text-neutral-white">
              <DropdownMenuItem
                className="cursor-pointer flex gap-2"
                onClick={() => handleUpdateRole("GUEST")}
              >
                <GuestIcon />
                <span>Guest</span>
                {profile.role === "GUEST" && <Check className="ml-1 w-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer flex gap-2"
                onClick={() => handleUpdateRole("MODERATOR")}
              >
                <ModeratorIcon />
                <span>Moderator</span>
                {profile.role === "MODERATOR" && <Check className="ml-1 w-4" />}
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem className="cursor-pointer flex gap-2">
          <Gavel /> <span>Kick</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
