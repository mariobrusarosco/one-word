import { IChannel } from "@/domains/channel/typing/interfaces";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { Skeleton } from "@/domains/ui-system/components/ui/skeleton";
import { Link, useParams } from "react-router-dom";

export const TableChannels = ({ channels }: { channels: IChannel[] }) => {
  if (channels === undefined || channels.length === 0) return null;

  console.log({ channels });

  return (
    <div data-ui="table-channels" className="overflow-hidden pb-14 ">
      <p className="uppercase text-sm font-light text-rose-800 dark:text-neutral-100 p-4">
        channels
      </p>
      <ul className="flex flex-col gap-y-2 h-0 min-h-[100%] overflow-auto scrollable px-4">
        {channels.map((channel) => (
          <ChannelItem key={channel.id} channel={channel} />
        ))}
      </ul>
    </div>
  );
};

const ChannelItem = ({ channel }: { channel: IChannel }) => {
  const { tableId } = useParams<{ tableId: string }>();

  return (
    <li data-ui="channel-item">
      <Link
        to={`${tableId}/channels/${channel.id}`}
        className="flex items-center gap-x-2 p-2 rounded-md bg-neutral-100 hover:bg-rose-800 dark:bg-violet-800 hover:dark:bg-rose-800 transition-colors cursor-pointer group"
      >
        <Icon
          name="hashtag"
          className="stroke-rose-800 group-hover:stroke-neutral-100 dark:stroke-neutral-100"
          size="extra-small"
        />
        <span className="text-rose-800 group-hover:text-neutral-100 dark:text-neutral-100">
          {channel?.name}
        </span>
      </Link>
    </li>
  );
};

export const TableChannelsLoading = () => {
  return (
    <div data-ui="table-channels-loading" className="overflow-hidden pb-14 ">
      <p className="uppercase text-sm font-light text-rose-800 dark:text-neutral-100 p-4">
        channels
      </p>
      <ul className="flex flex-col gap-y-2 h-0 min-h-[100%] overflow-auto scrollable px-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <ChannelItemLoading key={index} />
        ))}
      </ul>
    </div>
  );
};

const ChannelItemLoading = () => {
  return (
    <li
      data-ui="channel-item-loading"
      className="flex items-center gap-x-2 p-2 rounded-md"
    >
      <Skeleton className="w-5 h-5 rounded-full" />
      <Skeleton className="flex-1 h-5 rounded" />
    </li>
  );
};
