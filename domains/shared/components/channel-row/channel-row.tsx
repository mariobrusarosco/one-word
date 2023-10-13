import { Channel } from "@prisma/client";
import { Hash } from "lucide-react";

import { ChannelSettingsMenu } from "./channel-settings-menu";

interface MemberLineProps {
  channel: Channel;
}

export const ChannelRow = ({ channel }: MemberLineProps) => {
  return (
    <div className="flex justify-start items-center gap-1 p-2 rounded cursor-pointer text-sm text-primary-base hover:text-neutral-white hover:bg-primary-base ">
      <Hash className="h-[15px] w-[15px" />
      <p className="">{channel.name}</p>
      <ChannelSettingsMenu channel={channel} />
    </div>
  );
};
