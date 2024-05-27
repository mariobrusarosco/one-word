import { loaderTables } from "@/domains/tables/api/loader";
import { Table } from "@/domains/tables/typing/interfaces";
import { Button } from "@/domains/ui-system/components/ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
import { loaderChannels } from "../api/loaders";
import { IChannel, IChannelWithMessages } from "../typing/interfaces";

const ChannelScreen = () => {
  const { channelId, tableId } = useParams<{
    channelId: string;
    tableId: string;
  }>();

  const { data } = useQuery<IChannelWithMessages>({
    queryKey: ["channel", { channelId }],
    queryFn: () => loaderChannels(channelId ?? ""),
    enabled: true,
  });

  if (!channelId) return null;

  console.log("ChannelScreen", { channelId, tableId });

  return (
    <div className="channel w-full h-full">
      <div className="heading flex justify-between items-center font-sans ">
        <p className="text-pink-500 dark:text-teal-800 text-5xl">Channel</p>
        <p className="table-name font-semibold uppercase text-2xl text-teal-800 dark:text-white-100 ">
          {channelId}
        </p>
      </div>

      <Separator className="bg-teal-800 mt-3" />

      <div className="chat h-full">
        <p className="text-5xl">Welcome to </p>
        <p className="text-xl text-primary-base mb-8">
          This is the beginning of a conversation
        </p>

        <section className="channel-participants">
          <ul className="flex gap-2 flex-col">
            {data?.messages?.map((message) => (
              <li key={message.id} className="font-sans">
                {message.content}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export { ChannelScreen };
