import { restApi } from "@/api/rest";
import { useToast } from "@/domains/ui-system/components/ui/use-toast";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const userDemoMutation = async (demoId: string) => {
  const result = await restApi.post(
    "/auth",
    { demoId },
    {
      headers: {
        "X-Auth-Demo": true,
      },
    }
  );

  return await result.data;
};

const createUser = async (user: ReturnType<typeof useAuth0>["user"]) => {
  const result = await restApi.post("/auth/signup", user);

  return await result.data;
};

// const useSignup = (auth: ReturnType<typeof useAuth0>) => {
const useSignup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const { mutate, status } = useMutation({
    mutationFn: (user) => createUser(user),
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Ops! Something went wrong when creating your user",
      });
      console.error(error);
    },
    onSuccess: async () => {
      toast({
        variant: "success",
        title: "All good! You are now registered!",
      });
      navigate("/");
    },
  });

  return { registerUserAndRedirect: mutate, status };
};

export { userDemoMutation, useSignup };