import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5005/api",
  headers: { "Content-Type": "application/json" },
});

// api.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (err) => {
//     return err.response.data.errors;
//   }
// );

export default api;
