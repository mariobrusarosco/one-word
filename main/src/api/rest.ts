import axios from "axios";

export const restApi = axios.create({
  baseURL: import.meta.env.VITE_ONE_WORD_API,
  // withCredentials: true,
});
