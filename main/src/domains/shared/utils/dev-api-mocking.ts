export const setApiMockingWhenInDevMode = async (
  {
    disable,
  }: {
    disable: boolean;
  } = { disable: false }
) => {
  if (disable || process.env.NODE_ENV !== "development") return;

  const { worker } = await import(
    "../../../mocks/mocking-on-browser-controller"
  );

  await worker.start();
};
