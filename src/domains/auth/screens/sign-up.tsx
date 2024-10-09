import { useSignup } from "@/domains/member/api/mutations";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useAuth0 as useExternalAuth } from "@auth0/auth0-react";

const SignupScreen = () => {
  const userFromExternalAuth = useExternalAuth()?.user;
  const { registerUserAndRedirect, status } = useSignup();

  useEffect(() => {
    if (userFromExternalAuth) registerUserAndRedirect(userFromExternalAuth);
  }, [userFromExternalAuth, registerUserAndRedirect]);

  console.log({});

  return (
    <div className="h-full flex flex-col items-center justify-center  bg-neutral-100 dark:bg-violet-800">
      <h1 className="text-6xl uppercase font-extralight font-josefin mb-4 dark:text-neutral-100">
        Almost there
      </h1>
      <p className="dark:text-neutral-100 mt-10">
        We're finishing your registration in our game!
      </p>
    </div>
  );
};

export default SignupScreen;
