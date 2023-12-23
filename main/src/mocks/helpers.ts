export const mockOneWordApi = (path: string) => {
  return `${import.meta.env.VITE_ONE_WORD_API}${path}`;
};

export const setAndRetrieveHandlers = ({
  handlers,
  server,
  browser,
}: {
  handlers: any[];
  server: boolean;
  browser: boolean;
}) => {
  if (server) {
    setServerHandlers(handlers);
  }

  if (browser) {
    setBrowserHandlers(handlers);
  }

  return handlers;
};
