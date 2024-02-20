import axios from "axios";

const customAxios = axios.create({ baseURL: import.meta.env.VITE_URL });

customAxios.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      token: "knkdsncifh897e9vrvrekn",
    };
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (response) => response,

  (error) => {
    return Promise.reject(error);
  }
);

export default customAxios;
