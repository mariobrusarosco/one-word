export const getInitials = (name: string): string => {
  const words = name.split(" ").filter(Boolean);
  if (!words.length) return "";
  const firstWord = words[0];
  if (!firstWord) return "";
  return firstWord.substring(0, 2).toUpperCase();
};

export const capitalizeWords = (text: string): string => {
  return text
    .split(" ")
    .filter(Boolean)
    .map((word) => {
      const firstChar = word[0];
      return firstChar ? firstChar.toUpperCase() + word.slice(1) : word;
    })
    .join(" ");
};
