import { ChannelRow } from "@/domains/channels/components/channel-row";
import { DeleteChannelModal } from "@/domains/channels/components/delete-channel";
import { ManageChannelModal } from "@/domains/channels/components/manage-channel-modal";
import { AppModalGuard } from "@/domains/shared/components/modals/components/app-modal-guard";
import { useModal } from "@/domains/shared/providers/hooks/modal";
import { Channel } from "@prisma/client";
import { Plus } from "lucide-react";

interface Props {
  channels: Channel[];
}

export const TableChannels = ({ channels }: Props) => {
  const { open } = useModal();

  return (
    <>
      <AppModalGuard modalUI="manage-channel">
        <ManageChannelModal channels={channels} />
      </AppModalGuard>

      <AppModalGuard modalUI="delete-channel">
        <DeleteChannelModal channels={channels} />
      </AppModalGuard>

      <div
        className="flex justify-between align-center mb-3 cursor-pointer"
        onClick={() => open({ ui: "manage-channel" })}
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
