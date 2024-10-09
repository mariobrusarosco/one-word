import { useEffect } from "react";
import { useSocialSign } from "../hooks/use-social-signup";

// const LoginCallbackScreen = () => {
//   const auth = useAppAuth({ mode: "signin" });
//   const { toast } = useToast();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (auth.status === "success") {
//       toast({
//         variant: "success",
//         title: "Welcome to One Word!!",
//       });
//       navigate("/tables");
//     }
//   }, [auth.status, navigate, toast]);

//   console.log(auth.status);

//   if (auth.error) {
//     toast({
//       variant: "destructive",
//       title: "Ops! Something went wrong!!",
//     });
//     navigate("/login");
//   }

//   return (
//     <div className="h-full flex flex-col items-center justify-center bg-neutral-100 dark:bg-violet-800 text-violet-600 dark:text-white">
//       Please wait...
//     </div>
//   );
// };

const SignInCallbackScreen = () => {
  const { handleSignAndRedirect, readyToSign } = useSocialSign("signin");

  useEffect(() => {
    readyToSign && handleSignAndRedirect();
  }, [readyToSign, handleSignAndRedirect]);

  return (
    <div className="h-full flex flex-col items-center justify-center bg-neutral-100 dark:bg-violet-800 text-violet-600 dark:text-white">
      Please wait, while we handle your access.
    </div>
  );
};

export default SignInCallbackScreen;
