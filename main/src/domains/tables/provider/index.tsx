import { createContext, useContext } from "react";
import { useTableSocket } from "./use-table-socket";

type TablesContextType = ReturnType<typeof useTableSocket>;

const TablesContext = createContext<TablesContextType | undefined>(undefined);

const TableSocketManager = ({ children }: { children: React.ReactNode }) => {
  const tableSocket = useTableSocket();

  return (
    <TablesContext.Provider value={tableSocket}>
      {children}
    </TablesContext.Provider>
  );
};

const useTableSocketManager = (): TablesContextType => {
  const context = useContext(TablesContext);

  if (context === undefined) {
    throw new Error("useTablesContext must be used within a TablesProvider");
  }

  return context;
};

export { TableSocketManager, useTableSocketManager };
