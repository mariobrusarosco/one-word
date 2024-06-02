// import { useWebSocket } from "@/domains/socket/providers/web-socket/hook";
// import { SocketEvents } from "@/domains/socket/typing/enums";
// import { tab } from "node_modules/@testing-library/user-event/dist/types/convenience";
// import { useCallback, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const useTables = () => {
//   const { dispatch, state } = useWebSocket();
//   const { tableId } = useParams<{ tableId: string }>();
//   const [tableParticipants, setTableParticipants] = useState<string[]>([]);
//   const [lastActiveTable, setLastActiveTable] = useState<string | undefined>();

//   // # 1 Table mounts for the first time
//   // # 2 User switches tables
//   // # 2.1 User leaves the table
//   // # 2.2 User joins the new table

//   // # 1 Table mounts for the first time
//   useEffect(() => {
//     if (lastActiveTable !== undefined && lastActiveTable !== tableId) {
//       // console.log(
//       //   "[SOCKET DEBUG] - Since lastActiveTable is not equal to the current tableId, this mean a user is leaving  table: ",
//       //   tablesManager.lastActiveTable,
//       //   " and joining table: ",
//       //   tableId
//       // );

//       console.log(
//         "[SOCKET DEBUG] - About to leave the table: ",
//         lastActiveTable
//       );
//       // tablesManager.setLastActiveTable(tableId);
//     }

//     console.log("[SOCKET DEBUG] - About to join the table: ", tableId);
//     tablesManager.setLastActiveTable(tableId ?? "nulo");
//   }, [tableId]);

//   return { tableParticipants };
// };

// export { useTables };
