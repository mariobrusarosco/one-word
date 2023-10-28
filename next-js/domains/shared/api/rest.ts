import axios from "axios";
import { AppEndpoints } from "./endpoints";

const restApi = axios.create({
  baseURL: AppEndpoints.BASE_URL,
});

export default restApi;
