import { useQuery } from "@tanstack/react-query";
import { authenticateViaCookie } from "../api/loaders";

const useAuthentication = (publicId?: string) => {
  const authentication = useQuery({
    queryKey: ["authentication", publicId],
    queryFn: () => authenticateViaCookie(publicId),
    enabled: !!publicId,
  });

  return authentication;
};

export { useAuthentication };
