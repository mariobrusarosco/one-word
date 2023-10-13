import { MemberLine } from "@/domains/shared/components/member-line/member-line";
import { TableWithProfiles } from "../typing/enums-and-interfaces";
import { Channel } from "@prisma/client";
import { ChannelRow } from "@/domains/shared/components/channel-row/channel-row";

interface Props {
  channels: Channel[];
}

export const TableChannels = ({ channels }: Props) => {
  return (
    <div className="flex flex-col justify-between">
      {channels.map((channel) => {
        return <ChannelRow key={channel.id} channel={channel} />;
      })}
    </div>
  );
};
