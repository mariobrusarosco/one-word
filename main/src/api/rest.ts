import axios from "axios";

export const restApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  withCredentials: true,
  headers: {
    "X-Version": "test",
  },
});
