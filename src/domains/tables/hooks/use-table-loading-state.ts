import { useIsFetching } from "@tanstack/react-query";

const keys = ["channels", "table", "tables"];

export const useTableLoadingState = () => {
  const isFetching = useIsFetching({
    predicate: (query) => {
      const queryKey = query.queryKey[0] as string;

      return keys.includes(queryKey);
    },
  });

  return { isFetching };
};
