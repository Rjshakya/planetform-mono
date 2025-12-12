import 'client-only';
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string

export const apiClient = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});
