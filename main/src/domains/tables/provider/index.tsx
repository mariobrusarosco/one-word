import { createContext, useContext, useEffect } from "react";
import { IPartipant } from "../components/participants";
import { useTables } from "../hooks/use-tables";

type TablesContextType = {
  fakeParticipants: IPartipant[];
  tables: ReturnType<typeof useTables>;
};

const TablesContext = createContext<TablesContextType | undefined>(undefined);

const TablesProvider = ({ children }: { children: React.ReactNode }) => {
  const tables = useTables();
  const state: TablesContextType = {
    fakeParticipants: [
      { userId: "1", username: "Mario de Almeida" },
      { userId: "2", username: "Luigi de Almeida" },
    ],
    tables,
  };

  useEffect(() => {
    console.log("[DEBUG] - TablesProvider mounted");
    return () => {
      console.log("TablesProvider unmounted");
    };
  }, []);
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
