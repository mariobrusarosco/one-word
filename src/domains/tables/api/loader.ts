import { QueryKey } from "@tanstack/react-query";
import { api } from "../../../api";
import { AxiosError } from "axios";

export const tablesLoader = async () => {
  const result = await api.get("/tables");

  return result.data;
};

export const tableLoader = async ({ queryKey }: { queryKey: QueryKey }) => {
  const [, { tableId }] = queryKey as [string, { tableId: string }];

  try {
    const result = await api.get(`/tables/${tableId}`);

    return result.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data) {
      throw Error(error.response.data);
    }
    throw error;
  }
};
