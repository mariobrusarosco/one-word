import { useEffect } from "react";
import { useSocialSign } from "../hooks/use-social-signup";

const SignUpCallbackScreen = () => {
  const { handleSignAndRedirect, readyToSign } = useSocialSign("signup");
  useEffect(() => {
    readyToSign && handleSignAndRedirect();
  }, [readyToSign, handleSignAndRedirect]);

  return (
    <div className="h-full flex flex-col items-center justify-center bg-neutral-100 dark:bg-violet-800 text-violet-600 dark:text-white">
      Please wait, while we handle your access.
    </div>
  );
};

export default SignUpCallbackScreen;
