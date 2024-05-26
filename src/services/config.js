import axios from "axios";
import { store } from "../redux/store";
import { setLoadingOff, setLoadingOn } from "../redux/reducers/spinnerSlice";
import { localService } from "./LocalService";

export const BASE_URL = "https://airbnbnew.cybersoft.edu.vn";

export const TokenCyberSoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MiIsIkhldEhhblN0cmluZyI6IjE3LzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyOTEyMzIwMDAwMCIsIm5iZiI6MTcwMDE1NDAwMCwiZXhwIjoxNzI5MjcwODAwfQ.xKQVYYnO9233wkXRw5oU4Dtx41flqDuUnA0DbkDYRmM";

export const configHeaders = () => {
  return {
    TokenCyberSoft,
    ["token"]: localService.get()?.token,
  };
};

export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeaders(),
});

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    // 
    store.dispatch(setLoadingOn());
    return config;
  },
  function (error) {
    // 
    store.dispatch(setLoadingOff());
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    
    store.dispatch(setLoadingOff());
    return response;
  },
  function (error) {
    
    store.dispatch(setLoadingOff());
    return Promise.reject(error);
  }
);
