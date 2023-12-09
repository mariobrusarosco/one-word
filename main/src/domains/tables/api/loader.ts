export const loaderTables = async () => {
  const result = await fetch(`${import.meta.env.VITE_ONE_WORD_API}/tables`);

  return await result.json();
};
