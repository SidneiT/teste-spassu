import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:80/api/',
  timeout: 1000,
});

export default axiosInstance