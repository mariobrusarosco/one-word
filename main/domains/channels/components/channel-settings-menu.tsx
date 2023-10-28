import { FileEdit, Loader, Trash } from "lucide-react";
import { Channel } from "@prisma/client";
import { useState } from "react";
import restApi from "../../shared/api/rest";
import { useRouter } from "next/navigation";
import { useModal } from "@/domains/shared/providers/hooks/modal";
import { ManageChannelModal } from "./manage-channel-modal";
import { AppModalGuardBase } from "@/domains/shared/components/modals/components/app-modal-base";
import { AppModalGuard } from "@/domains/shared/components/modals/components/app-modal-guard";

interface Props {
  channel: Channel;
}

export const ChannelSettingsMenu = ({ channel }: Props) => {
  // TODO [PROJECT SPECIFIC FEATURE] : replace this with React Query
  const [isUpdatingOrDeletingChannel, setIsUpdatingOrDeletingChannel] =
    useState(false);
  const router = useRouter();
  const { open } = useModal();

  return (
    <div className="ml-auto flex gap-2">
      {isUpdatingOrDeletingChannel ? (
        <Loader className="h-[15px] w-[15px]" />
      ) : (
        <>
          <FileEdit
            className="h-[15px] w-[15px]"
            onClick={() =>
              open({
                id: channel.id,
                ui: "manage-channel",
              })
            }
          />
          <Trash
            className="h-[15px] w-[15px]"
            onClick={() =>
              open({
                id: channel.id,
                ui: "delete-channel",
              })
            }
          />
        </>
      )}
    </div>
  );
};
