"use client";
import { Channel } from "@prisma/client";
import { Hash } from "lucide-react";
import { ChannelSettingsMenu } from "./channel-settings-menu";
import { useRouter } from "next/navigation";
import { TableRoutes } from "@/domains/tables/typing/enums-and-interfaces";

interface MemberLineProps {
  channel: Channel;
}

export const ChannelRow = ({ channel }: MemberLineProps) => {
  const router = useRouter();
  const channelScreenUrl = TableRoutes.CHANNEL.replace(
    ":tableId",
    channel.tableId
  ).replace(":channelId", channel.id);
  const handleGoToChannelScreen = () => router.push(channelScreenUrl);

  return (
    <div
      className="flex justify-start items-center gap-1 p-2 rounded cursor-pointer text-sm text-primary-base hover:text-neutral-white hover:bg-primary-base"
      onClick={handleGoToChannelScreen}
    >
      <Hash className="h-[15px] w-[15px" />
      <p className="">{channel.name}</p>
      <ChannelSettingsMenu channel={channel} />
    </div>
  );
};
