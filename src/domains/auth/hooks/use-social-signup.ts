import { useToast } from "@/domains/ui-system/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  createSocialUser,
  signInSocialUser,
} from "@/domains/auth/api/mutations";
import { useAuth0 as useExternalAuth } from "@auth0/auth0-react";

const useSocialSign = (process: "signin" | "signup") => {
  const isSignUp = process === "signup";
  const externalAuth = useExternalAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { mutate } = useMutation({
    mutationFn: () => {
      if (!externalAuth?.user) {
        throw new Error("User is not authenticated");
      }
      return isSignUp
        ? createSocialUser(externalAuth.user)
        : signInSocialUser(externalAuth.user.sub);
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: `Ops! Something went wrong when ${
          isSignUp ? "creating your user" : "authenticating you!"
        }`,
      });
      console.error(error);
    },
    onSuccess: async () => {
      toast({
        variant: "success",
        title: isSignUp ? "All good! You are now registered!" : "Welcome Back!",
      });
      navigate("/");
    },
  });

  const readyToSign = externalAuth.isAuthenticated;

  return { handleSignAndRedirect: mutate, readyToSign };
};

export { useSocialSign };
