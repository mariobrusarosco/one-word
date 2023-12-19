export const loaderGames = async () => {
  const response = await fetch(`${import.meta.env.VITE_ONE_WORD_API}/games`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const result = await response.json();
  return result;
};
