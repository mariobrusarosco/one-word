import { useQuery } from "@tanstack/react-query";
import { userLoader } from "../api/loaders";

export const useAuth = (
  { fetchOnMount }: { fetchOnMount: boolean } = { fetchOnMount: false }
) => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: userLoader,
    enabled: fetchOnMount,
  });
};
