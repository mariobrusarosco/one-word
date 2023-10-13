import { ChannelRow } from "@/domains/channels/components/channel-row";
import { ManageChannelModal } from "@/domains/channels/components/manage-channel-modal";
import { useGlobalModal } from "@/domains/shared/providers/store";
import { Channel } from "@prisma/client";
import { Plus } from "lucide-react";

interface Props {
  channels: Channel[];
}

export const TableChannels = ({ channels }: Props) => {
  const { openModal, activeModalId } = useGlobalModal();

  return (
    <>
      {activeModalId === "create-channel-modal" && (
        <ManageChannelModal modalMode="create" />
      )}

      <div
        className="flex justify-between align-center mb-3 cursor-pointer"
        onClick={() => openModal("create-channel-modal")}
      >
        <h2 className="text-primary-base text-sm font-semibold">CHANNELS</h2>
        <Plus className="w-[18px] h-[18px] text-primary-base" />
      </div>

      <div className="flex flex-col justify-between">
        {channels.map((channel) => {
          return <ChannelRow key={channel.id} channel={channel} />;
        })}
      </div>
    </>
  );
};
