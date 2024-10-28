import { SERVICE_URL } from "@utils/constants";
import axios from "axios";

const api = axios.create({
  baseURL: SERVICE_URL, // Base URL of your backend
  withCredentials: true, // Include credentials if the API requires authentication
});

export default api;
