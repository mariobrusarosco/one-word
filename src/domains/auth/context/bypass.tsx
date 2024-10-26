import { api } from "@/api";
import { useMember } from "@/domains/member/hooks/use-member";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { AuthData } from "../typing/enums-and-interfaces";

const ByPassAuthContext = createContext<AuthData>({
  isAuthenticated: false,
  isAuthenticating: false,
});

export const ByPassAuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const auth = useQuery({
    queryKey: ["auth"],
    queryFn: () =>
      authenticateByPassedMember(import.meta.env.VITE_DEMO_MEMBER_ID),
    enabled: true,
  });

  const member = useMember(auth.isSuccess);

  const isAuthenticated = auth.isSuccess && member.isSuccess;
  const isAuthenticating =
    auth.status === "pending" || member.status === "pending";

  const authData: AuthData = {
    isAuthenticated,
    isAuthenticating,
  };

  return (
    <ByPassAuthContext.Provider value={authData}>
      {children}
    </ByPassAuthContext.Provider>
  );
};

const authenticateByPassedMember = async (authId: string) => {
  const response = await api.get("auth", { params: { authId } });

  return response.data;
};

export const useAuthByPass = () => {
  const context = useContext(ByPassAuthContext);

  if (context === undefined)
    throw new Error(
      "useReactContextAdapter must be used within a ByPassAuthProvider"
    );

  return context;
};
