import { useQuery } from "@tanstack/react-query";
import { memberLoader } from "../api/loaders";
import { useAuth0 as useExternalAuth } from "@auth0/auth0-react";

export const useMember = () => {
  const externalAuth = useExternalAuth();
  const externalAuthId = externalAuth?.user?.sub;

  return useQuery({
    queryKey: ["member", { externalAuthId }],
    queryFn: memberLoader,
    enabled: !!externalAuthId,
  });
};
