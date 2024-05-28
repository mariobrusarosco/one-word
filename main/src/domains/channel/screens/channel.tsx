import { Separator } from "@radix-ui/react-dropdown-menu";
import { useParams } from "react-router-dom";

const ChannelScreen = () => {
  const { channelId, tableId } = useParams<{
    channelId: string;
    tableId: string;
  }>();

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

        <section className="channel-participants"></section>
      </div>
    </div>
  );
};

export { ChannelScreen };
