import axios from "axios";

// axios.defaults.withCredentials = true;
export const restApi = axios.create({
  baseURL: import.meta.env.VITE_ONE_WORD_API,
  withCredentials: true,
  headers: {
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
