import { useContext } from "react";
import { ByPassAuthContext } from "../bypass";

export const useAuthByPass = () => {
  const context = useContext(ByPassAuthContext);

  if (context === undefined)
    throw new Error(
      "useReactContextAdapter must be used within a ByPassAuthProvider"
    );

  return context;
}; 