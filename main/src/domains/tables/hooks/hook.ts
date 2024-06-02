import { useContext } from "react";
import { TablesContext } from "./provider";

export const useTables = () => {
  const context = useContext(TablesContext);

  if (context === undefined) {
    throw new Error("useTables must be used within a TablesContext");
  }
  return context;
};
