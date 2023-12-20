export const loaderTables = async () => {
  const response = await fetch(`${import.meta.env.VITE_ONE_WORD_API}/tables`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const result = await response.json();
  return result;
};
