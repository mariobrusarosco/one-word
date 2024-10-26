import { useQuery } from "@tanstack/react-query";
import { memberLoader } from "../api/loaders";

export const useMember = (isAuthenticated?: boolean) => {
  return useQuery({
    queryKey: ["member"],
    queryFn: memberLoader,
    enabled: !!isAuthenticated,
  });
};
