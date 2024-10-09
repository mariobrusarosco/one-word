import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/domains/ui-system/components/ui/button";

const LoginScreen = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-neutral-100 dark:bg-violet-800">
      <h1 className="text-6xl uppercase font-extralight font-josefin mb-5 dark:text-neutral-100">
        Login
      </h1>

      <LoginButton>Log in via OAuth</LoginButton>

      <div className="flex  items-center justify-center gap-2 max-w-[800px] mt-[200px]">
        <p className=" text-violet-800 font-light text-pretty dark:text-neutral-100">
          New to One Word? Register now!
        </p>
        <SignUpButton />
      </div>
    </div>
  );
};

const LoginButton = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth0();

  return (
    <Button
      onClick={() =>
        auth.loginWithRedirect({
          authorizationParams: {
            redirect_uri: "http://localhost:5173/callback/login",
          },
        })
      }
    >
      {children}
    </Button>
  );
};

const SignUpButton = () => {
  const auth = useAuth0();

  return (
    <Button
      size="extra-small"
      onClick={() =>
        auth.loginWithRedirect({
          appState: {
            shouldSetAppCookie: true,
            process: "signup",
          },
          authorizationParams: {
            redirect_uri: "http://localhost:5173/callback/signup",
          },
        })
      }
    >
      Register now
    </Button>
  );
};

export default LoginScreen;
