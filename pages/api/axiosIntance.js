import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import handleApiError from "./axiosErrorHandler";

const instance = axios.create({
  baseURL: `https://zenfit-dc1d7a5dbfe1.herokuapp.com`,
});

instance.interceptors.request.use(
  function (config) {
    // Modify request config here for instance1
    config.headers = {
      ...config.headers,
      "Cache-Control": "no-cache",

      // Add or modify headers as needed
    };
    return config;
  },
  function (error) {
    handleApiError(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // Modify response data here for instance2
    return response;
  },
  function (error) {
    handleApiError(error);
    return Promise.reject(error);
  }
);

export { instance };
