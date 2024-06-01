import { createContext, useContext } from "react";
import { IPartipant } from "../components/participants";

interface TablesContextType {
  fakeParticipants: IPartipant[];
}

const TablesContext = createContext<TablesContextType | undefined>(undefined);

const TablesProvider = ({ children }: { children: React.ReactNode }) => {
  const state = {
    fakeParticipants: [
      { userId: "1", username: "Mario de Almeida" },
      { userId: "2", username: "Luigi de Almeida" },
    ],
  };
  return (
    <TablesContext.Provider value={state}>{children}</TablesContext.Provider>
  );
};

const useTablesContext = () => {
  const context = useContext(TablesContext);

  if (context === undefined) {
    throw new Error("useTablesContext must be used within a TablesProvider");
  }

  return context;
};

export { TablesProvider, useTablesContext };
