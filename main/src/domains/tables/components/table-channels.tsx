import { IChannel } from "@/domains/channel/typing/interfaces";
import { Icon } from "@/domains/ui-system/components/ui/icon/icon";
import { Link } from "react-router-dom";

const TableChannels = ({ channels }: { channels: IChannel[] }) => {
  if (channels === undefined || channels.length === 0) return null;

  return (
    <div className="table-channels px-4 pt-4 pb-10 overflow-hidden">
      <div className="flex justify-between">
        <p className="uppercase  font-light text-pink-500 pb-4">
          text channels
        </p>
        <Icon name="plus" className="stroke-pink-500" />
      </div>
      <ul className="flex flex-col gap-y-2 overflow-auto h-full pb-10">
        {channels.map((channel) => (
          <li>
            <Link
              to={`channels/${channel.id}`}
              className="flex items-center gap-x-2 p-2 rounded-md bg-white-100 hover:bg-pink-500 cursor-pointer group"
            >
              <Icon
                name="hashtag"
                className="stroke-pink-500 group-hover:stroke-white-100"
                size="extra-small"
              />
              <span className="text-pink-500 group-hover:text-white-100">
                {channel?.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TableChannels };
