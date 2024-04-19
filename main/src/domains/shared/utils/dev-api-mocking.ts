export const setApiMockingWhenInDevMode = async (
  {
    disable,
  }: {
    disable: boolean;
  } = { disable: false }
) => {
  try {
    if (disable || process.env.NODE_ENV !== "development") return;

    console.log("Great! This application has mocked data!");
    const { worker } = await import(
      "../../../mocks/mocking-on-browser-controller"
    );

    await worker.start();
  } catch (e) {
    console.error(e);
  }
};
