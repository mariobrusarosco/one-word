import { useToast } from "@/domains/ui-system/components/ui/use-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authenticateViaCookie } from "@/domains/auth/api/loaders";
import { useAuth0 as useExternalAuth } from "@auth0/auth0-react";
import { AuthMode } from "../typing/enums-and-interfaces";
import { useMember } from "@/domains/member/hooks/use-member";

const useAppAuth = ({ mode }: { mode?: AuthMode } = {}) => {
  // const externalAuth = useExternalAuth();
  const member = useMember();

  // console.log(!!publicId);
  // const query = useQuery({
  //   queryKey: ["auth", { publicId, mode }],
  //   queryFn: () => publicId && authenticateViaCookie(publicId, mode),
  //   enabled: !!publicId,

  // onError: (error:) => {
  //   toast({
  //     variant: "destructive",
  //     title: "Ops! We couldn't register you",
  //   });
  //   console.error(error);
  //   navigate("/login");
  // },
  // onSuccess: async () => {
  //   alert("sdsa");
  //   toast({
  //     variant: "success",
  //     title: "Welcome to One Word!!",
  //   });
  //   navigate("/tables");
  // },
  // });

  // const isLoadingAuth =

  return { member };
};

export { useAppAuth };
