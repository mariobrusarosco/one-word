export const loaderGames = async () => {
  const result = await fetch(`${import.meta.env.VITE_BASE_API_URL}/games`);

  return await result.json();
};
