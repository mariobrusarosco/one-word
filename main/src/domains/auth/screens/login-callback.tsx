import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppAuth } from "../hooks/use-app-auth";
import { useEffect } from "react";

const LoginCallbackScreen = () => {
  const auth0 = useAuth0();
  const { query } = useAppAuth(auth0.user?.sub || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (query.status === "success") navigate("/tables");
  }, [query.status, navigate]);

  return (
    <div className="h-full flex flex-col items-center justify-center bg-neutral-100 dark:bg-violet-800">
      Please wait...
    </div>
  );
};

export default LoginCallbackScreen;
