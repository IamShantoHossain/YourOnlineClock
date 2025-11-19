import axios from "axios";

const isDev = process.env.NODE_ENV === "development";
const baseURL = isDev
  ? process.env.NEXT_PUBLIC_DEV_API_URL_DEV
  : process.env.NEXT_PUBLIC_BASE_SERVER_URL;

export const serverApi = axios.create({
  baseURL: `${baseURL}/api/v1`,
  withCredentials: true,
});
