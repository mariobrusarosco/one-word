const SocketStatus = ({ connected }: { connected: boolean }) => {
  return (
    <div className="flex items-center gap-x-2">
      {connected ? (
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white-100 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white-100"></span>
        </span>
      ) : null}
      <p className="text-white-100 text-xs uppercase font-semibold">
        {connected ? "connected" : "disconnected"}
      </p>
    </div>
  );
};

export { SocketStatus };
