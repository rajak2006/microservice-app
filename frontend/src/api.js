import axios from "axios";

// Browser can reach backend via localhost + exposed ports
export const API_AUTH = "http://localhost:4000/auth";
export const API_CATALOGUE = "http://localhost:5000/products";

// Create an axios instance
const api = axios.create();

// Attach token automatically if it exists
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api; // <-- export your axios instance, not plain axios
