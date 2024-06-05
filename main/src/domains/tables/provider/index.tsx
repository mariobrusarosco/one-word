import { createContext, useContext, useEffect } from "react";
import { useTableSocket } from "./use-table-socket";
import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
import { useParams } from "react-router-dom";

type TablesContextType = ReturnType<typeof useTableSocket>;

const TablesContext = createContext<TablesContextType | undefined>(undefined);

const TableSocketManager = ({ children }: { children: React.ReactNode }) => {
  const { tableId } = useParams<{ tableId: string }>();
  const tableSocket = useTableSocket(tableId);

  // useEffect(() => {
  //   return () => {
  //     tableSocket;
  //   };
  // }, [tableSocket]);

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
