import axios, { AxiosRequestConfig } from "axios";

import { sessionStorageService } from "./storage";

const TOKEN_KEY = "auth_token";

const getToken = () => sessionStorageService.getItem(TOKEN_KEY);

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

// Add request interceptor to manage Authorization token
request.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    let token = getToken();
    token = token ? token : "";

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return config as any;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      // Perform redirection or other actions if needed
    }

    return Promise.reject(error);
  }
);

export default request;
