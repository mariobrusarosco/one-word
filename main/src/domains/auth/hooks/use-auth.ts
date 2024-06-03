import { useQuery } from "@tanstack/react-query";
import { userLoader } from "../api/loaders";

export const useAuth = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: userLoader,
    enabled: true,
  });
};
