export const loaderGames = async () => {
  const result = await fetch(`${import.meta.env.VITE_ONE_WORD_API}/games`);

  return await result.json();
};
