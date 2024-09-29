import type { AxiosError } from "axios";

export const errorSanitazer = (error: AxiosError) => {
  return Promise.reject(error.response?.data);
};
