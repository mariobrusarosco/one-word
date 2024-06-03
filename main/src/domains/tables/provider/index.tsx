import { createContext, useContext } from "react";
import { useTables } from "../hooks/use-tables";

type TablesContextType = {
  tables: ReturnType<typeof useTables>;
};

const TablesContext = createContext<TablesContextType | undefined>(undefined);

const TablesProvider = ({ children }: { children: React.ReactNode }) => {
  const tables = useTables();
  const state: TablesContextType = {
    tables,
  };

  return (
    <TablesContext.Provider value={state}>{children}</TablesContext.Provider>
  );
};

const useTablesContext = (): TablesContextType => {
  const context = useContext(TablesContext);

  if (context === undefined) {
    throw new Error("useTablesContext must be used within a TablesProvider");
  }

  return context;
};

export { TablesProvider, useTablesContext };
