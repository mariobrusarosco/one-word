import { QueryKey } from "@tanstack/react-query";
import { restApi } from "../../../api/rest";

export const tablesLoader = async () => {
  const result = await restApi.get("/tables");

  // TODO Add a debug mode here?!
  // console.log("[LOADER]-[TABLES]", result);

  return result.data;
};

export const tableLoader = async ({ queryKey }: { queryKey: QueryKey }) => {
  const [, { tableId }] = queryKey as [string, { tableId: string }];

  try {
    const result = await restApi.get(`/tables/${tableId}`);
    console.log("[LOADER]-[TABLE]", { tableId });

    return result.data;
  } catch (error:
    | {
        response: {
          data: string;
        };
      }
    | any) {
    throw Error(error?.response?.data);
  }
};
