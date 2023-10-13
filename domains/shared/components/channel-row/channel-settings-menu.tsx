import { FileEdit, Loader, Trash } from "lucide-react";
import { Channel } from "@prisma/client";
import { useState } from "react";
import restApi from "../../api/rest";
import { useRouter } from "next/navigation";

interface Props {
  channel: Channel;
}

export const ChannelSettingsMenu = ({ channel }: Props) => {
  // TODO [PROJECT SPECIFIC FEATURE] : replace this with React Query
  const [isUpdatingOrDeletingChannel, setIsUpdatingOrDeletingChannel] =
    useState(false);
  const router = useRouter();

  const handleDeleteChannel = async () => {
    try {
      setIsUpdatingOrDeletingChannel(true);
      // TODO [PROJECT SPECIFIC FEATURE] : replace this with React Query
      const result = await restApi.delete(`/channels/${channel?.id}`);
      router.refresh();
    } catch (error) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[CHANNEL_SETTINGS_MENU]: ", error);
    } finally {
      setIsUpdatingOrDeletingChannel(false);
    }
  };

  const handleUpdateChannel = async (channelName: string) => {
    try {
      setIsUpdatingOrDeletingChannel(true);
      // TODO [PROJECT SPECIFIC FEATURE] : replace this with React Query
      const result = await restApi.patch(`/channels/${channel?.id}/`, {
        name: channelName,
      });
      router.refresh();
    } catch (error) {
      // TODO [BOILERPLATE] - apply app's logger
      console.log("[CHANNEL_SETTINGS_MENU]: ", error);
    } finally {
      setIsUpdatingOrDeletingChannel(false);
    }
  };

  return (
    <div className="ml-auto flex gap-2">
      {isUpdatingOrDeletingChannel ? (
        <Loader className="h-[15px] w-[15px]" />
      ) : (
        <>
          <FileEdit className="h-[15px] w-[15px]" />
          <Trash className="h-[15px] w-[15px]" />
        </>
      )}
    </div>
  );
};
