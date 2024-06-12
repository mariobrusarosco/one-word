import { cn } from "@/domains/ui-system/utils";

const SocketStatus = ({ connected }: { connected: boolean | null }) => {
  return (
    <div className="flex items-center gap-x-2">
      <span className={"relative flex h-3 w-3"}>
        <span
          className={cn(
            "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
            {
              "bg-teal-300": connected,
              hidden: !connected,
            }
          )}
        ></span>
        <span
          className={cn("relative inline-flex rounded-full h-3 w-3", {
            "bg-teal-300": connected,
            "bg-red-900": !connected,
          })}
        ></span>
      </span>

      <p className="text-rose-800 dark:text-neutral-100 text-xs uppercase font-bold">
        {connected ? "online" : "offline"}
      </p>
    </div>
  );
};

export { SocketStatus };
