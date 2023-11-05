export const loaderTables = async () => {
  const result = await fetch(`${import.meta.env.VITE_BASE_API_URL}/tables`);

  return await result.json();
};
