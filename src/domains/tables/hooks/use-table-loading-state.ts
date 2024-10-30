import { useIsFetching } from "@tanstack/react-query";

const keys = ["channels", "table", "tables"];

export const useTableLoadingState = () => {
  const isLoading = useIsFetching({
    predicate: (query) => {
      const queryKey = query.queryKey[0] as string;

      return keys.includes(queryKey) && query.state.status === "pending";
    },
  });

  return { isLoading: Boolean(isLoading) };
};
