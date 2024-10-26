import axios from "axios";
import { errorSanitazer } from "./interceptors";

export const api = axios.create({
  baseURL: import.meta.env.VITE_ONE_WORD_API,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use((response) => response, errorSanitazer);
